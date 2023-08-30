'use client'
import { ChangeEvent, useState } from "react";

type Member = {
    userid:String[],
    email:string[],
    password:string[],
    repassword:string[]
    }

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

  function passwordcheck():boolean|any{
    if(inputs.password===inputs.repassword){
        alert("비밀번호가 같습니다")
        return false
    }
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
                비밀번호 재입력<input type="repassword" name='repassword' onChange={setchange}></input>
                <br></br>
                <button type="submit">회원가입</button>
            </form>
            {inputs.userid}<br></br>
            {inputs.email}<br></br>
            {inputs.password}<br></br>
            {inputs.repassword}
        </div>
   )
}