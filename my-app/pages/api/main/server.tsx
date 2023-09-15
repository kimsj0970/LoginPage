import { db } from "@/DBconnect";
import { serialize } from 'cookie';

type Member = {
    userid:string,
    password:string
    }

export default function handler(req:any,res:any):void{
    const cookieOptions = {
        maxAge: 30 * 24 * 60 * 60,  //쿠키 유효 기간 (30일)
        path: '/', // 모든 경로에서 쿠키 접근 가능
        httpOnly: true, // JavaScript를 통해 쿠키에 접근 불가
      };
  
    if(req.method=='POST'){
        let {userid, password}:Member = req.body
        db.query('SELECT * from user where userid = ? AND password = ?', 
        [userid, password], (error: any, results: any) => {
        if(error){
            console.log(error);
            res.status(500).json('error')
        }
        else{
            if(results.length>0){    //로그인 성공
                res.setHeader('Set-Cookie', serialize('userid', userid, cookieOptions));
                res.status(200).redirect(301,'/SuccessPage')
                
                // console.log(results) RowDataPacket { userid: '333', email: '33333', password: '3333333' }
            }
            else
                res.status(401).json('로그인 실패')
        }
        })
    }
}