import { FC } from "react";
import { Image } from "mui-image";
import { useNavigate } from "react-router-dom";

import { styles } from "./styles";

import { Box } from "../../ui/Box";
import { Typography } from "../../ui/Typography";
import { Link } from "../../ui/Link";
import { useBreakpoints } from "../../../hooks/useBreakpoints";

export interface ElectronicsListCardProps {
  id: number;
  title: string;
  price: number;
  brand: string;
  description: string;
  imageUrl: string;
}

export const ElectronicsListCard: FC<ElectronicsListCardProps> = ({
  id,
  title,
  price,
  brand,
  description,
  imageUrl,
}) => {
  const { isUpTablet } = useBreakpoints();
  const navigate = useNavigate();

  return (
    <Box sx={styles.root} onClick={() => navigate(`/electronics/${id}`)}>
      <Box sx={styles.imageWrapper}>
        <Image src={imageUrl} alt={title} fit="scale-down" duration={0} />
      </Box>

      <Box sx={styles.descriptionBox}>
        <Typography variant="textTitle" sx={styles.title}>
          {title}
        </Typography>
        <Typography variant="h4" sx={styles.price}>{`$${price}`}</Typography>
        <Typography variant="textInfo" color="greyPalette.500">
          {brand}
        </Typography>
        {isUpTablet && (
          <Typography variant="textInfo" sx={styles.description}>
            {description}
          </Typography>
        )}
        {isUpTablet && (
          <Link href={`#/electronics/${id}`} sx={styles.link}>
            <Typography variant="textBtnNormal" color="custom.primary">
              View details
            </Typography>
          </Link>
        )}
      </Box>
    </Box>
  );
};
