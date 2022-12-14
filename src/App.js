import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar"
import NovelList from "./components/NovelList"
import Home from "./components/Home"
import NovelDetails from "./components/NovelDetails"
import AddNovel from "./components/AddNovel"


export default function App(){
    const [novels, setNovels] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:3000/novels")
          .then(res => res.json())
          .then(setNovels);
      }, [])

    function updateNovels(novelObj){
        setNovels(novels.map(novel=> {
           return novel.id === novelObj.id ? novelObj: novel
           
        }))
    }
    function handleAddNovel(newNovel) {
        setNovels([...novels, newNovel]);
      }

    return (
        <div className="app">
            <NavBar/>
            <Switch>
                <Route exact path="/Novels">
                    <NovelList novels={novels} updateNovels={updateNovels} />
                </Route>
                <Route exact path="/NewNovel">
                    <AddNovel handleAddNovel={handleAddNovel}/>
                </Route>
                <Route path="/Novels/:id">
                    <NovelDetails/>
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
        </div>
    )
}