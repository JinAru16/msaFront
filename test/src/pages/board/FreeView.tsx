import Link from "next/link";

const dummyPosts = [
    { id: 1, title: "첫 번째 글" },
    { id: 2, title: "두 번째 글" },
];

export default function FreeView() {
    return (
        <div>
            <h1>게시판 목록</h1>
            <Link href="/board/new" className="bg-blue-500 text-white p-2 rounded">
                새 글 작성
            </Link>
            <ul>
                {dummyPosts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/board/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}