import React from 'react';

import Poster from './components/poster'
import Head from './components/head'


import one from '../../assets/img/poster1.jpg'
import two from '../../assets/img/poster2.jpg'
import three from '../../assets/img/poster3.jpg'
import four from '../../assets/img/poster4.jpg'
import five from '../../assets/img/poster5.jpg'

function App() {
    return (
        <div className='bg-gray-900'>
            
            <Head></Head>

            <div className="flex flex-wrap">

                <div className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4  px-1 py-2 ">
                    <Poster posterImage={one}></Poster>
                </div>
                <div className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4   px-1 py-1 ">
                    <Poster posterImage={two}></Poster>
                </div>
                <div className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4   px-1 py-1 ">
                    <Poster posterImage={three}></Poster>
                </div>
                <div className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4   px-1 py-1 ">
                    <Poster posterImage={four}></Poster>
                </div>
                <div className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4   px-1 py-1 ">
                    <Poster posterImage={five}></Poster>
                </div>
                
               
                      <div className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4   px-1 py-1 ">
                    <Poster posterImage={one}></Poster>
                </div>
                <div className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4   px-1 py-1 ">
                    <Poster posterImage={two}></Poster>
                </div>
                <div className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4   px-1 py-1 ">
                    <Poster posterImage={three}></Poster>
                </div>
                <div className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4   px-1 py-1 ">
                    <Poster posterImage={four}></Poster>
                </div>
                <div className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4   px-1 py-1 ">
                    <Poster posterImage={five}></Poster>
                </div>
            </div>

            {/* <div className=" flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row  ">
                <div className="text-gray-700 text-center  px-1 py-1 m-3" >
                    <Poster posterImage={one}></Poster>
                </div>
                <div className="text-gray-700 text-center  px-1 py-1 m-2">
                    <Poster posterImage={two}></Poster>
                </div>
                <div className="text-gray-700 text-center  px-1 py-1 m-2">
                    <Poster posterImage={three}></Poster>
                </div>
                <div className="text-gray-700 text-center  px-1 py-1 m-2">
                    <Poster posterImage={three}></Poster>
                </div>
            </div>
            <div className=" flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row ">
                <div className="text-gray-700 text-center  px-1 py-1 m-2">
                    <Poster posterImage={one}></Poster>
                </div>
                <div className="text-gray-700 text-center  px-1 py-1 m-2">
                    <Poster posterImage={two}></Poster>
                </div>
                <div className="text-gray-700 text-center  px-1 py-1 m-2">
                    <Poster posterImage={three}></Poster>
                </div>
            </div> */}
        </div>
    );
}

export default App;
