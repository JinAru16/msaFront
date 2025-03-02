import Header from "@/pages/main/Header";
import Footer from "@/pages/main/Footer";

// @ts-ignore
export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    )
}