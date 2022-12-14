import React, {useState} from "react";
import { useHistory } from "react-router-dom";

export default function EditNovel({handelEditNovel, eNovel}) {
    const history = useHistory()

    const [novelObj, setNovelObj]= useState({
        id: eNovel.id,
        title: eNovel.title,
        image: eNovel.image,
        likes: eNovel.likes,
        chapters: eNovel.chapters,
        summary: eNovel.summary

    })

    function handleChange(e) {
        let value = e.target.value
        if (value==="true"){
            value = true
        }else if(value === "false"){
            value = false
        }
        setNovelObj({
          ...novelObj,
          [e.target.name]: value,
        })
      }
    
    function handelSubmit(e){
        e.preventDefault()
        const newNovel ={
            id: novelObj.id,
            title: novelObj.title,
            image: novelObj.image,
            likes: novelObj.likes,
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
            .then(handelEditNovel(newNovel))
            .then(history.push("/Novels"))
    }


    return (
        <div className="add-novel-form">
            <h1>Add Novels</h1>
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
                name="likes"
                label="like"
                value={true}
                onChange={handleChange}
                checked={novelObj.likes === true}
                />
            <label>Yes</label>
            <input
                type="radio"
                name="likes"
                label="dislike"
                value={false}
                onChange={handleChange}
                checked={novelObj.likes === false}
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