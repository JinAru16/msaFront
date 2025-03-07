import {useAuth} from "@/pages/auth/AuthContext";
import { useRouter } from "next/router"
import secureLocalStorage from 'react-secure-storage';

export default function MyPage() {
    const { setUser } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        try{// 백엔드 로그아웃 api 호출
            const res = await fetch("http://localhost:8070/api/auth/logout", {
                method : "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({}),
                credentials: "include",
            });

            if(res.status === 200){
                secureLocalStorage.removeItem("userInfo"); // ✅ localStorage에서 제거
                setUser(null);
                await router.push("/auth/Signin");
            }
        } catch (e : unknown) {
            console.error(e);
        }
    }
    return (
        <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white p-2 rounded" onClick={handleLogout} >Logout</button>
        </div>
    );
}