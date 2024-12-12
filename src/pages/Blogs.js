import React from 'react';
import './Blogs.css'; // Import the CSS for styling

function Blogs() {
    const blogPosts = [
        {
            id: 1,
            title: 'The Future of Web Development',
            content: 'Web development is evolving with frameworks like React, Angular, and Vue dominating the landscape. Learn what’s next!',
            author: 'John Doe',
            date: 'December 10, 2024',
        },
        {
            id: 2,
            title: 'Understanding Artificial Intelligence',
            content: 'AI is shaping the future. This blog explains how AI works and how it impacts various industries.',
            author: 'Jane Smith',
            date: 'December 5, 2024',
        },
        {
            id: 3,
            title: 'Top JavaScript Tips for Beginners',
            content: 'Boost your JavaScript skills with these essential tips and tricks to write cleaner and more efficient code.',
            author: 'Sam Wilson',
            date: 'November 30, 2024',
        },
    ];

    return (
        <div className="blogs-container">
            <h2>Blogs</h2>
            <div className="blog-list">
                {blogPosts.map((post) => (
                    <div key={post.id} className="blog-item">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <div className="blog-meta">
                            <span>By {post.author}</span>
                            <span>{post.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blogs;
