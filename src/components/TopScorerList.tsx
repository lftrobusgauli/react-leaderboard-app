import React, { ReactElement } from 'react';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import { useQuery } from '@apollo/client';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';

import { makeStyles } from '@material-ui/core/styles';

import { Box } from '@mui/system';
import { TableCell } from '@mui/material';
import GET_USERS from '../graphql/queries/getUsers';

const useStyles = makeStyles({
  boldHeader: {
    fontWeight: 'bold'
  }
});

interface IUser {
  id: string;
  name: string;
  gameState: {
    gamesPlayed: number;
    id: string;
    score: number;
    userId: string;
  };
}

/**
 * TopScorerList-> React component that list out top ten players with high score
 * @returns {jsx} -> A div element with some content
 */

const TopScorerList: React.FC = (): ReactElement => {
  const classes = useStyles();

  /**
   * useQuery is a hook for executing a graphql query and loading the result
   *
   * @param {Object} query:  the graphql query
   * @param {function} callback: an async function that returns the data
   * @returns {Object} An Object containing the following properties
   *  - loading: a boolean indication if the query is currently loading
   *  - error: an error object if query failed
   *  - data: data returned by query
   */
  const { loading: isLoading, error, data } = useQuery(GET_USERS);
  if (isLoading) return <h2>loading.</h2>;
  console.log('data', data);

  if (error) {
    return (
      <h3 className="error">{error?.message || 'Something went wrong'}</h3>
    );
  }
  console.log(data);
  const playersCopy = data.users.slice();

  const sortedPlayers = playersCopy.sort(
    (a: IUser, b: IUser) => b.gameState.score - a.gameState.score
  );

  const topTenPlayers = sortedPlayers.slice(0, 10);

  return (
    <Box className="container">
      <Box className="scores">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.boldHeader}>S.N</TableCell>
                <TableCell className={classes.boldHeader}>
                  Player Name
                </TableCell>
                <TableCell className={classes.boldHeader}>Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {topTenPlayers.map((row: IUser, index: number) => (
                <TableRow key={row.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.gameState.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default TopScorerList;
