import { useEffect, useState } from 'react';

import { AxiosRequestConfig } from 'axios';

import { wallEApi } from '@services/wall-e.api';

import { PromiseAlertToast } from '@components/AlertToast';

type UseFetchDataParams = {
  url: string;
  loadingText?: string;
  options?: AxiosRequestConfig;
};

export function useFetchData<T = unknown>({
  url,
  loadingText = 'Loading...',
  options,
}: UseFetchDataParams) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [isError, setIsError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await wallEApi.get<T>(url, options);
        setData(data);
      } catch (error) {
        setIsError(error as Error);
      } finally {
        setIsFetching(false);
      }
    };

    PromiseAlertToast(fetchData, {
      pending: loadingText,
    });
  }, [options, url, loadingText]);

  return { data, isFetching, isError };
}
