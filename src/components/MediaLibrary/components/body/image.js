import React , { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import LazyLoad from 'react-lazy-load';

function MyImage(props) {


  const [showLowResImages, showLowResImagesHandler] = useState(true)

  const imagedLoaded = () => {
    showLowResImagesHandler(false)
  }


  return (
    <div>

      <LazyLoadImage
        alt={props.src}
        effect="blur"
        height={180}
        width={120}
        key={props.src}
        afterLoad={imagedLoaded}
        placeholderSrc={showLowResImages ? props.alt : props.src}
        // scrollPosition={scrollPosition}
        src={props.src}
        threshold={200}
        wrapperClassName="gallery-img-wrapper" 
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