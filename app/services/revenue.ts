// "use server";

// import { axiosInterceptorInstance } from "../api/axios-interceptor-instance";
// import { IData, Revenue } from "../types";

// export const getRevenues = async (): Promise<Revenue[]> => {
//   try {
//     const { data } = await axiosInterceptorInstance.get("/revenues");

//     console.log(data.data.data);

//     let extractedData = data.data.data;

//     const updatedData = extractedData.map((revenue: IData, idx: number) => {
//       return {
//         id: idx + 1,
//         ...revenue,
//       };
//     });

//     console.log({ updatedData });

//     return updatedData;
//   } catch (error) {
//     console.log(error);
//   }
// };

"use server";

import { axiosInterceptorInstance } from "../api/axios-interceptor-instance";
import { IData, Revenue } from "../types";

export const getRevenues = async (): Promise<Revenue[]> => {
  try {
    const response = await axiosInterceptorInstance.get("/revenues");
    const extractedData: IData[] = response.data?.data?.data || [];

    const updatedData: Revenue[] = extractedData.map((revenue, index) => ({
      id: index + 1,
      ...revenue,
    }));

    console.debug(
      "Revenues successfully fetched and transformed:",
      updatedData
    );

    return updatedData;
  } catch (error: unknown) {
    console.error(
      "Error occurred while fetching revenues:",
      error instanceof Error ? error.message : error
    );
    throw new Error("Failed to fetch revenues. Please try again later.");
  }
};
