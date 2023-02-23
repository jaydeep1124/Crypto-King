import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./banner2.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "600px",
    display: "flex",
    alignItems: "center",
  },
  bannerContent: {
    maxWidth: "800px",
    margin: "auto",
    textAlign: "center",
  },
  tagline: {
    marginBottom: theme.spacing(3),
  },
  title: {
    fontWeight: "bold",
    fontFamily: "Montserrat",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
  },
  subtitle: {
    fontFamily: "Montserrat",
    color: theme.palette.text.secondary,
    lineHeight: 1.5,
    letterSpacing: "1px",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography variant="h4" className={classes.title}>
            Crypto King
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            Get all the information regarding your favorite cryptocurrency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
