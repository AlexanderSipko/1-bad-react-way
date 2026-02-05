import { useCallback } from "react";
import { actionTypes } from "@/shared/provider/charactersReducer";

export const useCharacterActions = (state, dispatch) => {
  const { characterService, characterStore, query, favoriteIds, characters } = state;

  const fetchCharacters = useCallback(async () => {
    if (!characterService) return;
    
    try {
      dispatch({ type: actionTypes.FETCH_CHARACTERS_START});
      
      const result = query.trim() 
        ? await characterService.searchCharacters(query)
        : await characterService.getCharacters();
      
      dispatch({ 
        type: actionTypes.FETCH_CHARACTERS_SUCCESS, 
        payload: result.data 
      });
    } catch (error) {
      dispatch({ 
        type: actionTypes.FETCH_CHARACTERS_ERROR, 
        payload: error.message 
      });
    }
  }, [characterService, query, dispatch]);

  const fetchFavoriteIds = useCallback(async () => {
    if (!characterStore) return;
    
    try {
      const ids = await characterStore.getFavorites();
      dispatch({ type: actionTypes.FETCH_FAVORITES_SUCCESS, payload: ids });
    } catch (error) {
      console.error('Failed to fetch favorites:', error);
    }
  }, [characterStore, dispatch]);

  const addToFavorites = useCallback(async (id) => {
    if (!characterStore) return;
    await characterStore.addFavorite(id);
    await fetchFavoriteIds();
  }, [characterStore, fetchFavoriteIds]);

  const removeFromFavorites = useCallback(async (id) => {
    if (!characterStore) return;
    await characterStore.removeFavorite(id);
    await fetchFavoriteIds();
  }, [characterStore, fetchFavoriteIds]);

  const clearFavorites = useCallback(async () => {
    if (!characterStore) return;
    await characterStore.clearFavorites();
    dispatch({ type: actionTypes.CLEAR_FAVORITES });
  }, [characterStore, dispatch]);

  const isFavorite = useCallback((id) => {
    return favoriteIds.includes(Number(id));
  }, [favoriteIds]);

  const toggleFavorite = useCallback(async (id) => {
    isFavorite(id) 
      ? await removeFromFavorites(id)
      : await addToFavorites(id);
  }, [isFavorite, addToFavorites, removeFromFavorites]);

  const getFavoriteCharacters = useCallback(() => {
    return characters.filter(c => favoriteIds.includes(c.id));
  }, [characters, favoriteIds]);

  const setQuery = useCallback((payload) => {
    dispatch({ type: actionTypes.QUERY, payload });
  }, [dispatch]);

  return {
    fetchCharacters,
    fetchFavoriteIds,
    addToFavorites,
    removeFromFavorites,
    clearFavorites,
    isFavorite,
    toggleFavorite,
    getFavoriteCharacters,
    setQuery
  };
};