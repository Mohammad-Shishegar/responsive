import React, { Component } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Band from "./jsx_file/Band"
import Dark from "./jsx_file/Dark"
import Profile from "./jsx_file/Profile"


class App extends Component {
    render() {
        return ( 
        <div>
            <Switch>
                <Route path = {"/band"} component = {Band}/>
                <Route path = {"/dark"} component = {Dark}/>
                <Route path = {"/profile"} component = {Profile}/>
                <Redirect exact from = {"/responsive/"} to = {"/band"}/>
                {/* <Redirect exact from = {"/"} to = {"/band"}/> */}
            </Switch>
        </div>
        )
    }
}
export default App