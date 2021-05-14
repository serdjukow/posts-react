import React, {useEffect, useState, createContext} from 'react'
import PostsList from './Posts/PostsList'
import './Posts/posts.scss'

export const PostsContext = createContext(undefined, undefined)

function App() {
    const [posts, setPosts] = useState([])
    useEffect(async () => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/?_limit=15`
        )
        const postList = await response.json()
        setPosts(postList.map(post => {
            return {
                ...post,
                countUp: null,
                countDown: null
            }
        }))
    }, [])

    const increment = (id) => {
        counter(id, true)
    }
    const decrement = (id) => {
        counter(id, false)
    }
    const counter = (id, isLike) => {
        const arr = [...posts]
        const idx = arr.findIndex(p => p.id === id)
        if (idx !== -1) {
            const postItem = {...arr[idx]}
            if (isLike) {
                postItem.countUp++
            } else if (!isLike) {
                postItem.countUp--
            }
            arr[idx] = postItem
        }
        setPosts(arr)
    }

    return <div className='wrapper'>
        <h1>Posts</h1>
        <PostsContext.Provider value={
            {
                increment,
                decrement
            }
        }>
            <PostsList
                posts={posts}
            />
        </PostsContext.Provider>
    </div>
}

export default App
