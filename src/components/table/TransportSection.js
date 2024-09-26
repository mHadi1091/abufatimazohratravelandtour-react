// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// function createData(
//   cars,
//   FourSeater,
//   SevenSeater,
//   Bus,
//   Route,
//   TripDuration,
//   Cost
// ) {
//   return { cars, FourSeater, SevenSeater, Bus, Route, TripDuration, Cost };
// }

// const rows = [
//   createData(
//     "Hyundai H1 or Equivalent",
//     150,
//     250,
//     300,
//     "Route A",
//     "2 hours",
//     "$90"
//   ),
//   createData("GMC or Equivalent", 237, 9.0, 37, "Route B", "4 hours", "$120"),
//   createData(
//     "Toyota HiAce or Equivalent",
//     262,
//     16.0,
//     24,
//     "Route C",
//     "3 hours",
//     "$110"
//   ),
//   createData(
//     "Mercedes Benz or Equivalent",
//     305,
//     3.7,
//     67,
//     "Route D",
//     "5 hours",
//     "$150"
//   ),
// ];

// export default function BasicTable() {
//   return (
//     <TableContainer component={Paper} sx={{ boxShadow: 3, bgcolor: "#e1c699" }}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell sx={{ fontWeight: "bold" }}>
//               Cars or Equivalent
//             </TableCell>
//             <TableCell align="right" sx={{ fontWeight: "bold" }}>
//               4 Seater
//             </TableCell>
//             <TableCell align="right" sx={{ fontWeight: "bold" }}>
//               7 Seater&nbsp;
//             </TableCell>
//             <TableCell align="right" sx={{ fontWeight: "bold" }}>
//               Bus&nbsp;(49 Seater)
//             </TableCell>
//             <TableCell align="right" sx={{ fontWeight: "bold" }}>
//               Routes&nbsp;
//             </TableCell>
//             <TableCell align="right" sx={{ fontWeight: "bold" }}>
//               Trip Duration&nbsp;
//             </TableCell>
//             <TableCell align="right" sx={{ fontWeight: "bold" }}>
//               Cost&nbsp;
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.cars}
//               sx={{
//                 "&:last-child td, &:last-child th": { border: 0 },
//                 "&:hover": { backgroundColor: "#c79d43" },
//               }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.cars}
//               </TableCell>
//               <TableCell align="right">{row.FourSeater}</TableCell>
//               <TableCell align="right">{row.SevenSeater}</TableCell>
//               <TableCell align="right">{row.Bus}</TableCell>
//               <TableCell align="right">{row.Route}</TableCell>
//               <TableCell align="right">{row.TripDuration}</TableCell>
//               <TableCell align="right">{row.Cost}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Slide,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Table data function
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

// Example data rows
const rows = [
  createData(
    "Hyundai H1 or Equivalent",
    150,
    250,
    300,
    "Route A",
    "2 hours",
    "$90"
  ),
  createData("GMC or Equivalent", 237, 300, 37, "Route B", "4 hours", "$120"),
  createData(
    "Toyota HiAce or Equivalent",
    262,
    320,
    24,
    "Route C",
    "3 hours",
    "$110"
  ),
  createData(
    "Mercedes Benz or Equivalent",
    305,
    370,
    67,
    "Route D",
    "5 hours",
    "$150"
  ),
];

export default function ExpandableTable() {
  const [expanded, setExpanded] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const handleAccordionChange = () => {
    setExpanded(!expanded);
    setShowTable(!showTable);
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#171d00", // Dark background to match the page
        padding: "0", // No padding to avoid any additional space around the table
      }}
    >
      <Accordion expanded={expanded} onChange={handleAccordionChange}>
        {/* Accordion Header */}
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#c79d43" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#171d00",
            color: "#c79d43",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              textAlign: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            Transport Options {/* Updated title */}
          </Typography>
        </AccordionSummary>

        {/* Accordion Details */}
        <AccordionDetails>
          {/* Slide animation for table */}
          <Slide direction="up" in={showTable} mountOnEnter unmountOnExit>
            <TableContainer
              component="div" // Removed Paper to prevent the white background
              sx={{
                boxShadow: 0, // No box shadow
                bgcolor: "transparent", // Make background transparent
                margin: "0", // Remove margin around the table
                padding: "0", // Remove padding around the table
              }}
            >
              <Table
                sx={{
                  minWidth: 650,
                  bgcolor: "#e1c699", // Keep table background as the light gold color
                  borderRadius: "8px", // Rounded corners inside the accordion
                  margin: "0", // Remove margin
                }}
                aria-label="transport table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Cars or Equivalent
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>
                      4 Seater
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>
                      7 Seater
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>
                      Bus&nbsp;(49 Seater)
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>
                      Routes
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>
                      Trip Duration
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>
                      Cost
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.cars}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        "&:hover": { backgroundColor: "#c79d43" },
                      }}
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
          </Slide>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
