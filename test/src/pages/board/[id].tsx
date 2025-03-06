import {useRouter} from "next/router";
import { useEffect, useState } from "react";
interface Post {
    id: number;
    title: string;
    content: string;
    username: string;
    updateTime: string;
}
export default function FreeView() {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState<Post>();

    useEffect(() => {
        if (!id) return; // id가 없으면 실행 X
        fetch(`http://localhost:8090/api/community/${id}`, {
            method:"GET",
            credentials:"include"
        })
            .then((res) => res.json())
            .then((data) => setPost(data));
    }, [id]);

    if (!post) return <p>로딩 중...</p>;

    return (
        <div>
            <div className="max-w-1/2 mx-auto p-6 border rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
                <p className="text-gray-600 mb-2">작성자: {post.username} | 작성일: {post.updateTime}</p>
                <hr className="my-4" />
                <div className="text-lg  h-180 overflow-y-auto p-2  rounded-md">
                    {post.content}
                </div>
            </div>
        </div>
    );
}