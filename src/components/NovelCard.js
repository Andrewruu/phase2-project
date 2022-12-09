import React from "react";

export default function NovelCard({novel:{title,image}}){

    return(
        <div className="card">
            <h2>{title}</h2>
            <img
            src={image}
            alt={title}
            className="novel-avatar"
            />
        </div>
    )
}