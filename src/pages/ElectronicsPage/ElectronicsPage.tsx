import { FC } from "react";

import { DUMMY_DATA } from "../../utils/constants";

import { ElectronicsPageView } from "../ElectronicsPageView/ElectronicsPageView";

const ElectronicsPage: FC = () => {

  const brandsNames = DUMMY_DATA.map((item) => item.brand).filter(
    (value, index, self) => self.indexOf(value) === index
  );

  return <ElectronicsPageView content={DUMMY_DATA} uniqueFilterNames={brandsNames} />;
};

export default ElectronicsPage;
