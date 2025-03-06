import {FormEvent, useState} from "react";
import { useRouter } from "next/router"
import secureLocalStorage from 'react-secure-storage';

export default function New(){

    const[title, setTitle] = useState("");
    const[content, setContent] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const writeCommunity = async (e: FormEvent ) => {
        e.preventDefault(); // 기본폼 제출방지.
        setError(""); //기존 에러메세지 삭제.

        const user  = secureLocalStorage.getItem('userInfo');
        if (user) {
            try {
                const res = await fetch("http://localhost:8090/api/community", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({content, title}),
                    credentials: "include",
                })
               if(res.status === 200){
                   const boardID = await res.json()
                   await router.push(`/board/${boardID.id}`);
               }

            } catch (e : unknown) {
                if (e instanceof Error) {
                    setError(e.message); // ✅ `e`가 Error 객체인 경우
                } else {
                    setError("알 수 없는 오류가 발생했습니다."); // ❌ 예상치 못한 타입 처리
                }
            }
        } else{
            await router.push("/auth/Signin");
        }
    }

    return (
        <div className="max-w-1/2 mx-auto p-6 border rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-4">자유게시판</h1>
        <form onSubmit={writeCommunity} className="flex flex-col gap-4">
        <input
            type="text"
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded"
            required
        />
        <textarea
            placeholder="내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border p-2 h-100 resize-none rounded"
            required
        />
        <button type="submit" className="w-20 bg-blue-500 text-white p-2 rounded">
            ✏️ 글쓰기
        </button>
    </form>
    </div>
    )
}