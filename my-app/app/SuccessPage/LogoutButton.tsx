'use client'
import { useRouter } from "next/navigation"
import axios from "axios"


export default function SuccessPageButton(){
    let router = useRouter()
    
    const handleLogout = async () => {
        try {
            await axios.post('/api/out/server');
            // POST 요청이 성공하면 '/' 페이지로 이동
            router.push('/');
        } catch (error) {
            console.error('로그아웃 요청 중 에러:', error);
        }}

    return(
        <div>
             <button onClick={handleLogout}>로그아웃</button>
            <button onClick={()=>router.push('/SecessionPage')}>탈퇴</button>
        </div>
    )
}