import Image from 'next/image'
import styles from './page.module.css'
import JoinButton from './join/joinbutton'
import Testbutton from '../pages/api/test/Testbutton'
import InLayout from '@/pages/api/main/InLayout'

export default function Home() {

  return (
    <main className={styles.main}>
      <div className='container'>
        <div className={styles.button1}><InLayout></InLayout></div>
        <div className={styles.button2}><JoinButton></JoinButton></div>
        </div>
      <Testbutton></Testbutton>
    </main>
  )
}