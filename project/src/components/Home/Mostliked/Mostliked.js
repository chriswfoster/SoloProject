import React, { Component } from 'react'

import { getAllPosts, toDisplay } from "../../../ducks/reducer"
import { connect } from "react-redux"
import Moment from 'react-moment'
import Comments from '../../Comments/Comments'

import '../home.css'
 class Mostliked extends Component{
 
    

    render(){
        return(

            <div>
                
                </div>

        )
    }
 }

 
const mapStateToProps = state => state

export default connect(mapStateToProps, { getAllPosts, toDisplay})(Mostliked)
