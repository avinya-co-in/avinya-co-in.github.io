import React, { useContext } from "react";
import './Mode.css';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { IconButton } from "@mui/material";
import { ThemeContext } from "./ThemeContext";
import { themeColors } from "./themeColors";

export default function Mode() {
  const { mode, toggleMode } = useContext(ThemeContext);  // Use toggleMode from ThemeContext
  const colors = themeColors[mode];  // Get colors based on the current mode

  return (
<div>
  <IconButton 
    onClick={toggleMode} 
    style={{ 
      border: `0.5px solid ${colors.modeColor}`,  // Border color based on text color from theme
      borderRadius: '15px' 
    }}
  >
    {mode === "light" ? 
      <WbSunnyOutlinedIcon style={{ color: colors.text }} /> : 
      <DarkModeOutlinedIcon  style={{ color: colors.text }} />}
  </IconButton>
</div>

  );
}
