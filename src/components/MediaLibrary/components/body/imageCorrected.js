import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

class MyImage extends Component {
    state = {
        showLowResImages: true,
        height: 180,
        width: 120
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }


    imagedLoaded = () => {
        this.setState({ showLowResImages: false })
    }

    updateDimensions = () => {
        console.log(window.innerWidth);
        if (window.innerWidth > 825) {
            this.setState({ height: 300, width: 200 })
        }
        else if (window.innerWidth <= 825 && window.innerWidth > 600) {
            this.setState({ height: 280, width: 190 })
        }
        else if (window.innerWidth <= 600 && window.innerWidth > 560) {
            this.setState({ height: 265, width: 180 })
        }
        else if (window.innerWidth <= 560 && window.innerWidth > 530) {
            this.setState({ height: 250, width: 170 })
        }
        else if (window.innerWidth <= 530 && window.innerWidth > 500) {
            this.setState({ height: 235, width: 160 })
        }
        else if (window.innerWidth <= 500 && window.innerWidth > 470) {
            this.setState({ height: 220, width: 150 })
        }
        else if (window.innerWidth <= 470 && window.innerWidth > 440) {
            this.setState({ height: 205, width: 140 })
        }
        else if (window.innerWidth <= 440 && window.innerWidth > 410) {
            this.setState({ height: 190, width: 130 })
        }
        else {
            this.setState({ height: 180, width: 120 })
        }
    }


    render() {

        return (
            <div>
                <LazyLoadImage
                    alt={this.props.src}
                    effect="blur"
                    height={this.state.height}
                    width={this.state.width}
                    key={this.props.src}
                    afterLoad={this.imagedLoaded}
                    placeholderSrc={this.state.showLowResImages ? this.props.alt : this.props.src}
                    // scrollPosition={scrollPosition}
                    src={this.props.src}
                    threshold={200}
                />
            </div>
        );

    }
}

export default MyImage;