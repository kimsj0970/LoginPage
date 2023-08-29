import { db } from "@/DBconnect";

type Member = {
    userid:String[],
    email:string[],
    password:string[],
    repassword:string[]
    }

    export default function handler(req:any,res:any):any{
        if(req.method=='POST'){
            console.log(req.body)
            // if(req.body.password !==req.body.repassword){
            //     return ("")
            // }
            db.query('SELECT userid from user', (error:any, results:Member):Member=> {
              if (error) {
                throw error;
                console.log('에러')}

              return res.status(200).json(results)
           })}
        };