import { FC, useState, useEffect, useCallback, useMemo } from "react";
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

  // const [searchParams, setSearchParams] = useSearchParams();

  const [filteredContent, setFilteredContent] = useState(content);
  const [sortFromLowToHigh, setSortFromLowToHigh] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
  const [selectedRange, setSelectedRange] = useState([0, maxValueForRange]);

  const filterData = useCallback(() => {
    const findFilteredData = (
      array: Electronics[],
      filters: string[],
      lowToHigh: boolean
    ) => {
      if (filters.length === 0 && lowToHigh) {
        console.log(lowToHigh, "1");
        const sortedRangeArray = array.filter((item) => {
          return (
            item.price <= selectedRange[1] && item.price >= selectedRange[0]
          );
        });
        return sortedRangeArray.sort((a, b) => a.price - b.price);
      }
      if (filters.length === 0 && !lowToHigh) {
        const sortedRangeArray = array.filter((item) => {
          return item.price <= selectedRange[1] && item.price >= selectedRange[0];
        });
        return sortedRangeArray.sort((a, b) => b.price - a.price);
      }
      if (filters.length !== 0 && lowToHigh) {
        const filteredByBrandData = filters
          .map((item) =>
            array.filter((electronic) => {
              return electronic.brand === item;
            })
          )
          .flat();
        console.log(lowToHigh, "3");
        const sortedRangeArray = filteredByBrandData.filter((item) => {
          return item.price <= selectedRange[1] && item.price >= selectedRange[0];
        });
        return sortedRangeArray.sort((a, b) => a.price - b.price);
      }
      if (filters.length !== 0 && !lowToHigh) {
        const filteredByBrandData = filters
          .map((item) =>
            array.filter((electronic) => {
              return electronic.brand === item;
            })
          )
          .flat();
        console.log(lowToHigh, "4");
        const sortedRangeArray = filteredByBrandData.filter((item) => {
          return item.price <= selectedRange[1] && item.price >= selectedRange[0];
        });
        return sortedRangeArray.sort((a, b) => b.price - a.price);
      }
      return array;
    };

    setFilteredContent(
      findFilteredData(content, selectedBrand, sortFromLowToHigh)
    );
  }, [content, sortFromLowToHigh, selectedBrand, selectedRange]);

  useEffect(() => {
    filterData();
  }, [filterData]);

  console.log(filteredContent);

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
      />
    </Box>
  );
};
