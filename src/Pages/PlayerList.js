import axios from 'axios';
import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const PlayerList = () => {
  const [playerList, setPlayerList] = useState([]);
  // Fetches initial player list
  useEffect(() => {
    axios
      .get('http://data.nba.net/10s/prod/v1/2021/players.json')
      .then((res) => {
        console.log(res.data.league.standard);
        setPlayerList(res.data.league.standard);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <List>
      {playerList.map((player) => (
        <ListItem key={player.personId}>
          <ListItemAvatar>
            <Avatar
              alt={`${player.firstName} ${player.lastName}`}
              src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`}
            />
          </ListItemAvatar>
          <ListItemText
            primary={`${player.firstName} ${player.lastName}`}
            secondary={`Position: ${player.pos}`}
          />
          <Button
            variant='contained'
            component={RouterLink}
            to={`/player/${player.personId}`}
          >
            View
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
