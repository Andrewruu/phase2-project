import React, {useState} from "react";

export default function AddNovel() {
    const [novelObj, setNovelObj]= useState({
        title: "",
        image: "",
        likes: true,
        chapters: "",
        summary: ""

    })

    return (
        <div className="add-novel-form">
            <h1>Add Novels</h1>
            <form>
            <p>Title </p>
                <input
                type="text"
                name="title"
                label="title"/>
            <p>Image </p>
                <input
                type="text"
                name="image"
                label="image"/>
            <p>Favorite</p>
                <input
                type="radio"
                name="like"
                label="like"
                value={true}
                />
            <label for="like">Yes</label>
            <input
                type="radio"
                name="dislike"
                label="dislike"
                value={false}
                />
            <label for="dislike">No</label>
            <p>Chapters</p>

                



            </form>
        </div>
    )
}