import React, {useState,useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";

export default function EditNovel({updateNovel,novels}) {
    const params = useParams()
    const history = useHistory()
    const [novelObj, setNovelObj]= useState(novels.find((novel)=>novel.id == params.id))


    function handleChange(e) {
        setNovelObj({
          ...novelObj,
          [e.target.name]: e.target.value,
        })
      }
    
    function handelSubmit(e){
        e.preventDefault()
        const newNovel ={
            id: novelObj.id,
            title: novelObj.title,
            image: novelObj.image,
            liked: novelObj.liked == 'true'? true : false,
            chapters: novelObj.chapters,
            summary: novelObj.summary
        }
        fetch(`http://localhost:3000/novels/${novelObj.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify(newNovel),
          })
            .then((r) => r.json())
            .then(()=>{
                updateNovel(newNovel)
                history.push("/Novels")
            })
    }

    

    return (
        <div className="add-novel-form">
            <h1>Edit Novels</h1>
            <form onSubmit={handelSubmit}>
            <p>Title </p>
                <input
                type="text"
                name="title"
                label="title"
                value={novelObj.title}
                onChange={handleChange}/>
            <p>Image </p>
                <input
                type="text"
                name="image"
                label="image"
                value={novelObj.image}
                onChange={handleChange}/>
            <p>Favorite</p>
                <input
                type="radio"
                name="liked"
                label="like"
                value={true}
                onChange={handleChange}
                checked={novelObj.liked === true||novelObj.liked === "true"}
                />
            <label>Yes</label>
            <input
                type="radio"
                name="liked"
                label="dislike"
                value={false}
                onChange={handleChange}
                checked={novelObj.liked === false||novelObj.liked === "false"}
                />
            <label>No</label>
            <p>Chapters</p>
            <input
                type="number"
                name="chapters"
                lable="chapter"
                value={novelObj.chapters}
                onChange={handleChange}/>
            <p>Summary</p>
            <textarea
                name="summary"
                label="summary"
                value={novelObj.summary}
                onChange={handleChange}
            />
            <br/>
            <button type="submit">submit</button>

            </form>
        </div>
    )
}