import {
  Autocomplete,
  Grid,
  InputAdornment,
  autocompleteClasses,
} from "@mui/material";
import { CustomInput } from "../../components/Input";
import { HomePageStyled } from "./index.styles";
import { FlightTakeoff, FlightLand, PersonAdd } from "@mui/icons-material";
import { CustomDatePicker } from "../../components/DatePicker";

export interface HomePageProps {}

const HomePage = () => {
  const data2 = [
    { label: "İzmir" },
    { label: "İstanbul" },
    { label: "Ankara" },
  ];

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
                <CustomInput {...params} label="Nereden" size="small" />
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
                <CustomInput {...params} label="Nereye" size="small" />
              )}
            />
          </Grid>
          <Grid p={2}>
            <CustomDatePicker
              label="Gidiş Tarihi"
              slotProps={{
                textField: { size: "small" },
                openPickerButton: { size: "small" },
              }}
            />
          </Grid>
          <Grid p={2}>
            <CustomDatePicker
              label="Dönüş Tarihi"
              slotProps={{
                textField: { size: "small" },
                openPickerButton: { size: "small" },
              }}
            />
          </Grid>
          <Grid p={2}>
            <CustomInput
              type="number"
              style={{ maxWidth: "156px" }}
              size="small"
              label="Yolcu Sayısı"
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
