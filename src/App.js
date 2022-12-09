import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar"
import NovelList from "./components/NovelList"
import MyNovelList from "./components/MyNovelList"
import Home from "./components/Home"
import Login from "./components/Login"

export default function App(){
    const [novels, setNovels] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [myNovels, setMyNovel] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/novels")
          .then(res => res.json())
          .then(setNovels);
      }, [])
    
    function loggedin(){
        fetch("http://localhost:3000/user/1")
            .then(res => res.json())
            .then(data => setMyNovel(data.novels.map((myID)=>
            ( 
                novels.find((novel)=> novel.id === myID)
            )
            )))
    }
    
    
    return (
        <div className="app">
            <NavBar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
            <Switch>
                <Route exact path="/login">
                    <Login setIsLoggedIn={setIsLoggedIn} loggedin={loggedin}/>
                </Route>
                <Route exact path="/novellist">
                    <NovelList novels={novels}/>
                </Route>
                <Route exact path="/mynovellist">
                    <MyNovelList myNovels={myNovels} isLoggedIn={isLoggedIn}/>
                </Route>
                <Route exact path="/">
                    <Home isLoggedIn={isLoggedIn}/>
                </Route>
            </Switch>
        </div>
    )
}