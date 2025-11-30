import React, { useState, useEffect } from "react";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    useId: number;
}

const AxiosAPI: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]); // State สำหรับเก็บข้อมูล Posts
    const [loading, setLoading] = useState<boolean>(true); // State เช็คสถานะการโหลด

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                // 🟩 GET request ไปยัง API
                const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data); // ข้อมูลจะอยู่ใน response.data
            } catch (error: unknown) {
                console.error('Failed to fetch posts:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
            <ul>
                {posts.map((post: Post) => (
                    <li key={post.id} className="mb-2 p-2 border rounded">
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AxiosAPI;
