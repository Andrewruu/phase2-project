import React from "react"
import { Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar"
import NovelList from "./components/NovelList"
import MyNovelList from "./components/MyNovelList"
import Home from "./components/Home"

export default function App(){

    return (
        <div className="app">
            {/*some components*/}
            <NavBar />
            <Switch>
                <Route exact path="/novellist">
                    <NovelList />
                </Route>
                <Route exact path="/mynovellist">
                    <MyNovelList />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
        
    )
}