import { Light } from "@mui/icons-material";
import Home from "./pages/Home.jsx";
import { ThemeProvider, createTheme } from '@mui/material/styles';


// const theme = createTheme({
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// });



function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;