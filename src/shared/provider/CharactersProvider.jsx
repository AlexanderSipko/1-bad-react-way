import { createContext, useReducer, useMemo, useEffect, useCallback } from "react";
import { reducer, actionTypes, initialState } from "./charactersReducer";
import { useCharacterActions } from "../hooks/useCharacterActions";

export const CharactersContext = createContext();

export const CharactersProvider = ({ children, serviceRepository, serviceStore }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useCharacterActions(state, dispatch);


  useMemo(() => {
    serviceRepository && dispatch({ type: actionTypes.SET_SERVICE, payload: serviceRepository });
    serviceStore && dispatch({ type: actionTypes.SET_STORE, payload: serviceStore });
  }, [serviceRepository, serviceStore]);



  useEffect(() => {
    const timer = setTimeout(actions.fetchCharacters, 300);
    return () => clearTimeout(timer);
  }, [actions.fetchCharacters]);

  useEffect(() => {
    actions.fetchFavoriteIds();
  }, [actions.fetchFavoriteIds]);


  
  const value = useMemo(() => ({
    ...state,
    favoriteCharacters: actions.getFavoriteCharacters(),
    setQuery: actions.setQuery,
    isFavorite: actions.isFavorite,
    toggleFavorite: actions.toggleFavorite,
    clearFavorites: actions.clearFavorites,
    refetchCharacters: actions.fetchCharacters
  }), [state, actions]);

  return (
    <CharactersContext.Provider value={value}>
      {children}
    </CharactersContext.Provider>
  );
};