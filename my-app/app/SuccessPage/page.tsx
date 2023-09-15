import { cookies } from 'next/headers'
import SuccessPageButton from './LogoutButton'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'



export default function Page() {
  const cookieStore = cookies()
  const userid: RequestCookie | undefined = cookieStore.get('userid')
  return (
    <div className='SuccessPage'>
      <h3>유저 아이디</h3>
      {userid ? (<><h3>{userid.value}</h3> <SuccessPageButton></SuccessPageButton></>) : (<p>유저 아이디를 찾을 수 없습니다.</p>)}
    </div>
  )
}


