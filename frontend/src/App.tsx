import React, { useEffect, useState } from 'react';
import DefaultLayout from './Components/DefaultLayout/DefaultLayout';

const App: React.FC = () => {
  // useEffect(() => {
  //   setTimeout(async () => {
  //     var artistParameters = {
  //       method: "GET",
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Bearer ' + accessToken
  //       },
  //     }

  //     await fetch('https://api.spotify.com/v1/search?q=MTP&type=artist', artistParameters)
  //       .then(res => res.json())
  //       .then(data => setArtistsID(data.artists.items[0].id));
  //     console.log(artistsID);
      
  //   }, 2000);
  // }, []);

  return (
    <div className="App">
      <DefaultLayout message='ahihi' />
    </div>
  );
}

export default App;
