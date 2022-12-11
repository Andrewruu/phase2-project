import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar"
import NovelList from "./components/NovelList"
import MyNovelList from "./components/MyNovelList"
import Home from "./components/Home"
import Login from "./components/Login"
import { useHistory } from "react-router-dom";
import NovelDetails from "./components/NovelDetails"


export default function App(){
    const [novels, setNovels] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [myNovels, setMyNovel] = useState([])
    const [user, setUser] = useState(null)
    const history = useHistory();

    useEffect(() => {
        fetch("http://localhost:3000/novels")
          .then(res => res.json())
          .then(setNovels);
      }, [])
    
    function handleLogin(username, pass){
        fetch("http://localhost:3000/user")
            .then(res => res.json())
            .then(data => data.forEach((user)=>
              {
                if(user.username === username && user.password === pass)
                {
                    myNovleLists(user.id)
                    setIsLoggedIn(true)
                    history.push("/MyNovelList");
                    setUser(user)
                }
              }
            ))
    }
    function myNovleLists(id){
        fetch(`http://localhost:3000/user/${id}`)
            .then(res => res.json())
            .then(data => setMyNovel(data.novels.map((myID)=>
            ( 
                novels.find((novel)=> novel.id === myID)
            )
            )))
    }
    
    return (
        <div className="app">
            <NavBar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setMyNovel={setMyNovel} setUser={setUser}/>
            <Switch>
                <Route exact path="/login">
                    <Login user={user} handleLogin={handleLogin} isLoggedIn={isLoggedIn}/>
                </Route>
                <Route exact path="/Novels">
                    <NovelList novels={novels} user={user} isLoggedIn={isLoggedIn}/>
                </Route>
                <Route exact path={`/MyNovelList`}>
                    <MyNovelList myNovels={myNovels} isLoggedIn={isLoggedIn} />
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