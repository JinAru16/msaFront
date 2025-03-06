
import { useAuth } from "@/pages/auth/AuthContext";


export default function Body(){
    const { user } = useAuth();

    return (
        <main className="p-6 text-center">
            <h2>Welcome to my next.js App!</h2>
            <p>This is the body content.</p>
            <h2 >{user ? user + "님 환영합니다." : ""}</h2>
        </main>
    )
}