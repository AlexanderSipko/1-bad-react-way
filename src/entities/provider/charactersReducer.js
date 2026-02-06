export const initialState = {
  query: "",
  characterService: null,
  characterStore: null,
  characters: [],
  favoriteIds: [],
  info:null,
  loading: false,
  error: null,
};

export const actionTypes = {
  QUERY: "QUERY",
  SET_SERVICE: "SET_SERVICE",
  SET_STORE: "SET_STORE",
  FETCH_CHARACTERS_START: 'FETCH_CHARACTERS_START',
  FETCH_CHARACTERS_SUCCESS: 'FETCH_CHARACTERS_SUCCESS',
  FETCH_CHARACTERS_ERROR: 'FETCH_CHARACTERS_ERROR',
  FETCH_FAVORITES_SUCCESS: 'FETCH_FAVORITES_SUCCESS',
  CLEAR_FAVORITES: 'CLEAR_FAVORITES'
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.QUERY:
      return {
        ...state,
        query: action.payload
      };
    
    case actionTypes.SET_SERVICE:
      return {
        ...state,
        characterService: action.payload
      };
    
    case actionTypes.SET_STORE:
      return {
        ...state,
        characterStore: action.payload
      };
  
      case actionTypes.FETCH_CHARACTERS_START:
        return {
          ...state,
          isLoading: true,
          error: null
        };
      
      case actionTypes.FETCH_CHARACTERS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: null,
          characters: action.payload.results || [],
          info: action.payload.info
        };
      
      case actionTypes.FETCH_CHARACTERS_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
          characters: []
        };
    
    case actionTypes.FETCH_FAVORITES_SUCCESS:
      return {
        ...state,
        favoriteIds: action.payload
      };
    
    case actionTypes.CLEAR_FAVORITES:
      return {
        ...state,
        favoriteIds: []
      };
    
    default:
      return state;
  }
};