import { SxStyles } from "../../../types/styles";
import { basicTheme } from "../../../theme";

export const styles: SxStyles = {
  root: {
    py: 4,
    bgcolor: "custom.white",
    [basicTheme.breakpoints.up("tablet")]: {
      py: 5,
    },
  },
  container: {
    display: "flex",
    px: 4,
    [basicTheme.breakpoints.up("tablet")]: {
      px: 10,
    },
  },
  backButton: {
    mr: 4,
  },
  iconBox: {
    position: "relative",
  },
  iconWrapper: {
    bgcolor: "custom.primary",
    width: 40,
    height: 40,
    borderRadius: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  behindBackground: {
    bgcolor: "custom.primary",
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: "20%",
    opacity: "20%",
    top: 0,
    left: 4,
  },
  titleBox: {
    ml: 5,
    display: "flex",
    alignItems: "center",
  },
  divider: {
    mx: 1,
    height: 20,
    borderWidth: "1px",
    borderColor: "custom.blue",
  },
};
