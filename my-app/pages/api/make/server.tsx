import { db } from "@/DBconnect";

type Member = {
    userid:string,
    email:string,
    password:string
    }

    export default function handler(req:any,res:any):any{
        if(req.method=='POST'){
            console.log(req.body)
            let {userid, email,password}:Member = req.body
            db.query('INSERT INTO user (userid,email,password) values(?,?,?)',[userid,email,password]),
            (error:any, results:Member):Member=> {
              if (error) {
                console.log('에러')
                return res.status(500).json({ message: 'DB 저장 에러' });
              }
                else{
                  console.log('DB저장 성공')
                  return res.status(200).json(results)
                }
           }}
        };