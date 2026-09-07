import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Table.css';
import { FiSearch, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import EmptyState from './EmptyState';

const Table = ({ 
  columns, 
  data, 
  searchable = false,
  pagination = false,
  itemsPerPage = 10,
  className = '',
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter data based on search
  const filteredData = searchable
    ? data.filter(row =>
        Object.values(row).some(value =>
          value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : data;

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = pagination
    ? filteredData.slice(startIndex, endIndex)
    : filteredData;

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className={`custom-table-container ${className}`}>
      {searchable && (
        <div className="table-header">
          <div className="search-box">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="search-input"
            />
          </div>
        </div>
      )}

      {paginatedData.length === 0 ? (
        <EmptyState 
          title="No results found"
          message={searchTerm ? "Try adjusting your search" : "No data available"}
        />
      ) : (
        <>
          <div className="table-responsive">
            <table className="custom-table">
              <thead>
                <tr>
                  {columns.map((column, index) => (
                    <th key={index} style={{ width: column.width }}>
                      {column.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {columns.map((column, colIndex) => (
                      <td key={colIndex}>
                        {column.render
                          ? column.render(row[column.accessor], row, rowIndex)
                          : row[column.accessor]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {pagination && totalPages > 1 && (
            <div className="table-footer">
              <div className="pagination-info">
                Showing {startIndex + 1} to {Math.min(endIndex, filteredData.length)} of {filteredData.length} entries
              </div>
              <div className="pagination-controls">
                <button
                  className="pagination-btn"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  <FiChevronLeft />
                </button>
                <span className="pagination-text">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className="pagination-btn"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
      render: PropTypes.func,
      width: PropTypes.string,
    })
  ).isRequired,
  data: PropTypes.array.isRequired,
  searchable: PropTypes.bool,
  pagination: PropTypes.bool,
  itemsPerPage: PropTypes.number,
  className: PropTypes.string,
};

export default Table;
