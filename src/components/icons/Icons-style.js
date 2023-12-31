import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  icons: {
    display: "flex",
    width: "10%",
    justifyContent: "space-between",
    alignSelf: "flex-start",
    gap: "0.4rem",
    paddingInline: "0rem",
    marginTop: "1rem",
    "& a": {
      textDecoration: "none", // Remove underline from links
    },
    "& svg": {
      color: theme.palette.text.primary,
      paddingLeft: "0",
      "& :hover ": {
        cursor: "pointer",
        color: theme.palette.primary.main,
        transition: "all 0.3s linear",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "20%",
    },
  },
}));
