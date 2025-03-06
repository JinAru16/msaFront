import secureLocalStorage from 'react-secure-storage';
import { useState, useEffect } from "react";

export default function Body(){
    /*
        secureLocalStorage.getItem('userInfo')는 클라이언트에서만 실행되어야 하지만,
        Next.js는 기본적으로 서버에서 먼저 렌더링(SSR)되므로 Hydration 오류 발생.
        서버에서 실행될 때 secureLocalStorage.getItem('userInfo')를 호출하면
        초기 값이 null이므로 SSR과 CSR 결과가 달라짐.
    */
    const [user, setUser] = useState<{ nickname: string } | null>(null); // 초기값 null

    useEffect(() => {
        const storedUser = secureLocalStorage.getItem("userInfo") as { nickname: string } | null;
        setUser(storedUser);
    }, []);

    return (
        <main className="p-6 text-center">
            <h2>Welcome to my next.js App!</h2>
            <p>This is the body content.</p>
            <h2 >{user ? user.nickname + "님 환영합니다." : ""}</h2>
        </main>
    )
}