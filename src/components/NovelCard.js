import React, {useState} from "react";

import { Link } from "react-router-dom";

export default function NovelCard({novel}){
    const {id, title, image, chapters} = novel


    return(
        <div className="card">
            <h2>{title}</h2>
            <img
            src={image}
            alt={title}
            className="novel-avatar"
            />
            <Link to={`/Novels/${id}`}>More Details</Link>
            <p>Total Chapters {chapters}</p>
  
        </div>
    )
}