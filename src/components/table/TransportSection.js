import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  cars,
  FourSeater,
  SevenSeater,
  Bus,
  Route,
  TripDuration,
  Cost
) {
  return { cars, FourSeater, SevenSeater, Bus, Route, TripDuration, Cost };
}

const rows = [
  createData("Hyundai H1 or Equivalent", 150, 250, 300, 4.0, 0, 123, 90),
  createData("GMC or Equivalent", 237, 9.0, 37, 4.3, 23, 34, 0, 123, 90),
  createData(" - - -", 262, 16.0, 24, 6.0, 0, 123, 90),
  createData(" - - -", 305, 3.7, 67, 4.3, 0, 123, 90),
  //   createData(" - - -", 356, 16.0, 49, 3.9, 0, 123, 90),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Cars or Equivalent</TableCell>
            <TableCell align="right">4 Seater</TableCell>
            <TableCell align="right">7 Seater&nbsp;</TableCell>
            <TableCell align="right">Bus&nbsp;(49 Seater)</TableCell>
            <TableCell align="right">Routes&nbsp;</TableCell>
            <TableCell align="right">Trip Duration&nbsp;</TableCell>
            <TableCell align="right">Cost&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.cars}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.cars}
              </TableCell>
              <TableCell align="right">{row.FourSeater}</TableCell>
              <TableCell align="right">{row.SevenSeater}</TableCell>
              <TableCell align="right">{row.Bus}</TableCell>
              <TableCell align="right">{row.Route}</TableCell>
              <TableCell align="right">{row.TripDuration}</TableCell>
              <TableCell align="right">{row.Cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
