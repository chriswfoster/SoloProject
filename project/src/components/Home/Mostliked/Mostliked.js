import React, { Component } from 'react'

import { getAllPosts, toDisplay } from "../../../ducks/reducer"
import { connect } from "react-redux"
import Moment from 'react-moment'
import Comments from '../../Comments/Comments'

import './mostliked.css'
 class Mostliked extends Component{
    constructor(){
        super()
     
        
    }
    

    render(){
       
      const testz = Math.max.apply(Math, (this.props.allposts.map((dream, i) => dream.likes)))

     const evenfinder = this.props.allposts.map((dream, i) => (
       testz == dream.likes ?
        <div className="liked__inner" div key={i}>
        
        
        <center><h1 className="likednittifont"> MOST LIKED RECENT POST! </h1></center>
        <h3><u>{dream.story_title}</u></h3>
        
        <div className="likedstorytext" id="likedscrollbar">
        <pre>
            {dream.story_text}
            </pre>
        </div>

            <div className="likedinfluenceflex">
            
                <div className="likedinfluence" id="likedscrollbar">
                <pre><u>DREAM AID:</u> <br/>{dream.influence}</pre>
                </div>
                
                <div className="likedinfluence" id="likedscrollbar">
                <pre><u>BACK STORY:</u> <br/>{dream.back_story}</pre>
                    </div>

                </div>


        </div>
        
        : ''
    ))


               
        
        return(

            <div>
                {evenfinder}
                </div>

        )
    }
 }

 
const mapStateToProps = state => state

export default connect(mapStateToProps, { getAllPosts, toDisplay})(Mostliked)
