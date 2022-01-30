import React, { Component } from  'react'
import './css/Work.css'
import Gallery from './components/Gallery';
import ZoomedCard from './components/ZoomedCard';
import ScollReveal from 'scrollreveal'

class Work extends Component{

    constructor(props){
        super(props);
        this.state = {
            active: 0
        };
        
        this.setCardIndex = this.setCardIndex.bind(this);
    }

    componentDidMount(){
        ScollReveal().reveal('.reveal', {
            origin:'bottom',
            duration: 2000,
            distance: '10%'
        });
    }
    
    setCardIndex = (cardIndex) => {
        this.setState({
            active: cardIndex
        });
    }

    render(){
        return(
            <><div id="Work">
                <div className="container">
                    <h2>My Works</h2>
                    <div className="content reveal">
                        <p>
                            これまで個人にて作成したプロダクト類です
                        </p>
                        <Gallery doAction={this.setCardIndex} />
                    </div>
                </div>
            </div>
            {/* 親要素にtransformを使う必要があり、#Workの子要素にできない */}
            <ZoomedCard activeIndex={this.state.active} doAction={this.setCardIndex}/></>
        );
    }
}

export default Work;