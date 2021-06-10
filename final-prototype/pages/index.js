import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Racingnews Tacotron</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="content">
      <h1>Text to speech</h1>
      <div className="redbg">
        <h2>1    Text you want to convert</h2>
      </div>


  <form action="http://localhost:4001/voicefile" method="get" target="_blank">
    <textarea id="text" name="tss" rows="4" cols="50" placeholder="Text to be converted." />
      <br/><br/><br/>
      <input type="button" value="Select your voice" />
      </form>
      </div>
    </>
  )
}
