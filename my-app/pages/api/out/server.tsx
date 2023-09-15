export default async function Create(req:any,res:any){
        try{
                res.setHeader('Set-Cookie', 'userid=; Path=/; Max-Age=0');
                 res.status(200).redirect(301,'/')
        }
        catch(error){
                console.error('오류 발생:', error);
                res.status(500).json('서버 오류');
        }
}

