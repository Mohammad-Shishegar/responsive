import React, { Component } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Band from "./Components/jsx_file/Band"
import Dark from "./Components/jsx_file/Dark"


class App extends Component {
    render() {
        return ( 
        <div>
            <main>
                <Switch>
                    <Route path = {"/band"} component = {Band}/>
                    <Route path = {"/dark"} component = {Dark}/>
                    <Redirect exact from = {"/"} to = {"/band"}/>
                </Switch>
            </main>
        </div>
        )
    }
}
export default App