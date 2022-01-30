import React, { Component } from  'react'
import './css/Contact.css'

class Contact extends Component{

    render(){
        return(
            <div id="Contact">
                <div className="container">
                    <h2>Contact Me</h2>
                    <div className="content">
                        <p>
                            最後までご覧いただきありがとうございます。<br/>
                            このサイトや私について何かコメント・お仕事のご依頼等ございましたらお気軽に以下よりお問い合わせください。
                        </p>
                        <div className="message_link">
                            <img src={require('./img/mailIcon.png')}/>
                            <a href="mailto:wooj8374@gmail.com">MESSAGE ME</a>
                        </div>
                        <p className="send_to">Send an email to me : <span>wooj8374@gmail.com</span></p>
                    </div>
                    <p className="thanks_message">Thank you for coming!!</p>
                </div>
            </div>
        );
    }
}

export default Contact;