import React from "react";
import PropTypes from "prop-types";

function TableHeader({ onSort, selectedSort, col }) {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        }
    };
    return (
        <>
            <thead>
                <tr>
                    {
                        Object.keys(col).map(column => {
                            return (
                                <th
                                    key={column}
                                    onClick={col[column].path ? () => handleSort(col[column].path) : undefined} scope="col"
                                    {...{ role: col[column].path && "button" }}
                                >
                                    {col[column].name}
                                </th>
                            );
                        })
                    }
                </tr>
            </thead>
        </>
    );
}

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object,
    col: PropTypes.object.isRequired
};

export default TableHeader;
