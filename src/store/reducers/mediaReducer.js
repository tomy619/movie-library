import * as actionTypes from '../actions/actionsTypes'

const initialState = {
    movieLibraby:[],
    filteredMovieLibraby:[],
    hasMoreItems:false,
    loading:true,

}

const reducer = (state = initialState, action)=>{


    switch (action.type){


        case actionTypes.GET_MOVIE_LIBRARY_START:
            return{
                ...state,
                hasMoreItems:action.hasMoreItems
            }

        case actionTypes.GET_MOVIE_LIBRARY:
            return{
                ...state,
                movieLibraby:action.movieLibrary,
                filteredMovieLibraby:action.movieLibrary,
                hasMoreItems:action.hasMoreItems
            }
      
        case actionTypes.SEARCH_MOVIE:
            return{
                ...state,
                filteredMovieLibraby:action.movieLibrary,
            }

            default:
            return state;

    }



}

export default reducer;