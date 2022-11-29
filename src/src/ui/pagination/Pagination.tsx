import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { Dispatch } from "react";
import { PaginationWrapper } from "./Pagination.style";

interface PaginationI {
  totalPages: number;
  setCurrentPage: Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}

export const PaginationComponent: React.FC<PaginationI> = ({
  totalPages,
  setCurrentPage,
  currentPage,
}): JSX.Element => {
  const onChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <PaginationWrapper>
      <Pagination
        onChange={onChange}
        current={currentPage}
        total={totalPages}
      />
    </PaginationWrapper>
  );
};
