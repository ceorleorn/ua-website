// Home

import {head} from "../components/head"

export default function Home() {
  return (
    <div className="container">

      <componentsHead title="Welcome to UA Framework"/>

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
