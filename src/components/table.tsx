"use client";

import * as React from "react";
import { ReactNode, useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

export interface TableColumn<T> {
  header: string | React.JSX.Element;
  cell: ReactNode | ((item: T) => ReactNode) | string;
  loader?: ReactNode;
  accessor?: keyof T;
  sortable?: boolean;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  data?: T[];
  isLoading?: boolean;
  tableClassName?: string;
  tdClassName?: string;
  trClassName?: string;
  thClassName?: string;
  cellClassName?: string;
  tableString?: string;
  emptyStateLink?: string | (() => string);
  isSearchParams?: boolean;
  onRowClick?: (item: T) => void;
  emptyStateLabel?: string;
}

const Table = <T,>({
  columns,
  data = [],
  isLoading = false,
  tableClassName = "",
  tdClassName = "",
  trClassName = "",
  thClassName = "",
  cellClassName = "",
  tableString,
  emptyStateLink,
  isSearchParams = false,
  onRowClick = undefined,
  emptyStateLabel = "Nothing to show",
}: TableProps<T>) => {
  const [selectedRow, setSelectedRow] = useState<T>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Sorting state
  const [sortConfig, setSortConfig] = useState<{
    key?: keyof T;
    direction: "asc" | "desc";
  }>({ key: undefined, direction: "asc" });

  const handleIframeLoad = () => setLoading(false);

  // Sorting logic
  const sortedData = React.useMemo(() => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      const aVal = a[sortConfig.key!];
      const bVal = b[sortConfig.key!];

      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortConfig.direction === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortConfig.direction === "asc" ? aVal - bVal : bVal - aVal;
      }

      return 0;
    });
  }, [data, sortConfig]);

  const requestSort = (key?: keyof T) => {
    if (!key) return;
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  if (!isLoading && !data?.length) {
    return (
      <div
        className={`relative flex h-[368px] flex-col items-center justify-center gap-3 rounded-xl pt-[2rem] ${tableClassName}`}
      >
        {loading && (
          <div className="absolute top-[50%] left-[50%] grid h-[200px] w-[200px] translate-x-[-50%] translate-y-[-50%] place-items-center"></div>
        )}

        {!isSearchParams ? (
          <>
            <iframe
              className="mb-4"
              height="103"
              src="https://lottie.host/embed/b90f126b-38e8-4065-8e78-e7d377af2bf4/SXNfHBrkc3.json"
              title="Loading animation"
              width="270"
              onLoad={handleIframeLoad}
            />
            <p className="text-charleston-green-30 text-sm font-medium">
              {emptyStateLabel}
            </p>
            <button
              className="text-sm font-medium hover:underline"
              type="button"
              onClick={() => {
                if (!emptyStateLink) return;
                if (typeof emptyStateLink === "function") {
                  emptyStateLink();
                } else {
                  router.push(emptyStateLink);
                }
              }}
            >
              {tableString}
            </button>
          </>
        ) : (
          <>
            <iframe
              className="mb-4"
              height="103"
              src="https://lottie.host/embed/6b8d5541-a852-4f96-8a21-8e2d70be8d9f/NqpqHZXtFA.json"
              title="Loading animation"
              width="270"
              onLoad={handleIframeLoad}
            />
            <p className="text-sm font-medium">No item matches your search</p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="block w-full">
      <div
        className={`${tableClassName} relative !z-[30] w-full overflow-x-auto !rounded-t-[4px]`}
      >
        <table className="w-full">
          <thead className="w-full">
            <tr className="">
              {columns.map((column, index) => {
                return (
                  <th
                    key={String(index)}
                    className={classNames(
                      `h-8 text-[#15272D]/62 font-medium pr-4 last:pr-0 w-full text-sm whitespace-nowrap first:rounded-tl-[4px] last:rounded-tr-[4px] ${thClassName}`,
                      { "cursor-pointer select-none": column.sortable }
                    )}
                    onClick={() =>
                      column.sortable && requestSort(column.accessor)
                    }
                  >
                    <div className="flex items-center border-b border-gray-200 h-full gap-2.5">
                      {column.header}
                      {column.sortable && (
                        <>
                          {sortConfig.key === column.accessor ? (
                            sortConfig.direction === "asc" ? (
                              <Icon
                                icon="flowbite:caret-down-solid"
                                className="w-4 h-4 text-[#3E7383]"
                              />
                            ) : (
                              <Icon
                                icon="flowbite:caret-up-solid"
                                className="w-4 h-4 text-[#3E7383]"
                              />
                            )
                          ) : (
                            <Icon
                              icon="flowbite:caret-down-solid"
                              className="w-4 h-4 text-gray-300"
                            />
                          )}
                        </>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="">
            {isLoading
              ? [1, 2, 3, 4, 5].map((num) => (
                  <tr key={num}>
                    {columns.map((_column, colIndex) => (
                      <td
                        key={String(colIndex)}
                        aria-label="loader"
                        className="h-[44px] px-[0.813rem] text-sm whitespace-nowrap"
                      ></td>
                    ))}
                  </tr>
                ))
              : sortedData.map((item, rowIndex) => (
                  <tr
                    key={String(rowIndex)}
                    className={classNames(
                      `transition-all duration-300 ${trClassName}`,
                      {
                        "cursor-pointer bg-transparent hover:bg-zinc-400/20":
                          onRowClick,
                        "":
                          JSON.stringify(item) === JSON.stringify(selectedRow),
                      }
                    )}
                    onClick={() => {
                      if (onRowClick) {
                        setSelectedRow(item);
                        onRowClick?.(item);
                      }
                    }}
                  >
                    {columns.map((column, colIndex) => (
                      <td
                        key={String(colIndex)}
                        className={classNames(
                          `h-14 align-middle text-[13px] md:text-[15px] text-[#1B2528] font-normal whitespace-nowrap capitalize ${tdClassName} ${cellClassName}`
                        )}
                      >
                        {typeof column.cell === "function"
                          ? column.cell(item)
                          : column.cell}
                      </td>
                    ))}
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
