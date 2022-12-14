import React from "react";
import NovelCard from "./NovelCard";


function NovelList({novels, updateNovels}){
    const novelsList = (
        <div id="novel-collection">{
            novels.map((novel)=>{
             return <NovelCard key={novel.id} novel={novel} updateNovels={updateNovels}/>
            })
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