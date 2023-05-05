import { DetailPageStyled } from "./index.styles";
import postsService from "../../services/blockchain/index.api";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardMedia } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

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
      <Masonry className="media" columns={1} spacing={6} key={Math.random()}>
        {data && (
          <Card className="card" key={data.id}>
            <div
              className="bg"
              style={{ backgroundImage: `url('${data.thumbnail}')` }}></div>
            <CardMedia
              image={data.thumbnail}
              title={data.title}
              className="image"
            />
            <h3
              className="title"
              dangerouslySetInnerHTML={{ __html: data.title }}></h3>
            <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
          </Card>
        )}
      </Masonry>
    </DetailPageStyled>
  );
};
export default DetailPage;
