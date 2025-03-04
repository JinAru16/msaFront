
import { useState } from "react";
import { useRouter } from "next/router"
// @ts-ignore
export default function signIn() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("http://localhost:8070/api/auth/login", { // 스프링 부트 백엔드 URL
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
                credentials: "include", // 쿠키 자동 포함
            });

            if (!res.ok) throw new Error("로그인 실패. 이메일 또는 비밀번호를 확인하세요.");

            // onLoginSuccess(); // 로그인 성공 시 부모 컴포넌트에서 처리
            await router.push("/");
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <div className="max-w-sm mx-auto p-6 border rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-4">로그인</h1>
    {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
    <input
        type="username"
        placeholder="아이디"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded"
        required
        />
        <input
            type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
        required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        로그인
        </button>
        </form>
        </div>
    );
    }