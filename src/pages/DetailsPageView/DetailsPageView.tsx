import { FC } from "react";
import { useBreakpoints } from "../../hooks/useBreakpoints";

import { Box } from "../../components/ui/Box";
import { Header } from "../../components/unsorted/Header";
import { Electronics } from "../../types/api";
import { BreadcrumbsSection } from "../../components/sections/BreadcrumbsSection";
import { DescriptionSection } from "../../components/sections/DescriptionSection";

import { styles } from "./styles";

export const DetailsPageView: FC<Electronics> = ({
  id,
  title,
  price,
  brand,
  previewDescription,
  description,
  imageUrl,
  category,
  type,
  material,
  design,
}) => {
  const { isUpTablet } = useBreakpoints();

  return (
    <Box sx={styles.root}>
      <Header mobileTitle="Electronics" />
      {isUpTablet && (
        <BreadcrumbsSection
          breadcrumbs={[
            { title: "Home", link: "", id: "Home" },
            { title: "Electronics", link: "#/electronics", id: "Electronics" },
            { title: `${type}`, link: "", id: `${id}` },
          ]}
        />
      )}
      <DescriptionSection
        id={id}
        title={title}
        price={price}
        brand={brand}
        previewDescription={previewDescription}
        description={description}
        imageUrl={imageUrl}
        category={category}
        type={type}
        material={material}
        design={design}
      />
    </Box>
  );
};
