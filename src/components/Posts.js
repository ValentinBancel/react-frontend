// src/components/Posts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import wpApiSettings from '../config'; // Importez la configuration

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${wpApiSettings.restUrl}posts`, {
                    headers: {
                        'X-WP-Nonce': wpApiSettings.nonce // Si vous utilisez le nonce
                    }
                });
                setPosts(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <div>Chargement des publications...</div>;
    }

    if (error) {
        return <div>Erreur lors du chargement des publications : {error.message}</div>;
    }

    return (
        <div>
            <h2>Publications</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                ))}
            </ul>
        </div>
    );
}

export default Posts;
