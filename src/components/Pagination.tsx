import { FC } from 'react';
import ReactPaginate from 'react-paginate';

type PaginationProps = {
  onSetCurrentPage: (page: number) => void;
};

const Pagination: FC<PaginationProps> = ({ onSetCurrentPage }) => (
  <ReactPaginate
    className="pagination"
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    pageCount={3}
    onPageChange={({ selected }) => onSetCurrentPage(selected + 1)}
  />
);

export default Pagination;
