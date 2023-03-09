import { FC } from "react";
import { Typography } from "../../../components/ui/Typography";
import { useBreakpoints } from "../../../hooks/useBreakpoints";
import { DownloadIcon } from "../../icons/DownloadIcon";
import { FilterIcon } from "../../icons/FilterIcon";
import { UploadIcon } from "../../icons/UploadIcon";
import { Box } from "../../ui/Box";
import { Button } from "../../ui/Button";
import { Container } from "../../ui/Container";
import { IconButton } from "../../ui/IconButton";
import { styles } from "./styles";

export const SortingSection: FC = () => {
  const { isUpMobile, isUpTablet } = useBreakpoints();

  return (
    <Container sx={styles.root}>
      <Box sx={styles.wrapper}>
        <Button sx={styles.button}>
          <Typography variant="textBtnSmall" sx={styles.buttonLabel}>
            Price: Low to High
          </Typography>
          <UploadIcon sx={styles.icon} />
        </Button>
        <Button sx={styles.button}>
          <Typography variant="textBtnSmall" sx={styles.buttonLabel}>
            Price: High to Low
          </Typography>
          <DownloadIcon sx={styles.icon} />
        </Button>
        {isUpMobile && !isUpTablet && (
          <IconButton sx={styles.iconButton}>
            <FilterIcon sx={styles.filterIcon} />
          </IconButton>
        )}
      </Box>
    </Container>
  );
};
