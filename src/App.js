import React from 'react';
import './App.css';
import ThemeProvider from "./theme";
import { HelmetProvider } from "react-helmet-async";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SimpleBar from 'simplebar-react';
import Router from './routes';


function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <SimpleBar style={{ maxHeight: "100vh" }}>
            <Router />
          </SimpleBar>
        </LocalizationProvider>
      </HelmetProvider>
    </ThemeProvider>
  )
}

export default App;
