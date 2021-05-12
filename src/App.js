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


    return (
        <div className='wrapper'>
            <h1>Posts</h1>
            <PostsList posts={posts}/>
        </div>
    )
}

export default App