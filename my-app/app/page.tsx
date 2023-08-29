import Image from 'next/image'
import styles from './page.module.css'
import JoinButton from './join/joinbutton'
import Testbutton from '../pages/api/test/Testbutton'

export default function Home() {
  
  return (
    <main className={styles.main}>
      <form>
      <label>아이디</label>
      <input type='text' name='loginid'></input>
      <br></br>
      <label>비밀번호</label>
      <input type='password' name='loginpassword'></input>
      <br></br>
      <div className={styles.submain}><button >로그인</button></div>
      </form>
      <div className={styles.submain2}><JoinButton></JoinButton></div>
      <Testbutton></Testbutton>
    </main>
  )
}