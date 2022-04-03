import axios from 'axios';
import React, { useEffect } from 'react';

export const Home = () => {
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

  return <div>Home</div>;
};
