import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">

      <Head>
        <title>Welcome to UA Framework</title>
        <link rel="icon" href="https://avatars3.githubusercontent.com/u/73245034?s=90&v=4" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css" />
      </Head>

      <main>
        <h1 align="center" className="title">
          <br></br>
          Welcome to <a href="https://github.com/isclub/ua">UA Framework</a>
        </h1>

        <p align="center" className="description">
          The UA is a Comprehensive <a href="https://python.org">Python</a> Toolkit.
        </p>


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