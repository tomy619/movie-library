import React from 'react';

import Image from './image'

import placeholder from '../../../../assets/img/placeholder_for_missing_posters.png'
import LazyLoad from 'react-lazy-load';

function Poster(props) {
    return (


        <div className="bg-transparent p-1" >
                <Image alt={placeholder} src={props.posterImage} ></Image>
                <div className=" bg-transparent text-gray-500 text-left">
                    <h2 className="text-poster-title font-light">{props.name}</h2>
                </div>
            </div>


        // <LazyLoad
        //     height={200}
        //     onContentVisible={() => console.log('look ma I have been lazyloaded!')}
        // >
        //     <div className="bg-gray-900 p-1" >
        //         <img className="m-0" src={props.posterImage} />
        //         {/* <Image alt={placeholder} src={props.posterImage} ></Image> */}
        //         <div className=" bg-gray-900 text-gray-500 text-left">
        //             <h2 className="text-poster-title font-light">{props.name}</h2>
        //         </div>
        //     </div>
        // </LazyLoad>

        // <div className="bg-transparent p-1" >
        //     <img className="m-0" src={props.posterImage} />
        //     {/* <Image alt={placeholder} src={props.posterImage} ></Image> */}
        //     <div className=" bg-transparent text-gray-500 text-left">
        //         <h2 className="text-poster-title font-light">{props.name}</h2>
        //     </div>
        // </div>

    );
}

export default Poster;
