import { useState } from "react";
import Sidebar from "@/components/main/Sidebar";
import Header from "@/components/main/Header";
import Footer from "@/components/main/Footer";
import {AuthProvider} from "@/pages/auth/AuthContext";

// @ts-ignore
export default function Layout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="relative">
            {/* Sidebar */}
                <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

            {/* 메인 콘텐츠 (사이드바가 열리면 위로 덮이도록 설정) */}
            <div className={`transition-all duration-300 ${
                isSidebarOpen ? "absolute inset-0 bg-gray-900/50 z-30" : "relative"
            }`}>
                <Header />
                <main className="flex-grow p-6">{children}</main>
                <Footer />
            </div>
        </div>
    );
}