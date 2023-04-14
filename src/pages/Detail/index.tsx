import { DetailPageStyled } from "./index.styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import postsService from "../../services/blockchain/index.api";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export interface DetailPageProps {}

const DetailPage = () => {
  const params = useParams();
  const [data, setData] = useState<any>();

  const getDatas = async () => {
    await postsService
      .postProduct(params.id as string)
      .then(function (response) {
        console.log("tek", response.data);
        setData(response.data);
      });
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <DetailPageStyled>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {data && (
              <TableRow
                key={data.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <h3>{data.title}</h3>
                  {data.body}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </DetailPageStyled>
  );
};
export default DetailPage;
