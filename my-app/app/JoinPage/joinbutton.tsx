'use client'

import { useRouter } from "next/navigation"


export default function JoinButton(){
    let router = useRouter()
    return(
        <div>
            <button onClick={()=>router.push('/JoinPage') }>회원가입하기</button>
        </div>
    )
}