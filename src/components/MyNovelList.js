import React from "react";
import { Redirect } from "react-router";
import NovelCard from "./NovelCard";



function MyNovelList({myNovels, isLoggedIn, user, updateUser}){
    if (!isLoggedIn) return <Redirect to="/login" />;
    const novelsList = (
        <div id="novel-collection">{
            myNovels.map((novel)=>(
             <NovelCard key={novel.title} novel={novel} inList={true} isLoggedIn={true} user={user} updateUser={updateUser}/>
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