import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar"
import NovelList from "./components/NovelList"
import Home from "./components/Home"
import { useHistory } from "react-router-dom";
import NovelDetails from "./components/NovelDetails"


export default function App(){
    const [novels, setNovels] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [myNovels, setMyNovel] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3000/novels")
          .then(res => res.json())
          .then(setNovels);
      }, [])


    return (
        <div className="app">
            <NavBar setMyNovel={setMyNovel} />
            <Switch>
                <Route exact path="/Novels">
                    <NovelList novels={novels} user={user} />
                </Route>
                <Route path="/Novels/:id">
                    <NovelDetails/>
                </Route>
                <Route exact path="/">
                    <Home isLoggedIn={isLoggedIn}/>
                </Route>
            </Switch>
        </div>
    )
}