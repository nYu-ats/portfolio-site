import React, { Component, useCallback, useEffect } from 'react'
import { Link } from 'react-scroll'
import {Spring, animated} from 'react-spring'
import { rgba } from 'polished'

class Header extends Component{

    constructor(){
        super();
        this.state = {
            focus: 0,
        };
        this.updateFocus = this.updateFocus.bind(this);
    }

    updateFocus = (index) => {
        this.setState({
            focus: index
        });
    }
        
    componentDidMount(){
        document.addEventListener('scroll', ()=>{
            if(document.documentElement.scrollTop > document.getElementById('Contact').getBoundingClientRect().top + window.pageYOffset){
                this.setState({focus: 4});
            }else if(document.documentElement.scrollTop > document.getElementById('Skill').getBoundingClientRect().top + window.pageYOffset){
                this.setState({focus: 3});
            }else if(document.documentElement.scrollTop > document.getElementById('Work').getBoundingClientRect().top + window.pageYOffset){
                this.setState({focus: 2});
            }else if(document.documentElement.scrollTop > document.getElementById('About').getBoundingClientRect().top + window.pageYOffset){
                this.setState({focus: 1});
            }else{
                this.setState({focus: 0});
            }
        });
    }

    render(){
        this.headerStyle = rgba(255,255,255,0);

        if(this.state.focus === 1){
            this.headerStyle = rgba(75,75,75,0.8);
        }else if(this.state.focus === 2){
            this.headerStyle = rgba(75,75,90,0.8);
        }else if(this.state.focus === 3){
            this.headerStyle = rgba(75,90,90,0.8);
        }else if(this.state.focus === 4){
            this.headerStyle = rgba(90,90,90,0.8);
        }

        return(
            <Spring to={{backgroundColor:this.headerStyle}}>
                {styles => (
                <animated.div id="Header" style={styles}>
                    <div className="container">
                        <ul className="navigation">
                            <li className={this.state.focus===0 ? "item focused" : "item"}>
                                <Link to='Top' smooth={true} duaration={500}>
                                    <p>HOME</p>
                                </Link>
                            </li>
                            <li className={this.state.focus===1 ? "item focused" : "item"}>
                                <Link to='About' smooth={true} duaration={500}>
                                    <p>ABOUT</p>
                                </Link>
                            </li>
                            <li className={this.state.focus===2 ? "item focused" : "item"}>
                                <Link to='Work' smooth={true} duaration={500}>
                                    <p>WORK</p>
                                </Link>
                            </li>
                            <li className={this.state.focus===3 ? "item focused" : "item"}>
                                <Link to='Skill' smooth={true} duaration={500}>
                                    <p>SKILL</p>
                                </Link>
                            </li>
                            <li className={this.state.focus===4 ? "item focused" : "item"}>
                                <Link to='Contact' smooth={true} duaration={500}>
                                    <p>CONTACT</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </animated.div>
                )}
            </Spring>
        );
    }
}

export default Header;