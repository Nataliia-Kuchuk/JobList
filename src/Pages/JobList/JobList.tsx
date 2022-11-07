import  { FC } from "react";
import JoblistItem from "../../Components/JobListItem";
import Loader from "../../Components/Loader/Loader";
import Paginator from "../../Components/Paginator";
import { FetchResponse, useFetchData } from "../../hooks/useFetchData";
import { IJobs } from "../../types/types";

const JobList: FC = () => {
  const {
    jobs,
    loading,
    error,
    currentJob,
    currentPage,
    pagination,
    jobOnPage,
    prevPage,
    nextPage,
  }: FetchResponse = useFetchData();

  if (loading) {
    return <Loader />;
  }
  
  return (
    <div>
      {currentJob.map((item: IJobs) => (
        <JoblistItem item={item} />
      ))}
      <Paginator
        currentPage={currentPage}
        pagination={pagination}
        jobOnPage={jobOnPage}
        allJobs={jobs.length}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </div>
  );
};

export default JobList;
