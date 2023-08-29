import axios from "axios";
import handler from "@/pages/api/test/server";

export default async function  GetAll():Promise<any>{
  axios.get('/api/test/server')
  .then(function(response){
       console.log(response)
       const aa=response.data
    })
    }