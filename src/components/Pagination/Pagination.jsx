import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({info, pageNumber, setPageNumber}) => {

  return (
     <ReactPaginate 
      nextLabel="Next"
      forcePage={pageNumber===1?0: pageNumber-1}
      previousLabel="Prev"
      nextClassName="btn btn-light border border-primary"
      previousClassName="btn btn-light border border-primary"
      pageClassName='page-item'
      pageLinkClassName='page-link'
      activeClassName='active'
      className="pagination justify-content-center primary gap-4 my-4" 
      onPageChange={(data) => {
        setPageNumber(data.selected+1);
      }}
      pageCount={info? info.pages : 1}
     />
  
  )
}

export default Pagination