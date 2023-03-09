import { FC } from "react";
import { ShoppingBagIcon } from "../../../components/icons/ShoppingBagIcon";
import { Box } from "../../../components/ui/Box";
import { Divider } from "../../../components/ui/Divider";
import { Typography } from "../../../components/ui/Typography";
import { Container } from "../../ui/Container";
import { styles } from "./styles";
import { useBreakpoints } from "../../../hooks/useBreakpoints";
import { ArrowBackIcon } from "../../icons/ArrowBackIcon";
import { IconButton } from "../../ui/IconButton";

interface DetailsPageViewProps {
  mobileTitle?: string;
}

export const Header: FC<DetailsPageViewProps> = ({ mobileTitle }) => {
  const { isUpMobile, isUpTablet } = useBreakpoints();

  return (
    <Box sx={styles.root} component="header">
      {isUpMobile && !isUpTablet && (
        <Container sx={styles.container}>
          <IconButton sx={styles.backButton}>
            <ArrowBackIcon />
          </IconButton>
          {mobileTitle && <Typography variant="h5">{mobileTitle}</Typography>}
        </Container>
      )}
      {isUpTablet && (
        <Container sx={styles.container}>
          <Box sx={styles.iconBox}>
            <Box sx={styles.behindBackground} />
            <Box sx={styles.iconWrapper}>
              <ShoppingBagIcon size="md" />
            </Box>
          </Box>
          <Box sx={styles.titleBox}>
            <Typography variant="h4" color="custom.blue">
              Frontend task
            </Typography>
            <Divider orientation="vertical" sx={styles.divider} />
            <Typography variant="h4" color="custom.primary">
              Ivan Danilov
            </Typography>
          </Box>
        </Container>
      )}
    </Box>
  );
};
