import React, {useState,useEffect} from 'react'
import axios from 'axios'

const Feed =()=>{
    const [posts,setPosts] = useState([{
        _id:1,
        image:"https://imgs.search.brave.com/nq25f1Q24ML4S0ZWWNb-GXTt5tvXvff5IzrsXoFMguc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjEv/OTAxLzgwMC9zbWFs/bC9hcnRpc3RpYy1o/YW5kcy1lbWJyYWNl/LW5hdHVyZS1zLWJl/YXV0eS1ob2xkaW5n/LXRyZWUtb3Zlci1i/bHVycmVkLWJhY2tn/cm91bmQtcGhvdG8u/anBn",
        caption:"This is a self portrait"       
    }])
useEffect(()=>{
    axios.get("http://localhost:3000/posts")
    .then((res)=>{
        setPosts(res.data.posts)
    })
},[])

    return (
        <section className='feed-section'>
{
    posts.length> 0 ? (posts.map(post => (
        <div key={post._id} className='post-card'>
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
        </div>
    ))) : (
        <p>No posts yet.</p>
        )
}
        </section>
    )
}

export default Feed