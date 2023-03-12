import { FC } from "react";
import { DetailsPageView } from "../DetailsPageView/DetailsPageView";
import { useParams } from "react-router-dom";
import { DUMMY_DATA } from "../../utils/constants";

const DetailsPage: FC = () => {
  const { electronicsId } = useParams();

  const electronicData = DUMMY_DATA.filter((item) => {
    return item.id.toString() === electronicsId;
  });

  const {
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
  } = electronicData[0];

  return (
    <DetailsPageView
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
  );
};

export default DetailsPage;
