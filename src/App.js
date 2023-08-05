import React from 'react';
import ThemeProvider from "./theme";
import { HelmetProvider } from "react-helmet-async";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SimpleBar from 'simplebar-react';
import Router from './routes';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <BrowserRouter>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <SimpleBar style={{ maxHeight: "100vh" }}>
              <Router />
            </SimpleBar>
          </LocalizationProvider>
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  )
}

export default App;
