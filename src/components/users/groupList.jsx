import React from "react";
import PropTypes from "prop-types";

function GroupList({ items, selectedItem, valueProperty, contentProperty, onItemsSelect }) {
    console.log(items, onItemsSelect);
    return (
        <ul className={"list-group"}>
            {
                Object.keys(items).map((item) => {
                    return (
                        <li key={items[item][valueProperty]}
                            className={`list-group-item ${items[item] === selectedItem ? " active" : ""}`}
                            onClick={() => onItemsSelect(items[item])}
                            role={"button"}
                        >
                            {items[item][contentProperty]}
                        </li>
                    );
                })
            }
        </ul>
    );
}

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onItemsSelect: PropTypes.func.isRequired,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    selectedItem: PropTypes.object
};

export default GroupList;
