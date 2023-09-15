import { db } from "@/DBconnect";

export default function IDcheck(req:any,res:any):any{

    let id:string = req.body
    db.query('SELECT * from user where userid = ?', [id]), (error: any, results: any) => {
    if(error){
        console.log(error);
        res.status(500).json('error')
    }
    else{
        if(results.length>0){   
        res.status(401).json('이미 존재하는 ID입니다')
        }
        else{
            res.status(200)
        }
    }

}}