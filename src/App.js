import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar"
import NovelList from "./components/NovelList"
import Home from "./components/Home"
import NovelDetails from "./components/NovelDetails"
import AddNovel from "./components/AddNovel"
import EditNovel from "./components/EditNovel"

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
    
    function handelEditNovel(editNovel){
        setNovels(novels.map(novel => novel.id === editNovel.id? editNovel: novel))
    }

    function handelRemoveNovel(removeNovel){
        setNovels(novels.filter(novel => novel.id !== removeNovel.id))
    }

    return (
        <div className="app">
            <NavBar/>
            <Switch>
                <Route exact path="/Novels">
                    <NovelList novels={novels} updateNovels={updateNovels} handelRemoveNovel={handelRemoveNovel}/>
                </Route>
                <Route exact path="/NewNovel">
                    <AddNovel handleAddNovel={handleAddNovel}/>
                </Route>
                <Route exact path="/EditNovel/:id">
                    <EditNovel handelEditNovel={handelEditNovel}/>
                </Route>
                <Route path="/Novels/:id">
                    <NovelDetails updateNovels={updateNovels} handelRemoveNovel={handelRemoveNovel}/>
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
        </div>
    )
}