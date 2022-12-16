import React ,{ useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function NovelDetails({updateNovel,handelRemoveNovel, novels}){
    const params = useParams()

    const novel = novels.find((novel)=>novel.id == params.id)
    const [like, setLike] = useState(novel.liked)
    const history = useHistory()

    if(novel===null){
        return <h1> Loading...</h1>
    }
    function handleLike(){
        const updatedNovelLike ={
            id: novel.id,
            title: novel.title,
            image: novel.image,
            liked: !novel.liked,
            chapters: novel.chapters,
            summary: novel.summary

        }
        fetch(`http://localhost:3000/novels/${novel.id}`,{
            method: "PATCH",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body:JSON.stringify({liked: !like})
        })
        .then (res => res.json())
        .then(()=>{
            updateNovel(updatedNovelLike)
            setLike(!like)
            })
    }
    function handleRemove(){
        fetch(`http://localhost:3000/novels/${novel.id}`,{
            method: 'DELETE',
            headers:{
              'Content-Type': 'application/json'
            }
          })
          .then(res => res.json())
          .then(()=>history.push("/Novels"))
          .then(()=>handelRemoveNovel(novel))
          
    }

    const likedStyles = {
        color: "red"
    }
    const dislikedStyles = {
        color: "black"
    }

    return (
        <div className="novel-detail">
        <h1>{novel.title}</h1>
            <img
            src={novel.image}
            alt={novel.title}
            className="novel-detail-avatar"
            />
            {like? <h4 style={likedStyles} onClick={handleLike}>Like ♥</h4>:<h4 style={dislikedStyles} onClick={handleLike}>Like ♡</h4>}
            <h2>Total Chapters {novel.chapters}</h2>
            <Link to={`/EditNovel/${novel.id}`}>Edit</Link>
            <br></br>
            <button onClick={handleRemove}>Remove</button>
            <h3>Summary</h3>
            <p> {novel.summary} </p>
        </div>
    )
}