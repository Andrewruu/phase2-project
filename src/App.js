import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar"
import NovelList from "./components/NovelList"
import MyNovelList from "./components/MyNovelList"
import Home from "./components/Home"

export default function App(){
    const [novels, setNovels] = useState([])
    const [novelIDs, setNovelIDs] = useState([])
    

    useEffect(() => {
        fetch("http://localhost:3000/novels")
          .then(res => res.json())
          .then(setNovels);
      }, [])
    
    
    
    return (
        <div className="app">
            {/*some components*/}
            <NavBar />
            <Switch>
                <Route exact path="/novellist">
                    <NovelList novels={novels}/>
                </Route>
                <Route exact path="/mynovellist">
                    <MyNovelList novels={novels}/>
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
        
    )
}