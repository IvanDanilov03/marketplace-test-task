import { FC } from "react";
import { useBreakpoints } from "../../../hooks/useBreakpoints";
import { Image } from "mui-image";

import { Typography } from "../../../components/ui/Typography";
import { Electronics } from "../../../types/api";
import { Box } from "../../ui/Box";
import { Button } from "../../ui/Button";
import { Container } from "../../ui/Container";
import { ShoppingCartIcon } from "../../icons/ShoppingCartIcon";
import { Divider } from "../../ui/Divider";
import { List } from "../../ui/List";
import { ListItem } from "../../ui/ListItem";

import { styles } from "./styles";


export const DescriptionSection: FC<Electronics> = ({
  title,
  price,
  description,
  imageUrl,
  category,
  type,
  material,
  design,
}) => {
  const { isUpMobile, isUpTablet, isUpLaptop } = useBreakpoints();

  const imageFit = isUpMobile && !isUpTablet ? "cover" : "scale-down";

  return (
    <Container sx={styles.root}>
      <Box sx={styles.contentMainBox}>
        <Box sx={styles.imageWrapper}>
          <Image src={imageUrl} alt={title} fit={imageFit} duration={0} />
        </Box>
        <Box sx={styles.contentMain}>
          <Typography variant="textTitle" sx={styles.title}>
            {title}
          </Typography>
          <Typography variant="h3">${price}</Typography>
          <Button sx={styles.button}>
            <ShoppingCartIcon size="md" />
            <Typography sx={styles.buttonTitle} variant="textBtnNormal">
              Buy
            </Typography>
          </Button>
          <List sx={styles.list}>
            <ListItem sx={styles.listItem}>
              <Typography sx={styles.listItemTitle} variant="textInfo">
                Category:
              </Typography>
              <Typography sx={styles.listItemText} variant="textInfo">
                {category}
              </Typography>
            </ListItem>
            {isUpTablet && <Divider sx={styles.divider} />}
            <ListItem sx={styles.listItem}>
              <Typography sx={styles.listItemTitle} variant="textInfo">
                Type:
              </Typography>
              <Typography sx={styles.listItemText} variant="textInfo">
                {type}
              </Typography>
            </ListItem>
            <ListItem sx={styles.listItem}>
              <Typography sx={styles.listItemTitle} variant="textInfo">
                Material:
              </Typography>
              <Typography sx={styles.listItemText} variant="textInfo">
                {material}
              </Typography>
            </ListItem>
            {isUpLaptop && (
              <ListItem sx={styles.listItem}>
                <Typography sx={styles.listItemTitle} variant="textInfo">
                  Design:
                </Typography>
                <Typography sx={styles.listItemText} variant="textInfo">
                  {design}
                </Typography>
              </ListItem>
            )}
            {isUpTablet && <Divider sx={styles.divider} />}
          </List>
        </Box>
      </Box>
      <Box sx={styles.descriptionBox}>
        <Typography variant="textInfo" color="greyPalette.600">
          {description}
        </Typography>
      </Box>
    </Container>
  );
};
