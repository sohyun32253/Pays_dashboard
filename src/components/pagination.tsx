import ReactPaginate from "react-paginate";

interface Props {
  pageCount: number;
  onPageChange: (selected: number) => void;
}

export default function Pagination({ pageCount, onPageChange }: Props) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      onPageChange={(event) => onPageChange(event.selected)}
      containerClassName="flex gap-2 mt-6 items-center justify-center"
      pageClassName="px-3 py-1 bg-gray-200 rounded cursor-pointer"
      activeClassName="bg-gray-900 text-white"
      previousClassName="px-3 py-1 bg-gray-200 rounded cursor-pointer"
      nextClassName="px-3 py-1 bg-gray-200 rounded cursor-pointer"
      disabledClassName="opacity-50 cursor-not-allowed"
    />
  );
}
