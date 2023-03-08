import { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import ElectronicsPage from "./pages/ElectronicsPage/ElectronicsPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import { Box } from "./components/ui/Box";

const App: FC = () => {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Navigate replace to={`/electronics`} />} />
          <Route path={`/electronics`} element={<ElectronicsPage />} />
          <Route
            path={`/electronics/:electronicsId`}
            element={<DetailsPage />}
          />
        </Routes>
      </ThemeProvider>
    </Box>
  );
};

export default App;
