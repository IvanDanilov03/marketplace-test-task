import { FC } from "react";

import { styles } from "./styles";

import { Box } from "../../ui/Box";
import { ElectronicsListCard } from "../ElectronicsListCard";
import { Electronics } from "../../../types/api";

export interface ElectronicsListProps {
  content: Electronics[];
}

export const ElectronicsList: FC<ElectronicsListProps> = ({ content }) => {
  return (
    <Box sx={styles.root}>
      {content.map(
        ({ id, title, price, brand, previewDescription, imageUrl }) => (
          <ElectronicsListCard
            key={id}
            id={id}
            title={title}
            price={price}
            brand={brand}
            description={previewDescription}
            imageUrl={imageUrl}
          />
        )
      )}
    </Box>
  );
};
