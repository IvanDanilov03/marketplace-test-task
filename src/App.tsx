import {FC} from "react";
import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { theme } from "./theme";

const App: FC = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Typography>Text</Typography>
      </ThemeProvider>
    </div>
  );
};

export default App;
