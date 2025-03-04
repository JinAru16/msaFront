import Link from "next/link";

const dummyPosts = [
    { id: 1, title: "첫 번째 글", views: 1, recommended: 0 },
    { id: 2, title: "두 번째 글" , views: 0, recommended: 1},
    { id: 3, title: "teset122" , views: 3, recommended: 0},
    { id: 4, title: "board 33" , views: 10, recommended: 10},
    { id: 5, title: "qqqwer1234" , views: 22, recommended: 0}
];

export default function BoardList() {
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
                    {dummyPosts.map((post) => (
                        <tr key={post.id} className="text-center hover:bg-gray-50">
                            <td className="border p-2">{post.id}</td>
                            <td className="border p-2">
                                <a href={`/board/${post.id}`} className="text-blue-500 hover:underline">{ post.title }</a>
                            </td>
                            <td className="border p-2">{post.views}</td>
                            <td className="border p-2">{post.recommended}</td>
                        </tr>

                    ))}
                </tbody>
            </table>

        </div>
    );
}