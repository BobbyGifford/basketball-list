import axios from 'axios';
import React, { useEffect } from 'react';
import Button from '@mui/material/Button';

export const Home = () => {
  // Fetches initial player list
  useEffect(() => {
    axios
      .get('http://data.nba.net/10s/prod/v1/2021/players.json')
      .then((res) => {
        console.log(res.data.league.standard);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Button variant='contained'>example</Button>Home
    </div>
  );
};
