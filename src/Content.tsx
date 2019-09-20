import * as React from 'react'
import {FunctionComponent} from "react";
import {Route} from "react-router";
import {routes} from "./routes";
import {Registration} from "./Registration";
import {BrowserRouter as Router} from "react-router-dom";
import {MusicPanelTop} from "./MusicPanelTop";

export interface ContentProps{

}
export const Content:FunctionComponent<ContentProps>=()=>{
    return(


        <div >Content</div>


    )
}