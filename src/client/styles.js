import { createTheme } from "@mui/material/styles";

const theme = createTheme();

export const container = {
  mt: "12vh",
  ml: "5vw",
  minHeight: "100vh",
  background: "linear-gradient(135deg, #dff6fe 30%, #0095de 90%)",
  backgroundImage: `url('../images/blue2.jpg')`,
  backgroundPosition: "center",
  backgroundRepeat: "repeat-x",
  backgroundSize: "cover",
  [theme.breakpoints.down("md")]: {
    mt: "10vh",
    ml: "10vw",
    maxWidth: "95vw",
  },
  [theme.breakpoints.down("sm")]: {
    ml: "12vw",
    maxWidth: "85vw",
  },
};

export const paper = {
  p: 2,
  display: "flex",
  flexDirection: "column",
};

export const transparentPaper = {
  p: 2,
  display: "flex",
  flexDirection: "column",
  background: "transparent",
};

export const upload = {
  p: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const avatar = {
  width: 200,
  height: 200,
};

export const listItem = {
  margin: "10px",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  backgroundColor: "#f7f7f7",
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
  transition: "box-shadow 0.2s ease-in-out",
  "&:hover": {
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    transition: "box-shadow 0.2s ease-in-out",
    transform: "translateY(-1px)",
  },
};
export const typography = { fontWeight: "bold", color: "#063547" };

export const signinGrid = {
  backgroundImage: `url('images/Client__Signin.jpeg')`,
  backgroundRepeat: "no-repeat",
  backgroundColor: (t) =>
    t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export const signupGrid = {
  backgroundImage: `url('images/Client__Signup.jpeg')`,
  backgroundRepeat: "no-repeat",
  backgroundColor: (t) =>
    t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export const box = {
  my: 8,
  mx: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const controls = {
  top: "auto",
  bottom: 0,
  backgroundColor: "#021117",
  alignItems: "center",
};

export const controlsToolbar = {
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "0",
    marginLeft: "0",
  },
};