import { HomePageStyled } from "./index.styles";

import postsService from "../../services/blockchain/index.api";

import { useSelector, useDispatch } from "react-redux";
import { saveItems } from "../../store/reducers/userReducer";
import { useEffect } from "react";
import { Card, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Masonry from "@mui/lab/Masonry";
import { routesPaths } from "../../config/routes";
import i18n from "../../assets/i18n";

export interface HomePageProps {}

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state: any) => state.user);

  const getDatas = async () => {
    await postsService.getAllGames().then(function (response) {
      console.log("response", response);

      dispatch(saveItems(response.data));
    });
  };
  useEffect(() => {
    getDatas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomePageStyled>
      <Masonry className="media" columns={4} spacing={6} key={Math.random()}>
        {userData.map((item: any, index: any) => (
          <Card
            className="card"
            key={index}
            onClick={() => {
              navigate(
                `/${i18n.language}${routesPaths.public.detail}/${item.id}`
              );
            }}>
            <CardMedia
              image={item.thumbnail}
              title={item.title}
              className="image"
            />

            <div>{item.developer}</div>
          </Card>
        ))}
      </Masonry>
    </HomePageStyled>
  );
};
export default HomePage;
