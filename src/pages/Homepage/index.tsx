import { HomePageStyled } from "./index.styles";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import postsService from "../../services/blockchain/index.api";

export interface HomePageProps {}

const HomePage = () => {
  const [data, setData] = useState<any>([]);

  const getDatas = async () => {
    await postsService.getProduct().then(function (response) {
      console.log("all", response.data);
      setData(response.data);
    });
    await postsService.postProduct(1).then(function (response) {
      console.log("tek", response.data);
    });
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <HomePageStyled>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">User ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: any) => (
              <TableRow
                key={row.userId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.userId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </HomePageStyled>
  );
};
export default HomePage;
