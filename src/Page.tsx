import * as React from 'react'
import {FunctionComponent} from "react";
import {Header} from "./Header";
import {Content} from "./Content";
import {MusicPanelTop} from "./MusicPanelTop";
import {LeftPanel} from "./LeftPanel";

export const Page:FunctionComponent=()=>{
    return(
        <div>
        <Header/>
        <MusicPanelTop/>
        <LeftPanel/>
       <Content/>

        </div>
    )
}