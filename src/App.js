import React, {useEffect, useState} from 'react'
import PostsList from './Posts/PostsList'

function App() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(postList => {
                setPosts(postList.map(post => {
                    return {
                        ...post,
                        countUp: 0,
                        countDown: 0
                    }
                }))
            })
    }, [])

    const increment = (id) => {
        const arr = [...posts]
        const idx = arr.findIndex(p => p.id === id)
        if (idx !== -1) {
            const postItem = {...arr[idx]}
            postItem.countUp++
            arr[idx] = postItem
        }
        setPosts(arr)
    }
    const decrement = (id) => {
        const arr = [...posts]
        const idx = arr.findIndex(p => p.id === id)
        if (idx !== -1) {
            const postItem = {...arr[idx]}
            postItem.countDown--
            arr[idx] = postItem
        }
        setPosts(arr)
    }

    return (
        <div className='wrapper'>
            <h1>Posts</h1>
            <PostsList
                posts={posts}
                increment={increment}
                decrement={decrement}
            />
        </div>
    )
}

export default App
