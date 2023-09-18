import { db } from "@/DBconnect";
import { serialize } from 'cookie';

type Member = {
    userid:string,
    email:string,
    password:string
    }

    export default function handler(req:any,res:any):any{
      const cookieOptions = {
        maxAge: 30 * 24 * 60 * 60,  //쿠키 유효 기간 (30일)
        path: '/', // 모든 경로에서 쿠키 접근 가능
        httpOnly: true, // JavaScript를 통해 쿠키에 접근 불가
      };
        if(req.method=='POST'){
            let {userid, email,password}:Member = req.body
            try {
                // 데이터베이스 쿼리 실행
                db.query('INSERT INTO user (userid,email,password) values(?,?,?)', [userid, email, password], (error: any, results: Member) => {
                  if (error) {
                    res.status(500).json('중복된 아이디가 존재합니다');
                    //res.status(200).redirect(301,'/JoinPage')
                  } else {
                    res.setHeader('Set-Cookie', serialize('userid', userid, cookieOptions));
                    res.status(200).redirect(301,'/SuccessPage')
                  }
                });
              } catch (error) {
                // 오류 처리
                console.error('오류 발생:', error);
                res.status(500).json('서버 오류');
              }
            }
        }



          