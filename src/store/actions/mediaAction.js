import * as actionTypes from './actionsTypes'
import { SERVER_URL_LOCAL } from '../../constants/serverUrl'
import axios from 'axios';

export const getMovieLibrary = (page) => {

    console.log(page);

    return (dispatch, getState) => {

        axios.get(`${SERVER_URL_LOCAL}/getPaginatedMovie/?pageNo=` + page)
            .then(response => {

                console.log(response);

                if (response.data.movies.length !== 0) {
                    let moviesP1 = [...getState().movieLibraby]
                    let promice = response.data.movies.map(data => {
                        moviesP1.push(data)
                    })
                    Promise.all(promice).then(res => {

                        if (page === response.data.pages) {
                            console.log('page 3');
                            dispatch(getMovieLibrarySuccess(moviesP1, false))
                        }
                        else {
                            dispatch(getMovieLibrarySuccess(moviesP1, true))
                        }

                    })
                }
                else{
                    let moviesP1 = [...getState().movieLibraby]
                    dispatch(getMovieLibrarySuccess(moviesP1, false))
                }



            })
            .catch(err => {
                dispatch(getMovieLibrarySuccess(err))


            });
    }
};

export const searchMovie = (searchText) => {

    return (dispatch, getState) => {

        let updatedList = [...getState().movieLibraby];

        updatedList = updatedList.filter(function (item) {
            return item.name.toLowerCase().search(
                searchText.toLowerCase()) !== -1;
        });

        dispatch(searchMovieSuccess(updatedList))


        // axios.get(`${SERVER_URL_LOCAL}/getPaginatedMovie/?pageNo=`)
        //     .then(response => {
        //         console.log(response);
        //         dispatch(getMovieLibrarySuccess(response.data.movies))

        //     })
        //     .catch(err => {
        //         dispatch(getMovieLibrarySuccess(err))


        //     });
    }
};

// export const getMovieLibrary = () => (dispatch , getState) =>{

//     new Promice (function (resolve,reject){

//         axios.get('http://localhost:9090/getPaginatedMovie/?pageNo=1')
//         .then(response => {
//             console.log(response);
//             dispatch(getMovieLibrarySuccess(response.data.movies))
//             resolve(response);

//         })
//         .catch(err => {
//             dispatch(getMovieLibrarySuccess(err))

//             reject(err);

//         });


//     })

// }

// export const searchMedia = () => (dispatch, getState) => {

//     new Promice(function (resolve, reject) {

//         axios.get('http://localhost:9090/getPaginatedMovie/?pageNo=1')
//             .then(response => {
//                 console.log(response);
//                 dispatch(getMovieLibrarySuccess(response.data.movies))
//                 resolve(response);

//             })
//             .catch(err => {
//                 dispatch(getMovieLibrarySuccess(err))

//                 reject(err);

//             });


//     })

// }

export const getMovieLibraryStart = () => {
    return {
        type: actionTypes.GET_MOVIE_LIBRARY_START,
        hasMoreItems: true
    }
};
export const getMovieLibrarySuccess = (movieLibrary, hasMoreItems) => {
    return {
        type: actionTypes.GET_MOVIE_LIBRARY,
        movieLibrary: movieLibrary,
        hasMoreItems: hasMoreItems
    }
};

export const getMovieLibraryFail = (err) => {
    return {
        type: actionTypes.GET_MOVIE_LIBRARY,
        error: err
    }
};

export const searchMovieSuccess = (movieLibrary) => {
    return {
        type: actionTypes.SEARCH_MOVIE,
        movieLibrary: movieLibrary,
    }
};

// export const addSchedulerSuccess = (Schedulers) => {
//     return {
//         type: actionTypes.ADD_SCHEDULER_SUCCESS,
//         Schedulers: Schedulers
//     }
// };


// export const addSchedulerFail = (error) => {
//     return {
//         type: actionTypes.ADD_SCHEDULER_FAIL,
//         error: error
//     }
// };