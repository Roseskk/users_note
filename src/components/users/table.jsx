import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import PropTypes from "prop-types";

function Table({ onSort, selectedSort, col, data }) {
    return (
        <table className={"table"}>
            <TableHeader {...{ onSort, selectedSort, col }} />
            <TableBody {...{ col, data }} />
        </table>
    );
}

Table.propTypes = {
    onSort: PropTypes.func,
    selectedSort: PropTypes.object,
    col: PropTypes.object,
    data: PropTypes.array
};

export default Table;
