import Head from 'next/head'
import Image from 'next/image'
import { Inter, M_PLUS_1 } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import data from '../data/education.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
console.log(data);
  const [information, setInformation] = useState([...data])
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            <Link href="aboout">About Page</Link>
            
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <h1>Welcome</h1>
          
      
        </div>

        <div className={styles.grid}>
<b>Business Degrees</b>
          {information && information.map((info, index) => {
            if (info.department === "Business") {
              return (
                <Card key={index} degree={info.degree} colour="#000037" font="11px"/>
              )
            
          }
            })}
            <b>Computing Degrees</b>
                    {information && information.map((info, index) => {
            if (info.department === "Computing") {
              return (
                <Card key={index} degree={info.degree} colour="purple" font="11px"/>
              )
            
          }
            })}
        </div>
      </main>
    </>
  )
}
