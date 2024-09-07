import React, { useState } from "react";
import './Mode.css'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { IconButton } from "@mui/material";


export default function Mode() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });

  const colorMode = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };
  return (
    <div>
      <IconButton onClick={colorMode}>
        {mode === "light" ? <WbSunnyOutlinedIcon className = 'b'/> : <DarkModeOutlinedIcon className = 'b'/>}
      </IconButton>
    </div>
  );
}