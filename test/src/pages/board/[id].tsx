import {useRouter} from "next/router";
import { useEffect, useState } from "react";

export default function FreeView() {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState(null);

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
            <h1>{post.title}</h1>
            <h1>{post.content}</h1>

        </div>
    );
}