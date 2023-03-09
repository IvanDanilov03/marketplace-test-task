import { SxStyles } from "../../../types/styles";

export const styles: SxStyles = {
  root: {
    py: 5,
    bgcolor: "custom.white",
  },
  container: {
    display: "flex",
  },
  iconBox: {
    position: "relative",
  },
  iconWrapper: {
    ml: 10,
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
    left: 44,
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
