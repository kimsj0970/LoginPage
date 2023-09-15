import { db } from "@/DBconnect";

type Member = {
    userid:string,
    email:string,
    password:string
    }

    export default function handler(req:any,res:any):any{
        if(req.method=='POST'){
            let {userid, email,password}:Member = req.body
            try {
                // 데이터베이스 쿼리 실행
                db.query('INSERT INTO user (userid,email,password) values(?,?,?)', [userid, email, password], (error: any, results: Member) => {
                  if (error) {
                    res.status(500).json('DB 저장 에러');
                  } else {
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



          