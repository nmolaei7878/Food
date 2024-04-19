import React, { useEffect, useState, useCallback } from "react";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import Card from "../Card";

const DataList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []); // Fetch data on component mount

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = {
        lat: "35.753",
        long: "51.328",
      };
      const response = await fetch(
        `https://snappfood.ir/mobile/v3/restaurant/vendors-list?page=${currentPage}&page_size=10&lat=${data.lat}&long=${data.long}`
      );
      const newData = await response.json();
      console.log(newData.data.finalResult);
      setData((prevData) => prevData.concat(newData.data.finalResult)); // Append new data to the existing data
      setCurrentPage((prevPage) => prevPage + 1); // Increment page number for the next fetch
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const isItemLoaded = (index) => !loading || index < data.length;

  const loadMoreItems = useCallback(() => {
    if (!loading) {
      fetchData(); // Fetch more data when the list is scrolled to the bottom
    }
  }, [loading]);

  const Row = ({ index, style }) => {
    if (!isItemLoaded(index)) {
      return <div style={style}></div>;
    }
    const item = data[index];

    return (
      <div
        style={{
          ...style,
          direction: "rtl",
          boxSizing: "border-box",
          display: "flex",
        }}
      >
        <Card vendorData={item} />
      </div>
    );
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        boxSizing: "border-box",

        display: "flex",
      }}
    >
      <AutoSizer>
        {({ height, width }) => (
          <FixedSizeList
            height={height}
            width={width}
            itemCount={data.length + 1} // Add 1 to account for loading indicator
            itemSize={370}
            onItemsRendered={({ visibleStartIndex }) => {
              if (visibleStartIndex > data.length - 10) {
                loadMoreItems(); // Load more items when the user scrolls close to the end
              }
            }}
          >
            {Row}
          </FixedSizeList>
        )}
      </AutoSizer>
    </div>
  );
};

export default DataList;
