// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import FeedbackForm from './qcomps/thankYouCrash'
import Counter from './components/snapshot'
import Form from './components/updObjects'
import RequestTracker from './qcomps/shoppingCart'
import Scoreboard from './qcomps/updObjectsForm'

export default function Home() {
  return (
    <div className={styles.main}>
        <Scoreboard />
    </div>
  )
}
