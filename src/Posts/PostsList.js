import React from "react";
import './posts.scss'
import PostItem from './PostItem'

export default function PostsList(props) {
    console.log(props.posts[0])
    return (
        <div className='posts-list'>
            {props.posts.map(post => <PostItem post={post} key={post.id}/> )}
        </div>
    )
}