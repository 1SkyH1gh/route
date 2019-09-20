import * as React from 'react'
import {FunctionComponent, useState} from "react";
import {BrowserRouter as Router, Link, NavLink, Route} from "react-router-dom";
import {routes} from "./routes";
import {Provider} from "react-redux";
import { Redirect,  Switch } from "react-router"
import {Content} from "./Content";
import {push} from 'connected-react-router'
import styles from './FormStyles.module.scss'
export interface RegistrationProps {

}

export const Registration:FunctionComponent<RegistrationProps>=(props)=>{

    return(


        <div className={styles.container}>
            <form className={styles.form}>
                <input className={styles.input}/>
                <input className={styles.input}/>
            </form>


           <NavLink to={routes.Page} className={styles.button}>
            sign in!
           </NavLink>


        </div>


    )
}