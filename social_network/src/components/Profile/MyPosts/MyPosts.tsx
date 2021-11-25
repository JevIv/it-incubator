import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

type PostType = {
    id: number
    post: string
    likesCount: number
}


const MyPosts = () => {

    let postData: Array<PostType>= [
        {id:1, post:"My first post", likesCount: 12},
        {id:2, post:"My second post", likesCount: 10},
        {id:3, post:"My third post", likesCount: 1},
        {id:4, post:"My fourth post", likesCount: 15},
        {id:5, post:"My fifth post", likesCount: 0},
        {id:6, post:"My sixth post", likesCount: 5},
    ]

    let postsElements = postData.map(p => <Post message={p.post} likesCount={p.likesCount}/>)

    return (
        <div>
            My posts
            <div>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
                <Post message={postData[0].post} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].post} likesCount={postData[1].likesCount}/>
                <Post message={postData[2].post} likesCount={postData[2].likesCount}/>
                <Post message={postData[3].post} likesCount={postData[3].likesCount}/>
                <Post message={postData[4].post} likesCount={postData[4].likesCount}/>
                <Post message={postData[5].post} likesCount={postData[5].likesCount}/>
            </div>
        </div>
)
    ;
}

export default MyPosts;