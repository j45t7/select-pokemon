import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export interface CurrentTimeResponse {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  seconds: number;
  milliSeconds: number;
  dateTime: string;
  date: string;
  time: string;
  timeZone: string;
  dayOfWeek: string;
  dstActive: boolean;
}

export const timeApi = createApi({
  reducerPath: 'timeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.timeapi.io/api/time' }),
  endpoints: (builder) => ({
    getCurrentTime: builder.query<CurrentTimeResponse, { timeZone: string }>({
      query: ({ timeZone }) => `/current/zone?timeZone=${encodeURIComponent(timeZone)}`,
    }),
  }),
});

export const { useGetCurrentTimeQuery } = timeApi;
