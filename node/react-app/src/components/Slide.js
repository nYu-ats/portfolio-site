import React, { Component } from "react";
import LIKE_SLIDE_ARRAY from "../resources/likeSlide";

class Slide extends Component{
    slideLength = LIKE_SLIDE_ARRAY.length;

    constructor(){
        super();
        this.state = {
            slideIndex: 0,
        };

        this.setState((state) => ({
            slideIndex: (state.slideIndex + 1) % this.slideLength
        }));

        this.incrementSlideIndex = this.incrementSlideIndex.bind(this);
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState((state) => ({
                slideIndex: (state.slideIndex + 1) % this.slideLength
            }));
        }, 5000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    incrementSlideIndex(e){        
        this.setState((state) => ({
            slideIndex: (state.slideIndex + 1) % this.slideLength
        }));
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.setState((state) => ({
                slideIndex: (state.slideIndex + 1) % this.slideLength
            }));
        }, 5000);
    }

    render(){
        this.slides = LIKE_SLIDE_ARRAY.map((item, index) => {
            return (
                <div className={index==this.state.slideIndex ? "slide active" : "slide disactive"} key={index}>
                    <img src={item[1]} />
                    <p>
                        {item[0]}
                    </p>
                </div>
            );
        });

        return(
            <div className="slides">
                {this.slides}
                <div className="next_arrow" onClick={this.incrementSlideIndex}>
                    <span className="arrow"></span>
                </div>
            </div>
        );
    }
}

export default Slide;