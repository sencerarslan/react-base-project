import { HomePageStyled } from "./index.styles";

import postsService from "../../services/blockchain/index.api";

import { useSelector, useDispatch } from "react-redux";
import { saveItems } from "../../store/reducers/userReducer";
// import Button from "@mui/material/Button";
import { useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Masonry from "@mui/lab/Masonry";

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
      <Masonry columns={3} spacing={3} key={Math.random()}>
        {userData.map((item: any, index: any) => (
          <Card className="card" key={index}>
            <CardMedia
              sx={{ height: 206 }}
              image={item.thumbnail}
              title={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.developer}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.short_description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  navigate(item.game_url);
                }}
              >
                See Profile
              </Button>
              <Button
                size="small"
                onClick={() => {
                  navigate(item.profile_url);
                }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Masonry>

      {/* <div>
        <Button
          color="primary"
          onClick={() => {
            getDatas();
          }}
        >
          Çek
        </Button>
      </div> */}
    </HomePageStyled>
  );
};
export default HomePage;
