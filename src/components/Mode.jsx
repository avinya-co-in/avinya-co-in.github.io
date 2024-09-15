import React, { useContext } from "react";
import './Mode.css';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { IconButton } from "@mui/material";
import { ThemeContext } from "./ThemeContext";

export default function Mode() {
  const { mode, toggleMode } = useContext(ThemeContext);  // Use toggleMode from ThemeContext

  return (
    <div>
      <IconButton onClick={toggleMode}>
        {mode === "light" ? <WbSunnyOutlinedIcon className='b' /> : <DarkModeOutlinedIcon className='b' />}
      </IconButton>
    </div>
  );
}
