import Link from "next/link";
import {useEffect, useState} from "react";

interface Post {
    id: number;
    title: string;
    username: string;
    updateTime: string;
}

export default function BoardList() {

    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {


        fetch(`http://localhost:8090/api/community`, {
            method:"GET",
            credentials:"include"
        })
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);
console.log("posts : ", posts);
    return (
        <div className="text-center">
            <h1>게시판 목록</h1>
            <Link href="/board/new" className="bg-blue-500 text-white p-2 rounded">
                새 글 작성
            </Link>
            <table className="mx-auto w-1/2">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border w-1/32 p-2">글 번호</th>
                        <th className="border w-10/32 p-2">제목</th>
                        <th className="border w-1/32 p-2">조회수</th>
                        <th className="border w-1/32 p-2">추천수</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id} className="text-center hover:bg-gray-50">
                            <td className="border p-2">{post.id}</td>
                            <td className="border p-2">
                                <a href={`/board/${post.id}`} className="text-blue-500 hover:underline">{ post.title }</a>
                            </td>
                            <td className="border p-2">{post.id}</td>
                            <td className="border p-2">{post.title}</td>
                        </tr>

                    ))}
                </tbody>
            </table>

        </div>
    );
}