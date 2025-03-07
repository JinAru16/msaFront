import Link from "next/link";
import {useEffect, useState} from "react";
import { useRouter } from "next/router"
interface Post {
    id: number;
    title: string;
    username: string;
    updateTime: string;
}

export default function BoardList() {
    const router = useRouter();
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch("http://localhost:8090/api/community", {
                    method: "GET",
                    credentials: "include"
                });

                if (!res.ok) {
                    alert('로그인한 사용자만 이용이 가능합니다.');
                    await router.push("/auth/Signin"); // ✅ 로그인 페이지로 이동.
                }

                const data = await res.json();
                setPosts(data); // ✅ 정상적으로 상태 업데이트
            } catch (error) {
                console.error("게시글 가져오기 실패:", error);
            }
        };

        fetchPosts();
    }, []);

    return (
            <div className="text-center">
                <h1>게시판 목록</h1>
                <Link href="/board/New" className="bg-blue-500 text-white p-2 rounded">
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
                                <a href={`/board/${post.id}`} className="text-blue-500 hover:underline">{post.title}</a>
                            </td>
                            <td className="border p-2">{post.id}</td>
                            <td className="border p-2">{post.title}</td>
                        </tr>

                    ))}
                    </tbody>
                </table>

            </div>
        )
    }
