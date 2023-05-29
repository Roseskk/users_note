import React from "react";
import PropTypes from "prop-types";

function TableHeader({ onSort, selectedSort, col }) {
    // const [isSort, setIsSort] = useState("bi bi-caret-up-fill");
    const handleSort = (item) => {
        console.log(selectedSort.path);
        console.log(item);
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc",
                icon:
                    selectedSort.order === "asc"
                        ? "bi-caret-up-fill"
                        : "bi-caret-down-fill"
            });
        } else {
            onSort({
                path: item,
                order: "asc",
                icon:
                    selectedSort.order === "asc"
                        ? "bi-caret-up-fill"
                        : "bi-caret-down-fill"
            });
        }
    };
    return (
        <>
            <thead>
                <tr>
                    {Object.keys(col).map((column) => {
                        return (
                            <th
                                key={column}
                                onClick={
                                    col[column].path
                                        ? () => handleSort(col[column].path)
                                        : undefined
                                }
                                scope="col"
                                {...{ role: col[column].path && "button" }}
                                className={`${
                                    col[column].path === selectedSort.path
                                        ? selectedSort.icon
                                        : null
                                }`}
                            >
                                {col[column].name}
                            </th>
                        );
                    })}
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
