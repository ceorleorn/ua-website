// Home

import Head from "next/head" 

export default function Home() {
  return (
    <div className="container">

      <Head>
        <title>Welcome to IsClub</title>
        <div>
            <link rel="icon" href="https://avatars3.githubusercontent.com/u/73245034?s=90"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css" />
        </div>
      </Head>


      <main>
        <h1 align="center" className="title">
          <br></br>
          Welcome to <a href="https://github.com/isclub/ua">IsClub</a>
        </h1>

        <p align="center" className="description">
        We are a free student organization working on <a href="https://github.com">GitHub</a>.
        </p><br/>

        

        
      </main>

      <footer><br/><hr/>
        <a
          href="https://github.com/isclub"
          target="_blank"
          rel="noopener noreferrer"
        >
          🎃 Powered by IsClub
        </a>
      </footer>


    </div>
  )
}
