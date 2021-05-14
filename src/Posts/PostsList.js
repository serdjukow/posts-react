import React from "react";
import PostItem from './PostCounter'

export default ({posts}) => {
    return (
        <div className='posts-list'>
            {posts.map(post => (
                <article className='post-item' key={post.id}>
                    <h2>{post.title}</h2>
                    <div className='post-content'>{post.body}</div>
                    <PostItem
                        post={post}
                        key={post.id}
                    />
                </article>
            ))}
        </div>
    )
}
