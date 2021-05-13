import React from 'react'
import {imgUp, imgDown, heart, heartBroken} from './PostIcons'

export default ({post, increment, decrement}) => {
    return <article className='post-item'>
        <h2>{post.title}</h2>
        <div className='post-content'>{post.body}</div>

        <div className='post-counter'>
            <div className='btn-container'>
                <button className='btn-up'
                        onClick={() => increment(post.id)}>
                    {imgUp}
                </button>
                <span className='currentUp'>
                    {post.countUp}
                </span>
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
                <button className='btn-down'
                        onClick={() => decrement(post.id)}>
                    {imgDown}
                </button>
                <span className='currentDown'>
                    {post.countDown}
                </span>
            </div>
        </div>
    </article>
}
