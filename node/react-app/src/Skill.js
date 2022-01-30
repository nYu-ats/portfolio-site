import React, { Component } from  'react'
import './css/Skill.css'
import ScollReveal from 'scrollreveal'
import Graph from './components/Graph'
import FRONTEND_SKILL_ARRAY from './resources/froneEndSkill'
import BACKEND_SKILL_ARRAY from './resources/backEndSkill'

class Skill extends Component{

    componentDidMount(){
        ScollReveal().reveal('.reveal', {
            origin:'bottom',
            duration: 2000,
            distance: '10%'
        });
    }

    render(){
        return(
            <div id="Skill">
                <div className="container">
                    <h2>Skill Set</h2>
                    <div className="content reveal">
                        <div className="flex">
                            <div className="chart_box right">
                                <h3>
                                   FRONTEND SKILLS 
                                </h3>
                                <Graph skillProps={FRONTEND_SKILL_ARRAY}/>
                            </div>
                            <div className="chart_box left">
                                <h3>
                                    BACKEND SKILLS 
                                </h3>
                                <Graph skillProps={BACKEND_SKILL_ARRAY}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skill;