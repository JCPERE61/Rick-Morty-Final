import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './actions';

const initialState = {
    myFavorites:[],
    allCharacters:[],
};

function rootReducer(state=initialState,{type,payload}) {
    switch(type) {
        
        case ADD_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload};

    
        case REMOVE_FAV:
                    return { ...state, myFavorites: payload };
                    
        case FILTER:

            const genderFilter = state.allCharacters.filter( (char) => {
                if (char.gender === payload) {
                  return true;
                } else if (payload === "Todos") {
                  return true;
                }
                return false
              }
            );

            return {
                ...state,
                myFavorites: genderFilter,
              };

        case ORDER:

            const ordById = state.allCharacters.sort( (a, b) => {
                if (payload === "D") {
                    if(a.id < b.id) return 1;
                    if(b.id < a.id) return -1;
                    } else 
                if (payload === "A") {
                    if(a.id > b.id) return 1;
                    if(b.id > a.id) return -1;
                    }
                }
            );

            return {
            ...state,
            myFavorites: ordById,
          };          
        
        default:
            return {
                ...state,
            }
    }
}

export default rootReducer