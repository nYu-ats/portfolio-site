import React, { Component } from 'react'

class Footer extends Component{

    backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    render(){
        return(
            <div id="Footer">
                <div className="container">
                    <p>
                        ©︎2021 Nyu Atsushi
                    </p>
                    <div className="back_to_top" onClick={this.backToTop}>
                        <div className="arrow"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;