import React from "react";

const Pagination = ({ paginations, setPrev, setNext }) => {
  return (
    <ul className="pagination justify-content-center">
      {paginations.map((pagination) => (
        <li className="page-item" key={pagination.id}>
          <span
            className="page-link pagination_itm"
            onClick={() => {
              setPrev(pagination.prevPage);
              setNext(pagination.nextPage);
            }}>
            {pagination.id}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
