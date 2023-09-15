'use client'
import { useState, ChangeEvent} from "react";

export default function InLayout(){
    let [inputs, setInputs] = useState({
        userid: '',
        password:''
      });

      const setchange = (e:ChangeEvent<HTMLInputElement>)=>{
        const {name, value}=e.target;
        setInputs({
            ...inputs,
            [name] : value 
           })
        }

    return(
      <form action={'/api/main/server'} method='POST'>
      <label>아이디</label>
      <input type='text' name='userid' onChange={setchange}></input>
      <br></br>
      <label>비밀번호</label>
      <input type='password' name='password' onChange={setchange}></input>
      <br></br>
      <button >로그인</button>
      {/* {inputs.id} */}
      </form>
    
    )
}