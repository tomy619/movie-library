import React , { useState, useEffect, useLayoutEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import LazyLoad from 'react-lazy-load';

function MyImage(props) {

  const [showLowResImages, showLowResImagesHandler] = useState(true)
  const [height, heighHandler] = useState(180)
  const [width, widthHandler] = useState(120)

  const imagedLoaded = () => {
    showLowResImagesHandler(false)
  }

  useEffect(()=>{
    console.log(window.innerWidth);
    if(window.innerWidth > 808){
      heighHandler(300);
      widthHandler(200)
    }
  })

  useLayoutEffect(()=>{
    console.log(window.innerWidth);
    if(window.innerWidth > 808){
      heighHandler(300);
      widthHandler(200)
    }
    else if( 820 >  window.innerWidth < 500){
      heighHandler(280);
      widthHandler(190)
    }
    else{
      heighHandler(180);
      widthHandler(120)
    }
  })


  return (
    <div>

      <LazyLoadImage
        alt={props.src}
        effect="blur"
        height={height}
        width={width}
        key={props.src}
        afterLoad={imagedLoaded}
        placeholderSrc={showLowResImages ? props.alt : props.src}
        // scrollPosition={scrollPosition}
        src={props.src}
        threshold={200}
        />

      {/* <LazyLoad
      height={200}
      onContentVisible={() => console.log('look ma I have been lazyloaded!')}
    >
      <img className="m-0" src={props.src}/>
    </LazyLoad> */}




    </div>
  )

};

export default MyImage;