import React, {useState} from "react";

import { Link } from "react-router-dom";

export default function NovelCard({novel, inList, isLoggedIn, user, updateUser}){
    const {id, title, image, chapters} = novel
    const [inListState, setinListState] = useState(inList)


    
    function handleAddRemove(){
        if(inListState){
            handleRemove()
            console.log('remove')
        }else{
            handleAdd()
            console.log('add')
        }
        setinListState(!inListState)
    }

    function handleUpdate(userObj){
        updateUser(userObj)
    }

    function handleAdd(){
        const updateUserNovel =[...user.novels, id]
        const updateUserObj ={
            id: user.id,
            username: user.username,
            password: user.password,
            novels: updateUserNovel
        }
        fetch(`http://localhost:3000/user/${user.id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }, 
        body:JSON.stringify(updateUserObj)
        }).then(r => r.json())
        .then(handleUpdate(updateUserObj))
        
    }

    function handleRemove(){
        const updateUserNovel = user.novels.filter(novel=> novel !== id)
        const updateUserObj={
            id: user.id,
            username: user.username,
            password: user.password,
            novels: updateUserNovel
        }
        fetch(`http://localhost:3000/user/${user.id}`,{
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        }, body:JSON.stringify(updateUserObj)
        }).then(r => r.json())
        .then(handleUpdate(updateUserObj))
    }

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
            {isLoggedIn ? inListState ? <button onClick={handleAddRemove}>Remove Novel</button>:<button onClick={handleAddRemove}>Add Novel</button>:null}
        </div>
    )
}