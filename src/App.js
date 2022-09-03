import './App.css';
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import url from './url.js';
import SpLogo from './assets/image/splogo.png';
import GithubLogo from  './assets/image/github.png';
import { authEndpoint, clientId, redirectUri, scopes } from "./auth.js";
import Data from './data.js';

export default function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    var mToken = url.access_token;
    if (mToken) {
      setToken(mToken);
    }
  }, [])

  return (

      <div className="gradient">

        {!token && (

            <body className="App-body">

            <div className="mb-2">

                <header>Pie Chart</header>

                <Button href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              "%20"
              )}&response_type=token&show_dialog=true`} type="submit" variant="info" size="lg">
                    Log in to Spotify <img alt="spotify" className="img-logo" src={SpLogo}/>
                </Button>{' '}

              <subtitle>Website developed by :> gian <a  href="https://github.com/gian0012"> <img alt="gh" className="img-logo" src={GithubLogo}/></a></subtitle>

            </div>

            </body>

        )}


        {token && <Data token={token} /> }


      </div>


);
}

