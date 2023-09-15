import Image from 'next/image'
import styles from './page.module.css'
import JoinButton from './JoinPage/joinbutton'
import Testbutton from '../pages/api/test/Testbutton'
import InLayout from '@/app/MainPage/InLayout'

export default function Home() {

  return (
    <main className={styles.main}>
      <div className='container'>
        <InLayout></InLayout>
        <JoinButton></JoinButton></div>
    </main>
  )
}