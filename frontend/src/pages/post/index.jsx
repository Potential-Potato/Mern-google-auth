import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function Post() {
    const [post, setPost] = useState({
        title: '',
        body: '',
    });

    const [posts, setPosts] = useState([]); // State to store fetched posts

    const fetchPosts = async () => {
        try {
            const response = await axios.get('/post');
            console.log(response.data); // Log the response data
            setPosts(response.data.posts);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };
    
    useEffect(() => {
        fetchPosts(); // Fetch posts when the component mounts
    }, []);

    const handlePost = async (e) => {
        e.preventDefault();
        const { title, body } = post;
        try {
            const response = await axios.post('/post', { title, body });
            if (response.data.error) {
                toast.error(response.data.error);
            } else {
                setPost({ title: '', body: '' });
                toast.success('Post Successful!');
                fetchPosts();
            }
        } catch (error) {
            console.error('Error posting:', error);
            toast.error('An error occurred while posting.');
        }
    };

    return (
        <>
            <div>
                <h1>Post Something!</h1>
                <Link to={'/'}>Home</Link> 
                <form onSubmit={handlePost}>
                    <div>
                        <label>Title</label>
                        <input
                            type="text"
                            placeholder="enter title"
                            value={post.title}
                            onChange={(e) => setPost({ ...post, title: e.target.value })}
                        />
                    </div>
                    <div>
                        <label>Body</label>
                        <input
                            type="text"
                            placeholder="enter body"
                            value={post.body}
                            onChange={(e) => setPost({ ...post, body: e.target.value })}
                        />
                        <button type="submit">Post</button>
                    </div>
                </form>
            </div>

            <div>
                <h2>Posts</h2>
                {posts.map((post) => (
                    <div key={post._id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <p>User ID: {post.createdBy}</p>
                        <p>Created By: {post.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Post;
