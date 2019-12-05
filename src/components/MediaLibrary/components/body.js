import React, { Component } from 'react';

import Poster from './body/poster'

class MediaLibrary extends Component {

    render() {

        return (
            <div className='bg-transparent	'>

                {this.props.movies.length !== 0 ?
                    <div className="flex flex-wrap px-tom">
                        {this.props.movies.map((movie, index) => {
                            return (
                                <div key={index} className="w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 mb-4  ">
                                    <Poster name={movie.name} posterImage={movie.poster_Image}></Poster>
                                </div>
                            )
                        })}
                    </div>

                    :
                    null
                }


            </div>
        );
    }
}

export default MediaLibrary;
