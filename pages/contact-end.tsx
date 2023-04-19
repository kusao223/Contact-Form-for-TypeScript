import Head from 'next/head'
import Image from 'next/image'


export default function Home() { 
  return(
    <>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="#" />
        </Head>
        <main className="main">
          <div className='main-form'>
            <div className='header'>
              <Image
              src="#"
              alt="copany-Logo"
              className="Top_Logo"
              width={350}
              height={120}
              priority
              />
              <p 
              id='text-page2'
              >
              お問い合わせの内容が送信されました。
              </p>
            </div>
            <div id='page2'>
              <p 
              className='fast-navi'
              >
              1,ご入力
              </p>
              <p
              className='second-navi'
              >
              2,送信完了
              </p>
            </div>
          </div>
          <div className='main-text'>
            <div className='top-page'>
              <p>
              お問い合わせありがとうございました。
              </p>
              <a
              href="#"
              >
              Topページに戻る
              </a>
            </div>
          </div>
        </main>
    </>
  )
}
