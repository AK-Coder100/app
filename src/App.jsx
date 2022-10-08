import './App.css'
import participent from './participent'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';


function App() {

 

  return (<>
    <div className="App">
      <header>Location</header>
          <div className='table'>
            <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 400 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name </TableCell>
                        <TableCell align="right">link</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {participent.map((row,i) => (
                        <TableRow
                          key={i}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">{row.name}</TableCell>
                          <TableCell align="right"><Link to={{pathname:"/comp"}} state={{h:"hello"}}>Go</Link></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
            </div>
    </div>
                        <footer>Created by me</footer>
    </>
  )
}

export default App
