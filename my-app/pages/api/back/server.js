import db from "@/DBconnect";


export default function handler(req,res){
  console.log(req.query)
  db.query('SELECT * from user', (error, results, fields)=> {
    if (error) {
      throw error;
      console.log('에러')
    }
     return res.status(200).json(results)
  }) };



