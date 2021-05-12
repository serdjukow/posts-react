import React, {useState} from 'react'
import {imgUp, imgDown, heart, heartBroken} from './PostIcons'

export default function PostItem({post}) {
    const [countUp, setCountUp] = useState(0)
    const [countDown, setCountDown] = useState(0)

    const increment = () => setCountUp(countUp + 1)
    const decrement = () => setCountDown(countDown - 1)
    const heartSum = (sum) => (sum >= 0) ? heart : heartBroken

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
                    {countUp}
                </span>
            </div>
            <div className='like-sum'>
                <span className='like-sum-icon'>
                    {heartSum(countUp + countDown)}
                </span>
                <span className='like-sum'>
                    {countUp + countDown}
                </span>
            </div>
            <div className='btn-container'>
                <button className='btn-down'
                    onClick={() => decrement(post.id)}>
                    {imgDown}
                </button>
                <span className='currentDown'>
                    {countDown}
                </span>
            </div>
        </div>
    </article>
}