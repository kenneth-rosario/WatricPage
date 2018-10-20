import React from 'react'

export default class FrontForSlider extends React.Component{
    constructor(){
        super();
        // this.state = {
        //     curr_word: super.state.current_word
        // }
    }

    render(){
        return(
            <div id={"ABOUT"} className={"front-part"}>
                <h1 style={{textTransform: "capitalize" }}>
                    ABOUT US
                </h1>

                <p className={"about-text"} align="left" style={{ paddingLeft:'6%', marginTop:'5%'}}>

                    We bring sustainability by developing and
                    <br/>
                    implementing new ways of resources extraction and renewable energy.
                    <br/>

                </p>
                <p className={"learn-more"} align="right">
                    Learn more <a href="https://watricpr.com/about">here</a>.
                </p>
            </div>
        )
    }



}