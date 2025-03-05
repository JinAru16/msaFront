import secureLocalStorage from 'react-secure-storage';

export default function Body(){
    // 데이터 가져오기
    const user  = secureLocalStorage.getItem('userInfo');
    console.log('user :  ', user);
    return (
        <main className="p-6 text-center">
            <h2>Welcome to my next.js App!</h2>
            <p>This is the body content.</p>
            <h2 >{user ? user.nickname + "님 환영합니다." : ""}</h2>
        </main>
    )
}