import React, { useEffect, useState } from "react";
import './Mode.css'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { IconButton } from "@mui/material";


export default function Mode({ updateMode }) {
  const [mode, setMode] = useState(() => localStorage.getItem("theme") || "light");

  // Update localStorage and trigger parent component update
  useEffect(() => {
    localStorage.setItem("theme", mode);
    updateMode(mode);  // Pass the updated mode to the parent (Navbar)
  }, [mode, updateMode]);

  const toggleMode = () => {
    setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <IconButton onClick={toggleMode}>
        {mode === "light" ? <WbSunnyOutlinedIcon className='b' /> : <DarkModeOutlinedIcon className='b' />}
      </IconButton>
    </div>
  );
}