import React ,{ useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function NovelDetails({updateNovels,handelRemoveNovel}){
    const [novel, setNovel] = useState(null)
    const params = useParams()
    const [liked, setLiked] = useState(true)
    const history = useHistory()
    useEffect(() => {
        fetch(`http://localhost:3000/Novels/${params.id}`)
            .then(res => res.json())
            .then(data => setNovel(data))
    }, [params.id])

    if(novel===null){
        return <h1> Loading...</h1>
    }
    function handleLike(){
        const updatedNovelLike ={
            id: novel.id,
            title: novel.title,
            image: novel.image,
            likes: !novel.likes,
            chapters: novel.chapters,
            summery: novel.summery

        }
        fetch(`http://localhost:3000/novels/${novel.id}`,{
            method: "PATCH",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body:JSON.stringify({likes: !novel.likes})
        }).then(updateNovels(updatedNovelLike))
        .then(setLiked(!liked))
    }
    function handleRemove(){
        fetch(`http://localhost:3000/novels/${novel.id}`,{
            method: 'DELETE',
            headers:{
              'Content-Type': 'application/json'
            }
          })
          .then(res => res.json())
          .then(handelRemoveNovel(novel))
          .then(history.push("/Novels"))
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
            {liked? <h4 style={likedStyles} onClick={handleLike}>Like ♥</h4>:<h4 style={dislikedStyles} onClick={handleLike}>Like ♡</h4>}
            <h2>Total Chapters {novel.chapters}</h2>
            <Link to={`/EditNovel/${novel.id}`}>Edit</Link>
            <br></br>
            <button onClick={handleRemove}>Remove</button>
            <h3>Summary</h3>
            <p> {novel.summary} </p>
        </div>
    )
}