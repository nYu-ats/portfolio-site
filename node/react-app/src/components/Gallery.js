import React, { Component } from "react";
import WORK_SLIDE_ARRAY from "../resources/workSlide";

class Gallery extends Component{
    slideLength = WORK_SLIDE_ARRAY.length;

    constructor(props){
        super(props);
        this.clicked = this.clicked.bind(this);
    }

    clicked(e){
        this.props.doAction(e.currentTarget.dataset.index);
    }
    
    render(){
        this.galleris = WORK_SLIDE_ARRAY.map((item, index) =>{
            return(
                <div className="card" key={index} data-index={index+1} onClick={this.clicked}>
                    <img src={item[1]} />
                    <p>
                        - {item[0]} -
                    </p>
                </div>
            );
        });

        return(
            <div className="gallery">
                {this.galleris}
            </div>
        );
    }
}

export default Gallery;