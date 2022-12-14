import React, {useState} from "react";

import { Link } from "react-router-dom";

export default function NovelCard({novel,updateNovels,handelRemoveNovel}){
    const {id, title, image, chapters, likes, summery} = novel
    const [liked, setLiked] = useState(likes)
    
    function handleLike(){
        const updatedNovelLike ={
            id: id,
            title: title,
            image: image,
            likes: !likes,
            chapters: chapters,
            summery: summery

        }
        fetch(`http://localhost:3000/novels/${id}`,{
            method: "PATCH",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body:JSON.stringify({likes: !likes})
        }).then(updateNovels(updatedNovelLike))
        .then(setLiked(!liked))
    }

    function handleRemove(){
        fetch(`http://localhost:3000/novels/${id}`,{
            method: 'DELETE',
            headers:{
              'Content-Type': 'application/json'
            }
          })
          .then(res => res.json())
          .then(handelRemoveNovel(novel))
          
    }

    const likedStyles = {
        color: "red"
    }
    const dislikedStyles = {
        color: "black"
    }

    return(
        <div className="card">
            
            <h2>{title}</h2>
            <img
            src={image}
            alt={title}
            className="novel-avatar"
            />
            {liked? <h4 style={likedStyles} onClick={handleLike}>Like ♥</h4>:<h4 style={dislikedStyles} onClick={handleLike}>Like ♡</h4>}
            <p>Current Chapter {chapters}</p>
            
            <Link to={`/Novels/${id}`}>More Details</Link>
            <Link to={`/EditNovel/${id}`}>Edit</Link>
            <button onClick={handleRemove}>Remove</button>

        </div>
    )
}