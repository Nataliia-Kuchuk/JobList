import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../Components/Loader/Loader";

const JobList = lazy(() => import("../Pages/JobList"));
const Detailed = lazy(() => import("../Pages/Detailed"));

const RoutesPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/:id" element={<Detailed />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesPage;
