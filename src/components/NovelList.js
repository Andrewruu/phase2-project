import React from "react";
import NovelCard from "./NovelCard";


function NovelList({novels, user,isLoggedIn}){
    let inList = false

    const novelsList = (
        <div id="novel-collection">{
            novels.map((novel)=>{
                if (user !== null){
                    if (user.novels.includes(novel.id)){
                        inList = true
                    }else{
                        inList =false
                    }
                }  
             return <NovelCard key={novel.id} novel={novel} inList={inList} isLoggedIn={isLoggedIn}/>
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