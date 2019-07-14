import React from 'react';

import Image from './image'

import placeholder from '../../../../assets/img/placeholder_for_missing_posters.png'

function Poster(props) {
    return (
        <div className="bg-gray-900 p-1" >
            <img className="m-0" src={placeholder} />
            {/* <Image alt={placeholder} src={props.posterImage} ></Image> */}
            <div className=" bg-gray-900 text-gray-500 text-left">
                <h2 className="text-poster-title font-light">{props.name}</h2>
            </div>
        </div>
    );
}

export default Poster;
