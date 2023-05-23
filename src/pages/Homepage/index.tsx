import {
  Autocomplete,
  Grid,
  InputAdornment,
  autocompleteClasses,
} from "@mui/material";
import { CustomInput, CustomDatePicker } from "../../components/Input";
import { HomePageStyled } from "./index.styles";
import { FlightTakeoff, FlightLand, PersonAdd } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export interface HomePageProps {}

const HomePage = () => {
  const data2 = [
    { label: "İzmir" },
    { label: "İstanbul" },
    { label: "Ankara" },
  ];
  const { t } = useTranslation();

  return (
    <HomePageStyled>
      <>
        <Grid container>
          <Grid p={2}>
            <Autocomplete
              popupIcon={
                <InputAdornment position="end">
                  <FlightTakeoff fontSize="small" />
                </InputAdornment>
              }
              options={data2}
              sx={{
                width: 156,
                [`& .${autocompleteClasses.popupIndicator}`]: {
                  transform: "none",
                },
              }}
              renderInput={(params) => (
                <CustomInput
                  {...params}
                  label={t("widgets.searchBar.to")}
                  size="small"
                />
              )}
            />
          </Grid>
          <Grid p={2}>
            <Autocomplete
              popupIcon={
                <InputAdornment position="end">
                  <FlightLand fontSize="small" />
                </InputAdornment>
              }
              options={data2}
              sx={{
                width: 156,
                [`& .${autocompleteClasses.popupIndicator}`]: {
                  transform: "none",
                },
              }}
              renderInput={(params) => (
                <CustomInput
                  {...params}
                  label={t("widgets.searchBar.from")}
                  size="small"
                />
              )}
            />
          </Grid>
          <Grid p={2}>
            <CustomDatePicker label={t("widgets.searchBar.startDate")} />
          </Grid>
          <Grid p={2}>
            <CustomDatePicker label={t("widgets.searchBar.endDate")} />
          </Grid>
          <Grid p={2}>
            <CustomInput
              type="number"
              style={{ maxWidth: "156px" }}
              size="small"
              label={t("widgets.searchBar.travellerCount")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonAdd fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </>
    </HomePageStyled>
  );
};
export default HomePage;
