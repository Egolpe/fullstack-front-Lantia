import React, { Fragment } from 'react'
import YT from "react-youtube";
import Slider from "react-slick";
import YouTubeIcon from '@material-ui/icons/YouTube';


export function Videos() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <Fragment>
            <div className="videos">
              <div className="d-flex flex-row justify-content-between">
              <YouTubeIcon fontSize="large"  />
                <h1>Videos</h1>
              </div>
              <Slider {...settings}>
                      <div className="slideItem mb-2">
                        <iframe src={`https://www.youtube.com/embed/?autoplay=1&enablejsapi=1&controls=0&enable`}
                            className="appContentYoutubePlayer"
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                        />
                      </div>
              </Slider>
            </div>
        </Fragment>
    )
}
