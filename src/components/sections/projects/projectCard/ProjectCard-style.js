import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  chip: {
    margin: "0.1rem",
    color: "white",
  },
  allChips: {
    margin: "0.5rem 0.3rem",
  },
  card: {
    margin: "3rem auto",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "row-reverse",
    },
  },
  contentWrapper: {
    [theme.breakpoints.only("md")]: {
      width: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      minWidth: "560px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
}));
