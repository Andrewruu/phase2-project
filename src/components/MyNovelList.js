import React, { useState, useEffect} from "react";
import NovelCard from "./NovelCard";



function MyNovelList({novels}){
    const [myNovels, setMyNovel] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:3000/user/1")
          .then(res => res.json())
          .then(data => setMyNovel(data.novels.map((myID)=>
            ( 
                novels.find((novel)=> novel.id === myID)
            )
          )))
        }, [])

    
    const novelsList = (
        <div id="novel-collection">{
            myNovels.map((novel)=>(
             <NovelCard key={novel.id} novel={novel}/>
          ))
          }</div>
    )

    return(
        <div>
            <h1>My Novels</h1>
            {novelsList}
        </div>
    )
}

export default MyNovelList