import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";

interface VirtualListProps {
  dataLength: number;
  loadMore: () => void;
  Tile: React.FC<any>;
}

const VirtualList: React.FC<VirtualListProps> = ({
  dataLength,
  loadMore,
  Tile,
}) => {
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
            itemCount={dataLength + 1}
            itemSize={370}
            onItemsRendered={({
              visibleStartIndex,
            }: {
              visibleStartIndex: number;
            }) => {
              if (visibleStartIndex > dataLength - 10) {
                loadMore();
              }
            }}
          >
            {Tile}
          </FixedSizeList>
        )}
      </AutoSizer>
    </div>
  );
};

export default VirtualList;
