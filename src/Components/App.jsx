import React, { Component } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Band from "./jsx_file/Band"
import Dark from "./jsx_file/Dark"
import Profile from "./jsx_file/Profile"


class App extends Component {
    render() {
        return ( 
        <div>
            <main>
                <Switch>
                    <Route path = {"/band"} component = {Band}/>
                    <Route path = {"/dark"} component = {Dark}/>
                    <Route path = {"/profile"} component = {Profile}/>
                    <Redirect exact from = {"/"} to = {"/band"}/>
                </Switch>
            </main>
        </div>
        )
    }
}
export default App