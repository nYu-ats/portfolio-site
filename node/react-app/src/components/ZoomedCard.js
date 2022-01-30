import React, { Component } from "react";
import {Spring, animated} from 'react-spring'
import WORK_DETAIL_ARRAY from "../resources/workDetail";

class ZoomedCard extends Component{
    itemLemgth = WORK_DETAIL_ARRAY.length;
    
    constructor(props){
        super(props);
        this.state = {
            slideIndex: 0,
        };
        this.clicked = this.clicked.bind(this);
    }

    clicked(){
        this.props.doAction(0);
    }

    render(){
        this.style = {
            height: '0vh',
            opacity: 0,
        }

        if(this.props.activeIndex != 0){
            this.style = {
                height: '100vh',
                opacity: 1,
            }    
        }

        this.workDetails = WORK_DETAIL_ARRAY.map((item, index) => {
            this.deiscription = item[1].map((string, index) => {
                return(
                    <React.Fragment key={index}>{string}<br/></React.Fragment>
                );
            });

            this.tools = item[2].map((tool, index) => {
                return(
                    <li>
                        <p className="list_item" key={index}>
                            {tool}
                        </p> 
                    </li>
                );
            });

            this.images = item[3].map((image, index) => {
                return(
                    <img src={image} key={index}/>
                );
            });

            return (
                <div className={(index+1)==this.props.activeIndex ? "content open" : "content"} key={index+1}>
                    <div className="close_btn" onClick={this.clicked}>
                        ×
                    </div>
                    <p className="title">
                        - PROJECT -
                    </p>
                    <h3>
                        {item[0]}
                    </h3>
                    <p className="title">
                        - ABOUT -
                    </p>
                    <p className="discription">
                        {this.deiscription}
                    </p>  
                    <p className="title">
                        - TOOLS -
                    </p>
                    <ul>
                        {this.tools}
                    </ul>
                    {this.images}
                </div>
            );
        })

        return(
            <Spring to={this.style}>
                {styles => (
                <animated.div className={this.props.activeIndex != 0 ? "card_zoom_container open" : "card_zoom_container close"} style={styles}>
                    {this.workDetails}
                </animated.div>
                )}
            </Spring>
                
        );
    }
}

export default ZoomedCard;