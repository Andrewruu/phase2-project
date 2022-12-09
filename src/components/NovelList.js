import React from "react";
import NovelCard from "./NovelCard";


function NovelList({novels}){
    const novelsList = (
        <div id="novel-collection">{
            novels.map((novel)=>(
             <NovelCard key={novel.id} novel={novel}/>
          ))
          }</div>
      )


    return(
        <div>
            <h1>Novels</h1>
            {novelsList}
        </div>
    )
}

export default NovelList