import { FC } from "react";

import { DUMMY_DATA } from "../../utils/constants";

import { ElectronicsPageView } from "../ElectronicsPageView/ElectronicsPageView";

const ElectronicsPage: FC = () => {
  return <ElectronicsPageView content={DUMMY_DATA} />;
};

export default ElectronicsPage;
