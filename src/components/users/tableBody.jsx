import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

function TableBody({ data, col }) {
    const renderContent = (item, column) => {
        if (col[column].component) {
            const component = col[column].component;
            if (typeof component === "function") {
                return component(item);
            }
            return component;
        }
        return _.get(item, col[column].path);
    };

    return (
        <tbody>
            {data.map((item) => {
                return (
                    <tr key={item._id}>
                        {Object.keys(col).map((column) => {
                            return (
                                <td key={column}>
                                    {renderContent(item, column)}
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
}

TableBody.propTypes = {
    data: PropTypes.array.isRequired,
    col: PropTypes.object.isRequired
};

export default TableBody;
