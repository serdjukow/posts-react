import React from 'react'
import {imgUp, imgDown, heart, heartBroken} from './PostIcons'
import {PostsContext} from "../App";

export default ({post}) => {
    const context = React.useContext(PostsContext)

    return <div className='post-counter'>
        <div className='btn-container'>
            <button className='btn-up' onClick={() => context.increment(post.id)}>
                {imgUp}
            </button>
        </div>
        <div className='like-sum'>
                <span className='like-sum-icon'>
                    {(post.countUp + post.countDown) >= 0 ? heart : heartBroken}
                </span>
            <span className='like-sum'>
                    {post.countUp + post.countDown}
                </span>
        </div>
        <div className='btn-container'>
            <button className='btn-down' onClick={() => context.decrement(post.id)}>
                {imgDown}
            </button>
        </div>
    </div>
}
