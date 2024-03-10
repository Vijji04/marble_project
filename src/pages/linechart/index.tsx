import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { DatePicker, Dropdown, Space, Menu, RangePickerValue } from "antd";
import {
  DownOutlined,
  EditOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

interface DataPoint {
  month: string;
  onlineStoreSession: number;
  netReturnValue: number;
  totalOrders: number;
  conversionRate: number;
  averageOrderValue: number;
  grossSales: number;
  storeSearchConversion: number;
  returnRate: number;
  newOnlineStoreSession: number;
  newNetReturnValue: number;
  newTotalOrders: number;
  newConversionRate: number;
  newAverageOrderValue: number;
  newGrossSales: number;
  newStoreSearchConversion: number;
  newReturnRate: number;
  Online_Store_Session1: any;
  Online_Store_Session2: any;
  Net_Return_Values1: any;
  Net_Return_Values2: any;
  Total_Orders1: any;
  Total_Orders2: any;
  dataPoint: any;
}

const generateData = (): DataPoint[] => {
  const data: DataPoint[] = [];
  const months = [
    "Jan 2023",
    "Feb 2023",
    "Mar 2023",
    "Apr 2023",
    "May 2023",
    "Jun 2023",
    "Jul 2023",
    "Aug 2023",
    "Sep 2023",
    "Oct 2023",
    "Nov 2023",
    "Dec 2023",
  ];
  const onlineStoreSessions = [
    25558, 22000, 27000, 30000, 33000, 29000, 35000, 37000, 40000, 42000, 45000,
    38000,
  ];
  const netReturnValues = [
    -15074, -16000, -18000, -20000, -22000, -19000, -25000, -27000, -28000,
    -30000, -32000, -35000,
  ];
  const totalOrders = [
    10511, 12000, 14000, 16000, 18000, 15000, 20000, 22000, 24000, 26000, 28000,
    30000,
  ];
  const conversionRates = [
    3.18, 3.2, 3.3, 3.4, 3.5, 3.2, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2,
  ];
  const averageOrderValues = [
    100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210,
  ];
  const grossSales = [
    1051100, 1320000, 1680000, 2080000, 2520000, 2250000, 3200000, 3740000,
    4320000, 4940000, 5600000, 6300000,
  ];
  const storeSearchConversions = [
    2.5, 2.6, 2.7, 2.8, 2.9, 3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6,
  ];
  const returnRates = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

  const newOnlineStoreSessions = [
    20000, 22000, 24000, 26000, 28000, 25000, 30000, 32000, 34000, 36000, 38000,
    40000,
  ];
  const newNetReturnValues = [
    -10000, -12000, -14000, -16000, -18000, -15000, -20000, -22000, -24000,
    -26000, -28000, -30000,
  ];
  const newTotalOrders = [
    8000, 9000, 10000, 11000, 12000, 10000, 13000, 14000, 15000, 16000, 17000,
    18000,
  ];
  const newConversionRates = [
    2.8, 2.9, 3.0, 3.1, 3.2, 3.0, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8,
  ];
  const newAverageOrderValues = [
    90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200,
  ];
  const newGrossSales = [
    720000, 900000, 1100000, 1320000, 1560000, 1400000, 1950000, 2240000,
    2550000, 2880000, 3230000, 3600000,
  ];
  const newStoreSearchConversions = [
    2.0, 2.1, 2.2, 2.3, 2.4, 2.2, 2.5, 2.6, 2.7, 2.8, 2.9, 3.0,
  ];
  const newReturnRates = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

  const Online_Store_Session1 = [
    25558, 22000, 27000, 30000, 33000, 29000, 35000, 37000, 40000, 42000, 45000,
    38000,
  ];
  const Online_Store_Session2 = [
    20000, 22000, 24000, 26000, 28000, 25000, 30000, 32000, 34000, 36000, 38000,
    40000,
  ];
  const Net_Return_Values1 = [
    -15074, -16000, -18000, -20000, -22000, -19000, -25000, -27000, -28000,
    -30000, -32000, -35000,
  ];
  const Net_Return_Values2 = [
    -10000, -12000, -14000, -16000, -18000, -15000, -20000, -22000, -24000,
    -26000, -28000, -30000,
  ];
  const Total_Orders1 = [
    10511, 12000, 14000, 16000, 18000, 15000, 20000, 22000, 24000, 26000, 28000,
    30000,
  ];
  const Total_Orders2 = [
    8000, 9000, 10000, 11000, 12000, 10000, 13000, 14000, 15000, 16000, 17000,
    18000,
  ];

  for (let i = 0; i < months.length; i++) {
    data.push({
      month: months[i],
      onlineStoreSession: onlineStoreSessions[i],
      netReturnValue: netReturnValues[i],
      totalOrders: totalOrders[i],
      conversionRate: conversionRates[i],
      averageOrderValue: averageOrderValues[i],
      grossSales: grossSales[i],
      storeSearchConversion: storeSearchConversions[i],
      returnRate: returnRates[i],
      newOnlineStoreSession: newOnlineStoreSessions[i],
      newNetReturnValue: newNetReturnValues[i],
      newTotalOrders: newTotalOrders[i],
      newConversionRate: newConversionRates[i],
      newAverageOrderValue: newAverageOrderValues[i],
      newGrossSales: newGrossSales[i],
      newStoreSearchConversion: newStoreSearchConversions[i],
      newReturnRate: newReturnRates[i],
      Online_Store_Session1: Online_Store_Session1[i],
      Online_Store_Session2: Online_Store_Session2[i],
      Net_Return_Values1: Net_Return_Values1[i],
      Net_Return_Values2: Net_Return_Values2[i],
      Total_Orders1: Total_Orders1[i],
      Total_Orders2: Total_Orders2[i],
      dataPoint: null,
    });
  }

  return data;
};

export const Linechart: React.FC = () => {
  const [selectedDataKey, setSelectedDataKey] = useState<
    "Online_Store_Session1" | "Net_Return_Values1" | "Total_Orders1"
  >("Online_Store_Session1");
  const [newSelectedDataKey, setNewSelectedDataKey] = useState<
    "Online_Store_Session2" | "Net_Return_Values2" | "Total_Orders2"
  >("Online_Store_Session2");
  const [data, setData] = useState<DataPoint[]>(generateData());
  const [hoverData, setHoverData] = useState<DataPoint | null>(
    data.find((dataPoint) => dataPoint.month === "Jan 2023") || null
  );

  const [selectedDropdownValue, setSelectedDropdownValue] =
    useState<string>("Conversion rate");

  const handleMouseMove = (data: DataPoint) => {
    setHoverData(data);
  };

  const handleMouseLeave = () => {
    setHoverData(
      data.find((dataPoint) => dataPoint.month === "Jan 2023") || null
    );
  };

  const handleDataKeyChange = (
    value: "Online_Store_Session" | "Net_Return_Values" | "Total_Orders",
    isNewLine: boolean
  ) => {
    setNewSelectedDataKey(`${value}2` as "Online_Store_Session2" | "Net_Return_Values2" | "Total_Orders2");
    setSelectedDataKey(`${value}1` as "Online_Store_Session1" | "Net_Return_Values1" | "Total_Orders1");
  };

  const handleDropdownClick = (e: { key: string }) => {
    setSelectedDropdownValue(e.key);
  };

  const [selectedDateRange, setSelectedDateRange] = useState<
    [Dayjs | null, Dayjs | null]
  >([null, null]);
  const [newSelectedDateRange, setNewSelectedDateRange] = useState<
    [Dayjs | null, Dayjs | null]
  >([null, null]);

  const handleDateChange = (
    dates: RangePickerValue<Dayjs>,
    dateStrings: [string, string]
  ) => {
    if (selectedDataKey === "Online_Store_Session1") {
      if (dates) {
        const startDate = dates[0];
        const endDate = dates[1];

        // Reset the Online_Store_Session1 array
        const updatedData = data.map((dataPoint) => ({
          ...dataPoint,
          Online_Store_Session1: null,
        }));

        // Update the Online_Store_Session1 array based on the selected date range
        const updatedDataWithDateRange = updatedData.map((dataPoint) => {
          const month = dayjs(dataPoint.month, "MMM YYYY");
          if (month.isBetween(startDate, endDate, "month", "[]")) {
            return {
              ...dataPoint,
              Online_Store_Session1: dataPoint.onlineStoreSession,
            };
          }
          return dataPoint;
        });

        setData(updatedDataWithDateRange);
        setSelectedDateRange([startDate, endDate]);
      } else {
        // Reset Online_Store_Session1 to onlineStoreSession if no date range is selected
        const resetData = data.map((dataPoint) => ({
          ...dataPoint,
          Online_Store_Session1: dataPoint.onlineStoreSession,
        }));
        setData(resetData);
        setSelectedDateRange([null, null]);
      }
    } else if (selectedDataKey === "Net_Return_Values1") {
      if (dates) {
        const startDate = dates[0];
        const endDate = dates[1];

        // Reset the Net_Return_Values1 array
        const updatedData = data.map((dataPoint) => ({
          ...dataPoint,
          Net_Return_Values1: null,
        }));

        // Update the Net_Return_Values1 array based on the selected date range
        const updatedDataWithDateRange = updatedData.map((dataPoint) => {
          const month = dayjs(dataPoint.month, "MMM YYYY");
          if (month.isBetween(startDate, endDate, "month", "[]")) {
            return {
              ...dataPoint,
              Net_Return_Values1: dataPoint.netReturnValue,
            };
          }
          return dataPoint;
        });

        setData(updatedDataWithDateRange);
        setSelectedDateRange([startDate, endDate]);
      } else {
        // Reset Net_Return_Values1 to netReturnValue if no date range is selected
        const resetData = data.map((dataPoint) => ({
          ...dataPoint,
          Net_Return_Values1: dataPoint.netReturnValue,
        }));
        setData(resetData);
        setSelectedDateRange([null, null]);
      }
    } else if (selectedDataKey === "Total_Orders1") {
      if (dates) {
        const startDate = dates[0];
        const endDate = dates[1];

        // Reset the Total_Orders1 array
        const updatedData = data.map((dataPoint) => ({
          ...dataPoint,
          Total_Orders1: null,
        }));

        // Update the Total_Orders1 array based on the selected date range
        const updatedDataWithDateRange = updatedData.map((dataPoint) => {
          const month = dayjs(dataPoint.month, "MMM YYYY");
          if (month.isBetween(startDate, endDate, "month", "[]")) {
            return {
              ...dataPoint,
              Total_Orders1: dataPoint.totalOrders,
            };
          }
          return dataPoint;
        });

        setData(updatedDataWithDateRange);
        setSelectedDateRange([startDate, endDate]);
      } else {
        // Reset Total_Orders1 to totalOrders if no date range is selected
        const resetData = data.map((dataPoint) => ({
          ...dataPoint,
          Total_Orders1: dataPoint.totalOrders,
        }));
        setData(resetData);
        setSelectedDateRange([null, null]);
      }
    }
  };

  const handleNewDateChange = (
    dates: RangePickerValue<Dayjs>,
    dateStrings: [string, string]
  ) => {
    if (newSelectedDataKey === "Online_Store_Session2") {
      if (dates) {
        const startDate = dates[0];
        const endDate = dates[1];

        // Reset the Online_Store_Session2 array
        const updatedData = data.map((dataPoint) => ({
          ...dataPoint,
          Online_Store_Session2: null,
        }));

        // Update the Online_Store_Session2 array based on the selected date range
        const updatedDataWithDateRange = updatedData.map((dataPoint) => {
          const month = dayjs(dataPoint.month, "MMM YYYY");
          if (month.isBetween(startDate, endDate, "month", "[]")) {
            return {
              ...dataPoint,
              Online_Store_Session2: dataPoint.newOnlineStoreSession,
            };
          }
          return dataPoint;
        });

        setData(updatedDataWithDateRange);
        setNewSelectedDateRange([startDate, endDate]);
      } else {
        // Reset Online_Store_Session2 to newOnlineStoreSession if no date range is selected
        const resetData = data.map((dataPoint) => ({
          ...dataPoint,
          Online_Store_Session2: dataPoint.newOnlineStoreSession,
        }));
        setData(resetData);
        setNewSelectedDateRange([null, null]);
      }
    } else if (newSelectedDataKey === "Net_Return_Values2") {
      if (dates) {
        const startDate = dates[0];
        const endDate = dates[1];

        // Reset the Net_Return_Values2 array
        const updatedData = data.map((dataPoint) => ({
          ...dataPoint,
          Net_Return_Values2: null,
        }));

        // Update the Net_Return_Values2 array based on the selected date range
        const updatedDataWithDateRange = updatedData.map((dataPoint) => {
          const month = dayjs(dataPoint.month, "MMM YYYY");
          if (month.isBetween(startDate, endDate, "month", "[]")) {
            return {
              ...dataPoint,
              Net_Return_Values2: dataPoint.newNetReturnValue,
            };
          }
          return dataPoint;
        });

        setData(updatedDataWithDateRange);
        setNewSelectedDateRange([startDate, endDate]);
      } else {
        // Reset Net_Return_Values2 to newNetReturnValue if no date range is selected
        const resetData = data.map((dataPoint) => ({
          ...dataPoint,
          Net_Return_Values2: dataPoint.newNetReturnValue,
        }));
        setData(resetData);
        setNewSelectedDateRange([null, null]);
      }
    } else if (newSelectedDataKey === "Total_Orders2") {
      if (dates) {
        const startDate = dates[0];
        const endDate = dates[1];

        // Reset the Total_Orders2 array
        const updatedData = data.map((dataPoint) => ({
          ...dataPoint,
          Total_Orders2: null,
        }));

        // Update the Total_Orders2 array based on the selected date range
        const updatedDataWithDateRange = updatedData.map((dataPoint) => {
          const month = dayjs(dataPoint.month, "MMM YYYY");
          if (month.isBetween(startDate, endDate, "month", "[]")) {
            return {
              ...dataPoint,
              Total_Orders2: dataPoint.newTotalOrders,
            };
          }
          return dataPoint;
        });

        setData(updatedDataWithDateRange);
        setNewSelectedDateRange([startDate, endDate]);
      } else {
        // Reset Total_Orders2 to newTotalOrders if no date range is selected
        const resetData = data.map((dataPoint) => ({
          ...dataPoint,
          Total_Orders2: dataPoint.newTotalOrders,
        }));
        setData(resetData);
        setNewSelectedDateRange([null, null]);
      }
    }
  };

  const menu = (
    <Menu
      onClick={handleDropdownClick}
      items={[
        {
          label: "Conversion rate",
          key: "Conversion rate",
          icon: <LineChartOutlined />,
          style: {
            backgroundColor:
              selectedDropdownValue === "Conversion rate"
                ? "#f1f1f1"
                : "inherit",
          },
        },
        {
          label: "Average Order Value",
          key: "Average Order Value",
          icon: <LineChartOutlined />,
          style: {
            backgroundColor:
              selectedDropdownValue === "Average Order Value"
                ? "#f1f1f1"
                : "inherit",
          },
        },
        {
          label: "Gross Sales",
          key: "Gross Sales",
          icon: <LineChartOutlined />,
          style: {
            backgroundColor:
              selectedDropdownValue === "Gross Sales" ? "#f1f1f1" : "inherit",
          },
        },
        {
          label: "Net return value",
          key: "Net return value",
          icon: <LineChartOutlined />,
          style: {
            backgroundColor:
              selectedDropdownValue === "Net return value"
                ? "#f1f1f1"
                : "inherit",
          },
        },
        {
          label: "Store search conversion",
          key: "Store search conversion",
          icon: <LineChartOutlined />,
          style: {
            backgroundColor:
              selectedDropdownValue === "Store search conversion"
                ? "#f1f1f1"
                : "inherit",
          },
        },
        {
          label: "Return rate",
          key: "Return rate",
          icon: <LineChartOutlined />,
          style: {
            backgroundColor:
              selectedDropdownValue === "Return rate" ? "#f1f1f1" : "inherit",
          },
        },
      ]}
    />
  );

  // Helper function to calculate percent change
  const calculatePercentChange = (value1: number, value2: number) => {
    if (value2 === 0) {
      return 0; // Avoid division by zero
    }
    const percentChange = ((value1 - value2) / value2) * 100;
    return percentChange.toFixed(2); // Round to 2 decimal places
  };

  return (
<div className="bg-white lg:m-5 lg:p-4 rounded-3xl">
     <div className="flex justify-between mb-4">
         <div className="flex flex-col lg:pl-20 lg:pr-8 min-w-[100%] md:flex-row md:gap-4">
          <div
            className="m-2 p-2 rounded-lg bg-transparent md:w-1/4"
            style={{
              backgroundColor:
                selectedDataKey === "Online_Store_Session1"
                  ? "#f1f1f1"
                  : "inherit",
              cursor: "pointer",
            }}
            onClick={() => handleDataKeyChange("Online_Store_Session", false)}
          >
            <div className="flex items-center">
              <div className="font-[500] text-md md:text-base lg:text-md mb-2 border-b-2 border-dotted border-gray-400 flex-grow max-w-[80%] mr-5">
                Online Store Session:
              </div>
              <EditOutlined
                className="ml-2"
                onClick={() =>
                  handleDataKeyChange("Online_Store_Session1", false)
                }
              />
            </div>
            <div className="font-[650] text-sm pt-1 md:text-base lg:text-lg">
              {hoverData
                ? hoverData.onlineStoreSession - hoverData.newOnlineStoreSession
                : "-"}

              <span className="text-xs text-gray-500 ml-4">
                {hoverData
                  ? +hoverData.onlineStoreSession -
                      +hoverData.newOnlineStoreSession >=
                    0
                    ? "▲"
                    : "▼"
                  : "-"}
                {hoverData
                  ? Math.abs(
                      calculatePercentChange(
                        hoverData.onlineStoreSession,
                        hoverData.newOnlineStoreSession
                      )
                    )
                  : "-"}
                {"%"}
              </span>
            </div>
          </div>

          <div
            className="m-2 p-2 rounded-lg bg-transparent md:w-1/4"
            style={{
              backgroundColor:
                selectedDataKey === "Total_Orders1" ? "#f1f1f1" : "inherit",
              cursor: "pointer",
            }}
            onClick={() => handleDataKeyChange("Total_Orders", false)}
          >
            <div className="flex items-center">
              <div className="font-[500] text-sm md:text-base lg:text-sm mb-2 border-b-2 border-dotted border-gray-400 flex-grow max-w-[80%] mr-5">
                Total Orders:
              </div>
              <EditOutlined
                className="ml-2"
                onClick={() => handleDataKeyChange("Total_Orders", false)}
              />
            </div>
            <div className="font-[650] text-sm pt-1 md:text-base lg:text-lg">
              {hoverData
                ? hoverData.totalOrders - hoverData.newTotalOrders
                : "-"}

              <span className="text-xs text-gray-500 ml-4">
                {hoverData
                  ? +hoverData.totalOrders - +hoverData.newTotalOrders >= 0
                    ? "▲"
                    : "▼"
                  : "-"}
                {hoverData
                  ? Math.abs(
                      calculatePercentChange(
                        hoverData.totalOrders,
                        hoverData.newTotalOrders
                      )
                    )
                  : "-"}
                {"%"}
              </span>
            </div>
          </div>

          <div
            className="m-2 p-2 rounded-lg bg-transparent md:w-1/4"
            style={{
              backgroundColor:
                selectedDataKey === "Net_Return_Values1"
                  ? "#f1f1f1"
                  : "inherit",
              cursor: "pointer",
            }}
            onClick={() => handleDataKeyChange("Net_Return_Values", false)}
          >
            <div className="flex items-center">
              <div className="font-[500] text-sm md:text-base lg:text-sm mb-2 border-b-2 border-dotted border-gray-400 flex-grow max-w-[80%] mr-5">
                Net Return Value:
              </div>
              <EditOutlined
                className="ml-2"
                onClick={() => handleDataKeyChange("Net_Return_Value", false)}
              />
            </div>
            <div className="font-[650] text-sm pt-1 md:text-base lg:text-lg">
              {hoverData
                ? hoverData.netReturnValue - hoverData.newNetReturnValue
                : "-"}

              <span className="text-xs text-gray-500 ml-4">
                {hoverData
                  ? +hoverData.netReturnValue - +hoverData.newNetReturnValue >=
                    0
                    ? "▲"
                    : "▼"
                  : "-"}
                {hoverData
                  ? Math.abs(
                      calculatePercentChange(
                        hoverData.netReturnValue,
                        hoverData.newNetReturnValue
                      )
                    )
                  : "-"}
                {"%"}
              </span>
            </div>
          </div>

          <div className="m-2 p-2 rounded-lg bg-transparent md:w-1/4">
            <div className="font-[500] text-sm md:text-base lg:text-sm mb-2 border-b-2 border-dotted border-gray-400 max-w-[80%]">
              {selectedDropdownValue}:
            </div>
            <div className="font-semibold p-2 text-sm md:text-base lg:text-lg">
              {hoverData ? (
                selectedDropdownValue === "Conversion rate" ? (
                  <span>
                    <span className="font-[650] text-sm pt-1 md:text-base lg:text-lg">
                      {(
                        hoverData.conversionRate - hoverData.newConversionRate
                      ).toFixed(2)}
                      %
                    </span>
                    <span className="text-xs text-gray-500 ml-4">
                      {hoverData
                        ? calculatePercentChange(
                            hoverData.conversionRate,
                            hoverData.newConversionRate
                          )
                        : "-"}
                      %
                    </span>
                  </span>
                ) : selectedDropdownValue === "Average Order Value" ? (
                  <span>
                    <span className="font-[650] text-sm pt-1 md:text-base lg:text-lg">
                      $
                      {hoverData.averageOrderValue -
                        hoverData.newAverageOrderValue}
                    </span>
                    <span className="text-xs text-gray-500 ml-4">
                      {hoverData
                        ? calculatePercentChange(
                            hoverData.averageOrderValue,
                            hoverData.newAverageOrderValue
                          )
                        : "-"}
                      %
                    </span>
                  </span>
                ) : selectedDropdownValue === "Gross Sales" ? (
                  <span>
                    <span className="font-[650] text-sm pt-1 md:text-base lg:text-lg">
                      ${hoverData.grossSales - hoverData.newGrossSales}
                    </span>
                    <span className="text-xs text-gray-500 ml-4">
                      {hoverData
                        ? calculatePercentChange(
                            hoverData.grossSales,
                            hoverData.newGrossSales
                          )
                        : "-"}
                      %
                    </span>
                  </span>
                ) : selectedDropdownValue === "Net return value" ? (
                  <span>
                    <span className="font-[650] text-sm pt-1 md:text-base lg:text-lg">
                      ${hoverData.netReturnValue - hoverData.newNetReturnValue}
                    </span>
                    <span className="text-xs text-gray-500 ml-4">
                      {hoverData
                        ? calculatePercentChange(
                            hoverData.netReturnValue,
                            hoverData.newNetReturnValue
                          )
                        : "-"}
                      %
                    </span>
                  </span>
                ) : selectedDropdownValue === "Store search conversion" ? (
                  <span>
                    <span className="font-[650] text-sm pt-1 md:text-base lg:text-lg">
                      {(
                        hoverData.storeSearchConversion -
                        hoverData.newStoreSearchConversion
                      ).toFixed(2)}
                      %
                    </span>
                    <span className="text-xs text-gray-500 ml-4">
                      {hoverData
                        ? calculatePercentChange(
                            hoverData.storeSearchConversion,
                            hoverData.newStoreSearchConversion
                          )
                        : "-"}
                      %
                    </span>
                  </span>
                ) : selectedDropdownValue === "Return rate" ? (
                  <span>
                    <span className="font-[650] text-sm pt-1 md:text-base lg:text-lg">
                      {(hoverData.returnRate - hoverData.newReturnRate).toFixed(
                        2
                      )}
                      %
                    </span>
                    <span className="text-xs text-gray-500 ml-4">
                      {hoverData
                        ? calculatePercentChange(
                            hoverData.returnRate,
                            hoverData.newReturnRate
                          )
                        : "-"}
                      %
                    </span>
                  </span>
                ) : (
                  "-"
                )
              ) : (
                "-"
              )}
            </div>
          </div>
          <div className="pt-5 pl-4 lg:pl-0">
            <Dropdown overlay={menu} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          onMouseMove={(data) =>
            handleMouseMove(data.activePayload?.[0]?.payload)
          }
          onMouseLeave={handleMouseLeave}
        >
          <XAxis dataKey="month" />
          <YAxis domain={[0, 40000]} ticks={[0, 20000, 40000]} />
          <CartesianGrid horizontal={true} stroke="#ccc" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={selectedDataKey}
            stroke="#67BAED"
            strokeWidth={4}
          />
          <Line
            // type="dotted" // Set the line type to dotted
            dataKey={newSelectedDataKey} // Use the new data set as the key
            stroke="rgba(103,186,237 , 0.3)" // Set a different color for the new line
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex flex-row-reverse mt-4 pr-8">
        <div className="flex items-center ml-4">
          <div className="w-4 h-4 rounded-full bg-blue-300 mr-2"></div>
          <DatePicker.RangePicker
            picker="month"
            onChange={handleNewDateChange}
            allowClear={true}
            value={newSelectedDateRange}
          />
        </div>
        <div className="flex items-center ml-2">
          <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
          <DatePicker.RangePicker
            picker="month"
            onChange={handleDateChange}
            allowClear={true}
            value={selectedDateRange}
          />
        </div>
      </div>
    </div>
  );
};