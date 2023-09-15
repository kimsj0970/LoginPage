'use client'
import { ChangeEvent, useState } from "react";
import IDcheck from "@/pages/api/make/IDcheck/server";
export default function JoinFront(){
    let [inputs, setInputs] = useState({
    userid: '',
    email: '',
    password:'',
    repassword:''
  });

  const setchange = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name, value}=e.target;
    setInputs({
        ...inputs,
        [name] : value 
       })
  }

  function passwordcheck(event:any):boolean{
    if(inputs.password!==inputs.repassword){
        alert("재입력한 비밀번호가 다릅니다")
        event.preventDefault()
        return false
    }
    else {
     //alert("회원가입이 완료되었습니다")
        return true}
  }


 

    return(
        <div className='joinpage'>
            <form action={"/api/make/server"} method="POST" onSubmit={passwordcheck}>
                <label>아이디</label>
                <input type='text' name='userid' onChange={setchange}></input>
                <br></br>
                이메일<input type="email" name='email' onChange={setchange}></input>
                <br></br>
                <label>비밀번호</label>
                <input type="password" name='password' onChange={setchange}></input>
                <br></br>
                비밀번호 재입력<input type="password" name='repassword' onChange={setchange}></input>
                <br></br>
                <button type="submit">회원가입</button>
            </form>
        </div>
   )
}