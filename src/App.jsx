import { Light } from "@mui/icons-material";
import Home from "./pages/Home.jsx";
import { ThemeProvider, createTheme } from '@mui/material/styles';

// const PageTheme = createTheme({
//   palette: {
//     primary: {
//       main: '#f44336',
// //       light: '#f44336',
// //       dark: '#14181b',
// //       contrastText: '#fff',
//     },
//     secondary: {
//       main: '#039be5',
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