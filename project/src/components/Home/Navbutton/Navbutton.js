import React, { Component } from 'react'
import { Link } from "react-router-dom"

import { connect } from "react-redux"

import {homeicon} from './home_icon.png'

import './navbutton.css'
 class Navbutton extends Component{
    constructor(){
        super()
        this.state={
            plusbutton: "navbuttoncircle navbuttonbouncer",
            homebutton:"navbuttonhomeicon navbuttonbouncer",
            yourpagebutton: "navbuttonyourpageicon navbuttonbouncer"
        }
    }
    
    
    
expander(){
this.state.plusbutton==="navbuttoncircle navbuttonbouncer" || this.state.plusbutton==="navbuttoncircle navbuttonrollerreverse"?
this.setState({plusbutton: "navbuttoncircle navbuttonroller", homebutton: 'navbuttonhomeicon navbuttonmovehome', yourpagebutton: "navbuttonyourpageicon navbuttonmoveyourpage"}) :
this.setState({plusbutton: "navbuttoncircle navbuttonrollerreverse", homebutton: 'navbuttonhomeicon navbuttonmovehomereverse', yourpagebutton: "navbuttonyourpageicon navbuttonmoveyourpagereverse" })
}


    render(){
        return(
            <div onClick={() => this.expander()}>

                <div className={this.state.plusbutton}><h1> + </h1></div>
                <Link to="/" className={this.state.homebutton}> <img src={require('./home_icon.png')}/></Link>
                <Link to="/yourpage" className={this.state.yourpagebutton}> <img src={require('./yourpage_icon.png')}/> </Link>
                </div>
        )
    }
    }

    export default Navbutton