// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile_props'
import { MyComp } from './qcomps/firstcomp'
import Bio from './qcomps/bios'
import TodoList from './qcomps/todos'
import Gallery from './qcomps/gallery_props'
import PackingList from './components/props_item'

//the Profile tag is a component defined in profile.js
//imported components have to use the case sensitive name of function that generates them
export default function Home() {
  return (
    <div className={styles.main}>
        <Profile />
        <MyComp />
        <Bio />
        <TodoList />
        <Gallery />
        <PackingList />
    </div>
  )
}
