import { FC, useState, useEffect, useCallback } from "react";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { useSearchParams } from "react-router-dom";

import { Box } from "../../components/ui/Box";
import { Header } from "../../components/unsorted/Header";
import { BreadcrumbsSection } from "../../components/sections/BreadcrumbsSection";
import { SortingSection } from "../../components/sections/SortingSection";
import { FilterElectronicsListSection } from "../../components/sections/FilterElectronicsListSection";

import { Electronics } from "../../types/api";

import { styles } from "./styles";

interface ElectronicsPageViewProps {
  content: Electronics[];
  uniqueFilterNames: string[];
}

export const ElectronicsPageView: FC<ElectronicsPageViewProps> = ({
  content,
  uniqueFilterNames,
}) => {
  const { isUpTablet } = useBreakpoints();

  const maxValueForRange = Math.max(...content.map((item) => item.price));

  const [searchParams, setSearchParams] = useSearchParams();

  const [filteredContent, setFilteredContent] = useState(content);
  const [sortFromLowToHigh, setSortFromLowToHigh] = useState(
    searchParams.get("lowToHigh") === "true"
  );
  const querySelectBrands = Object.is(searchParams.get("brands"), null)
    ? []
    : searchParams.get("brands")!.split(",");

  const [selectedBrand, setSelectedBrand] =
    useState<string[]>(querySelectBrands);

  const queryRange = Object.is(searchParams.get("range"), null)
    ? []
    : searchParams.get("range")!.split(",").map(Number);

  const [selectedRange, setSelectedRange] = useState([0, maxValueForRange]);
  const [resetFilter, setResetFilter] = useState(true);

  const filterData = useCallback(() => {
    const findFilteredData = (
      array: Electronics[],
      filters: string[],
      lowToHigh: boolean
    ) => {
      if (filters.length === 0 && lowToHigh) {
        setSearchParams({ lowToHigh: "true", range: `${selectedRange}` });
        const sortedRangeArray = array.filter((item) => {
          return (
            item.price <= selectedRange[1] && item.price >= selectedRange[0]
          );
        });
        return sortedRangeArray.sort((a, b) => a.price - b.price);
      }
      if (filters.length === 0 && !lowToHigh) {
        setSearchParams({ lowToHigh: "false", range: `${selectedRange}` });
        const sortedRangeArray = array.filter((item) => {
          return (
            item.price <= selectedRange[1] && item.price >= selectedRange[0]
          );
        });
        return sortedRangeArray.sort((a, b) => b.price - a.price);
      }
      if (filters.length !== 0 && lowToHigh) {
        setResetFilter(false);
        setSearchParams({
          brands: `${filters}`,
          lowToHigh: "true",
          range: `${selectedRange}`,
        });
        const filteredByBrandData = filters
          .map((item) =>
            array.filter((electronic) => {
              return electronic.brand === item;
            })
          )
          .flat();
        const sortedRangeArray = filteredByBrandData.filter((item) => {
          return (
            item.price <= selectedRange[1] && item.price >= selectedRange[0]
          );
        });
        return sortedRangeArray.sort((a, b) => a.price - b.price);
      }
      if (filters.length !== 0 && !lowToHigh) {
        setSearchParams({
          brands: `${filters}`,
          lowToHigh: "false",
          range: `${selectedRange}`,
        });
        const filteredByBrandData = filters
          .map((item) =>
            array.filter((electronic) => {
              return electronic.brand === item;
            })
          )
          .flat();
        const sortedRangeArray = filteredByBrandData.filter((item) => {
          return (
            item.price <= selectedRange[1] && item.price >= selectedRange[0]
          );
        });
        return sortedRangeArray.sort((a, b) => b.price - a.price);
      }
      return array;
    };

    setFilteredContent(
      findFilteredData(content, selectedBrand, sortFromLowToHigh)
    );
  }, [
    content,
    sortFromLowToHigh,
    selectedBrand,
    selectedRange,
    setSearchParams,
  ]);

  useEffect(() => {
    filterData();
  }, [filterData]);

  return (
    <Box sx={styles.root}>
      <Header mobileTitle="Electronics" />
      {isUpTablet && (
        <BreadcrumbsSection
          breadcrumbs={[
            { title: "Home", link: "", id: "Home" },
            { title: "Electronics", link: "", id: "Electronics" },
          ]}
        />
      )}
      <SortingSection
        sortFromLowToHigh={sortFromLowToHigh}
        setSortFromLowToHigh={setSortFromLowToHigh}
        filterTitle="Brands"
        uniqueFilter={uniqueFilterNames}
        selectedFilter={selectedBrand}
        setSelectedFilter={setSelectedBrand}
        selectedRange={selectedRange}
        setSelectedRange={setSelectedRange}
        maxValueForRange={maxValueForRange}
        resetFilter={resetFilter}
        setResetFilter={setResetFilter}
      />
      <FilterElectronicsListSection
        content={filteredContent}
        filterTitle="Brands"
        uniqueFilter={uniqueFilterNames}
        selectedFilter={selectedBrand}
        setSelectedFilter={setSelectedBrand}
        selectedRange={selectedRange}
        setSelectedRange={setSelectedRange}
        maxValueForRange={maxValueForRange}
        resetFilter={resetFilter}
        setResetFilter={setResetFilter}
      />
    </Box>
  );
};
