import { useEffect, useState } from "react";
import { ServicesData } from "../Services/ServicesData";
import { IJobs } from "../types/types";

export type FetchResponse = {
  jobs: Array<IJobs>;
  error: any;
  loading: Boolean;
  currentPage: number;
  jobOnPage: number;
  currentJob: Array<IJobs>;
  pagination: (page: number) => void;
  prevPage: () => void;
  nextPage: () => void;
};
export const useFetchData = (): FetchResponse => {
  const [jobs, setJobs] = useState<IJobs[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [jobOnPage] = useState<number>(10);

  const lastIndexInPage = currentPage * jobOnPage;
  const firstIndexInPage = lastIndexInPage - jobOnPage;
  const currentJob = jobs.slice(firstIndexInPage, lastIndexInPage);
  const pagination = (page: number) => {
    setCurrentPage(page);
  };

  const prevPage = () => {
    if (currentPage === 1) {
      setCurrentPage(jobs.length / jobOnPage + 1);
    }
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const nextPage = () => {
    if (currentPage === jobs.length / jobOnPage) {
      setCurrentPage(0);
    }
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const getJobs = async () => {
    try {
      const data = await ServicesData.getData();
      console.log(data);
      setJobs(data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    getJobs();
  }, []);
  return {
    jobs,
    loading,
    error,
    jobOnPage,
    currentJob,
    currentPage,
    pagination,
    prevPage,
    nextPage,
  };
};
