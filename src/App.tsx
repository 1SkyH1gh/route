import React, {FunctionComponent} from 'react';
import {Page} from "./Page";
import {Provider} from 'react-redux'
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home} from "./resourses/components/Home";
import {routes} from "./routes";
import {Registration} from "./Registration";
import {Content} from "./Content";
import {MusicPanelTop} from "./MusicPanelTop";

export interface appProps {
    store: any
}

const App: FunctionComponent<appProps> = (props) => {
    return (
        <Provider store={props.store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path={routes.main} component={Registration}/>
                    <Route exact path={routes.Page} component={Home}/>
                </Switch>
            </BrowserRouter>

        </Provider>
    );
}

export default App;
