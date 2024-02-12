// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import RecipeList from './qcomps/recipes'
import MenuBar from './qcomps/menuBar'
//import List from './components/list_keys_id'
import Gallery from './qcomps/state'
import PersonData from './components/stateObj'
import Form from './components/snapshot2'

export default function Home() {
  return (
    <div className={styles.main}>
        <Form/>
    </div>
  )
}
