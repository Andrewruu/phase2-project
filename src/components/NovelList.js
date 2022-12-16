import React from "react";
import NovelCard from "./NovelCard";


function NovelList({novels, updateNovel, handelRemoveNovel}){
    const novelsList = (
        <div id="novel-collection">{
            novels.map((novel)=>{
             return <NovelCard key={novel.id} novel={novel} updateNovel={updateNovel} handelRemoveNovel={handelRemoveNovel}/>
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