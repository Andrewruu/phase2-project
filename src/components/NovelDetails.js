import React ,{ useEffect, useState} from "react";
import { useParams } from "react-router-dom";

export default function NovelDetails(){
    const [novel, setNovel] = useState(null)
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/Novels/${params.id}`)
            .then(res => res.json())
            .then(data => setNovel(data))
    }, [params.id])

    if(novel===null){
        return <h1> Loading...</h1>
    }

    return (
        <div className="novel-detail">
        <h1>{novel.title}</h1>
            <img
            src={novel.image}
            alt={novel.title}
            className="novel-detail-avatar"
            />
        </div>
    )
}