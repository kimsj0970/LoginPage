'use client'
import { ChangeEvent, useState } from "react";


export default function SecessionPage(){
    let [inpassword,setinpassword] = useState('')
    return(
        <div>
            <h1>탈퇴하기</h1><br></br>
            <form action={'/api/out/server'} method="POST">
            <label>비밀번호를 다시 입력하세요</label><br></br>
            <input type="password" name="password" id="name"></input>
            <button type="submit">탈퇴하기</button>
            </form>
        </div>
    )
}