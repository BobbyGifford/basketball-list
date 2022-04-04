import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Button,
  ListItemAvatar,
  ListItemText,
  ListItem,
  List,
  Grid,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { CurrentTeam } from '../Components';

export const PlayerList = () => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const [playerList, setPlayerList] = useState([]);
  // Fetches initial player list and sets to state
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
    <>
      <Grid container justifyContent={'center'}>
        <Typography variant='h6' gutterBottom component='div'>
          Selected Players
        </Typography>
      </Grid>

      {/* Only render current team component if selected players exist */}
      {selectedPlayers !== [] && (
        <CurrentTeam
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      )}

      <Grid container justifyContent={'center'}>
        <Typography variant='h6' gutterBottom component='div'>
          Available Players
        </Typography>
      </Grid>
      <List>
        {playerList.map((player) => (
          <ListItem
            key={`available-player-${player.lastName}-${player.personId}`}
          >
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
              disabled={
                // disables add button if the player is alread in the selected player list
                selectedPlayers.filter(
                  (selectedPlayer) =>
                    selectedPlayer.personId === player.personId
                ).length > 0
              }
              onClick={() => setSelectedPlayers([...selectedPlayers, player])}
            >
              Add
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};
