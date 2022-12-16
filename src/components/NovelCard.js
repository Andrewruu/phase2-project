import React, {useState} from "react";

import { Link } from "react-router-dom";

export default function NovelCard({novel,updateNovel,handelRemoveNovel}){
    const {id, title, image, chapters, liked, summary} = novel
    const [like, setLike] = useState(liked)
    
    function handleLike(){
        const updatedNovelLike ={
            id: id,
            title: title,
            image: image,
            liked: !liked,
            chapters: chapters,
            summary: summary

        }
        fetch(`http://localhost:3000/novels/${id}`,{
            method: "PATCH",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body:JSON.stringify({liked: !liked})
        })
        .then (res => res.json())
        .then(()=>{
            updateNovel(updatedNovelLike)
            setLike(!like)
            })
        console.log(like)
    }

    function handleRemove(){
        fetch(`http://localhost:3000/novels/${id}`,{
            method: 'DELETE',
            headers:{
              'Content-Type': 'application/json'
            }
          })
          .then(res => res.json())
          .then(()=>handelRemoveNovel(novel))
          
    }

    const likeStyles = {
        color: "red"
    }
    const dislikeStyles = {
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
            {like? <h4 style={likeStyles} onClick={handleLike}>Like ♥</h4>:<h4 style={dislikeStyles} onClick={handleLike}>Like ♡</h4>}
            <p>Current Chapter {chapters}</p>
            
            <Link to={`/Novels/${id}`}>More Details</Link>
            <Link to={`/EditNovel/${id}`}>Edit</Link>
            <button onClick={handleRemove}>Remove</button>

        </div>
    )
}