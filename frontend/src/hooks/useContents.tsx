import { useState, useEffect } from 'react';
import { getContent } from '../api/FetchData';


interface Content {
  id: string;
  name: string;
  level: number;
  parent_id: string;
  content: string;
}

interface ContentHook {
  isLoading: boolean;
  isError: boolean;
  error: {
    message: string;
  };
  results: Content[];
}

const useContents: () => ContentHook = () => {
  const [results, setResults] = useState<Content[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<{ message: string }>({ message: '' });

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setError({ message: '' });

    getContent()
      .then((data: Content[]) => {
        setResults((prev: Content[]) => [...prev, ...data]);
        setIsLoading(false);
      })
      .catch((e: Error) => {
        setIsLoading(false);
        setIsError(true);
        setError({ message: e.message });
      });

  }, []);

  return { isLoading, isError, error, results };
};

export default useContents;
