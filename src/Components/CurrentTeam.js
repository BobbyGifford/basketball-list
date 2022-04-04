import React from 'react';
import {
  Avatar,
  Button,
  ListItemAvatar,
  ListItemText,
  ListItem,
  List,
} from '@mui/material';

export const CurrentTeam = ({ selectedPlayers, setSelectedPlayers }) => {
  // Removes a player with a given personId
  const removeSelectedPlayer = (personId) => {
    const newList = selectedPlayers.filter((player) => {
      if (player?.personId !== personId) return player;
    });
    setSelectedPlayers(newList);
  };
  return (
    // Shows a list of selected players
    <List>
      {selectedPlayers.map((player) => (
        <ListItem key={`selected-player-${player.lastName}-${player.personId}`}>
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
            color='error'
            onClick={() => removeSelectedPlayer(player.personId)}
          >
            Remove
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
