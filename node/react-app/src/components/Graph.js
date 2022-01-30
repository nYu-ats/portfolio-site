import React, { Component } from  'react'
import { Spring, animated } from 'react-spring';

class Graph extends Component{

    constructor(){
        super();
        this.state = {
            playback : false,
        };
        this.doPlayback = this.doPlayback.bind(this);
    }

    doPlayback = () => {
        this.setState({
            playback : true
        });
    }
    
    componentDidMount(){
        document.addEventListener('scroll', ()=>{
            if(document.documentElement.scrollTop > document.getElementById('Skill').getBoundingClientRect().top + window.pageYOffset){
                this.doPlayback();
            }
        });
    }

    render(){
        this.initial_style ={width: '0%', opacity: '0'};

        this.graphs = this.props.skillProps.map((item, index) => {
            return (
                <li className={"chart " + item[0]} key={index}>
                <p className="skill">{item[1]}</p>
                <Spring to={this.state.playback ? item[3] : this.initial_style}>
                    {styles => 
                <animated.div className="data" style={styles}>
                    <p>{item[2]}</p>
                </animated.div>
                }
                </Spring>
            </li>
            );
        });

        return(
            <ul className="charts">
                {this.graphs}
            </ul>
        );
    }
}

export default Graph;