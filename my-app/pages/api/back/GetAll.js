import axios from "axios";

export default async function  GetAll(){
      axios.get('/api/back/server')
        .then(function(response){
             console.log(response)
          })
    }


   // 이 방법도 가능
//     const result = await axios.get("/api/back/server");
//     console.log(result);