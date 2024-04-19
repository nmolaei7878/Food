import React, { useEffect, useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "Hooks/redux";
import { getVendor } from "Redux/slices/VendorSlice";
import VirtualList from "Components/Shared/VirtualList";
import Card from "../Card";

const VendorList = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.Vendor.vendors);
  const loading = useAppSelector((state) => state.Vendor.loading);
  const currentPage = useAppSelector((state) => state.Vendor.currentPage);

  useEffect(() => {
    dispatch(getVendor(currentPage));
  }, []);

  const isItemLoaded = (index: number) => !loading || index < data.length;

  const loadMoreItems = useCallback(() => {
    if (!loading) {
      dispatch(getVendor(currentPage));
    }
  }, [dispatch, loading]);

  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
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
    <VirtualList Tile={Row} dataLength={data.length} loadMore={loadMoreItems} />
  );
};

export default VendorList;
