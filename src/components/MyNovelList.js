import React, { useState, useEffect} from "react";
import { Redirect } from "react-router";
import NovelCard from "./NovelCard";



function MyNovelList({myNovels, isLoggedIn}){
    if (!isLoggedIn) return <Redirect to="/login" />;
    const novelsList = (
        <div id="novel-collection">{
            myNovels.map((novel)=>(
             <NovelCard key={novel.id} novel={novel} inList={true} isLoggedIn={true}/>
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