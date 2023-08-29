import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/DBconnect';


type Member = {
  userid:String[],
  email:string[],
  password:string[]
  }

export default function handler(req:any,res:any):any{
  db.query('SELECT * from user', (error:any, results:any):Member=> {
    if (error) {
      throw error;
      console.log('에러')
    }
     return res.status(200).json(results)
  }) };