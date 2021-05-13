import React from "react";
import './posts.scss'
import PostItem from './PostItem'

export default ({posts, increment, decrement}) => {
    return (
        <div className='posts-list'>
            {posts.map(post => (
                <PostItem
                    post={post}
                    key={post.id}
                    increment={increment}
                    decrement={decrement}
                />
            ))}
        </div>
    )
}
