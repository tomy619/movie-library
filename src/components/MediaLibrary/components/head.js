import React, { useState } from 'react';

import Header from '../../../assets/img/nav_bar.png'

import { FaArrowLeft } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

function App(props) {

    const [search, searchHandler] = useState(false)

    const toggleSearch = () => {
        searchHandler(!search)

        if(search){
            props.searchClear()
        }
    }


    return (
        <div className="fixed  top-0 bg-transparent" >
            <img className="m-0 w-screen" style={{ height: 60 }} src={Header} />
            <div className=" absolute top-0 p-1 text-gray-500 text-centre">

                <div className="flex flex-initial justify-center  items-center bg-transparent pr-4">
                    <div className="flex-initial pr-4">
                        <FaArrowLeft />
                    </div>
                    <div className="flex-initial pr-4">
                        <h2 className="text-poster-title font-light">Romantic Comedy</h2>
                    </div>


                    {search ?
                        <input className="fixed right-0 mr-10" autoFocus onChange={props.search} style={{ paddingLeft: '10px', paddingRight: '10px', borderRadius: '10px', width:'150px' }} type="text"></input>
                        : null
                    }
                    <div className="fixed right-0 p-2 pr-4" onClick={toggleSearch}>
                        <FaSearch />
                    </div>


                </div>

            </div>
        </div>
    );
}

export default App;
