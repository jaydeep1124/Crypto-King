import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
  logo: {
    height: 50,
    marginRight: theme.spacing(2),
    cursor: "pointer",
  },
  search: {
    marginLeft: "auto",
    width: "30%",
    background: "white",
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  searchIcon: {
    marginRight: theme.spacing(1),
  },
  searchInput: {
    border: "none",
    width: "100%",
    background: "none",
    outline: "none",
    fontFamily: "Montserrat",
    fontSize: "1rem",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function Header() {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();

  const history = useHistory();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" style={{ background: "linear-gradient(to right, #ff8a00, #da1b60)" }}>
        <Container>
          <Toolbar>
            <img src="/logo.png" alt="Crypto King logo" className={classes.logo} onClick={() => history.push(`/`)} />
            <Typography
              onClick={() => history.push(`/`)}
              variant="h6"
              className={classes.title}
            >
              Crypto King
            </Typography>
            <div className={classes.search}>
              <SearchIcon className={classes.searchIcon} />
              <input
                type="text"
                placeholder="Search coins..."
                className={classes.searchInput}
              />
            </div>
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"EUR"}>EUR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
