import { FiMenu, FiX } from "react-icons/fi";

// @ts-ignore
export default function Sidebar({ isOpen, setIsOpen }) {
    return (
        <>
            {/* 메뉴 버튼 (항상 보이도록 설정) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded-md transition-all duration-300"
            >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* 사이드바 */}
            <div className={`fixed left-0 top-0 h-full bg-gray-800 text-white transition-all duration-300 z-40 ${
                isOpen ? "w-64 px-4" : "w-0 px-0 overflow-hidden"
            }`}>
                {isOpen && (
                    <div>
                        <h2 className="text-xl font-bold mt-5 ml-15">메뉴</h2>
                        <ul className="mt-4 space-y-2">
                            <li><a href="/" className="block p-2 hover:bg-gray-700">🏠 홈</a></li>
                            <li><a href="/menu/About" className="block p-2 hover:bg-gray-700">ℹ️ 소개</a></li>

                            <li><a href="#" className="block p-2 hover:bg-gray-700">📄 문서</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}