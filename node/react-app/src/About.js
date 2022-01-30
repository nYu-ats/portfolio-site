import React, { Component } from 'react'
import './css/About.css'
import Slide from './components/Slide'
import ScollReveal from 'scrollreveal'

class About extends Component{

    componentDidMount(){
        ScollReveal().reveal('.reveal', {
            origin:'bottom',
            duration: 2000,
            distance: '10%'
        });
    }

    render(){
        return(
            <div id="About">
                <div className="scroll_arrow">
                    <p>scroll</p>
                    <div className="arrow"></div>
                </div>
                <div className="container">
                    <h2>About Me</h2>
                    <div className="content reveal">
                        <p>
                            都内でWebエンジニアをしています。<br/>
                            名古屋大学を卒業し、新卒でネットワークエンジニアとして就職。
                            その後プログラミングの楽しさに目覚め、Webエンジニアにキャリアチェンジ。<br/>
                            今に至る。
                        </p>
                        <p>
                            JavaやPythonでのAPI開発から、データ分析基盤の改修・新機能開発など、主にバックエンドの開発を経験。
                            その他、個人で仕事を受けてWebサイトの作成等も行なっています。<br/>
                        </p>
                        <Slide />
                    </div>
                </div>
            </div>
        );
    }
}

export default About;