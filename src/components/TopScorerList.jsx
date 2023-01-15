import React from 'react'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Table from '@mui/material/Table'
import { makeStyles } from '@material-ui/core/styles'

import { useQuery, gql } from '@apollo/client'

import { TableCell } from '@mui/material'
import { Box } from '@mui/system'

const GET_USERS = gql`
  query {
    users {
      id
      name
      score
    }
  }
`

const useStyles = makeStyles({
  boldHeader: {
    fontWeight: 'bold'
  }
})

function TopScorerList() {
  const classes = useStyles()

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
  const { loading: isLoading, error, data } = useQuery(GET_USERS)
  if (isLoading) return <h2>loading.</h2>

  if (error) {
    return <h3 className="error">{error?.message || 'Something went wrong'}</h3>
  }

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
              {data.users.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default TopScorerList
