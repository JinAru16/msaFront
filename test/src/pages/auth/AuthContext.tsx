import { createContext, useContext, useState, Dispatch, SetStateAction, useEffect } from "react";
import secureLocalStorage from "react-secure-storage";

// ✅ 정확한 타입 정의
interface AuthContextType {
    user: { nickname: string } | null;
    setUser: Dispatch<SetStateAction<{ nickname: string } | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<{ nickname: string } | null>(null);

    useEffect(() => {
        const storedUser = secureLocalStorage.getItem("userInfo") as { nickname: string } | null;
        setUser(storedUser);
    }, []);

    return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
