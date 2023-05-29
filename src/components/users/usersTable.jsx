import React from "react";
import PropTypes from "prop-types";
import Favourite from "./favourite";
import Qualities from "./qualities";
import Table from "./table";
import { Link } from "react-router-dom";

function UsersTable({ users, onFavourite, onFilter, onSort, selectedSort }) {
    const col = {
        name: {
            path: "name",
            name: "Имя",
            component: (user) => (
                <Link to={`users/${user._id}`}>{user.name}</Link>
            )
        },
        qualities: {
            name: "Качества",
            component: (user) => <Qualities qual={user.qualities} />
        },
        professions: { path: "profession.name", name: "Профессия" },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился, раз"
        },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <Favourite fav={user} onFavourite={onFavourite} />
            )
        },
        delete: {
            component: (item) => (
                <button
                    onClick={() => onFilter(item._id)}
                    className={"btn btn-danger"}
                >
                    Удалить
                </button>
            )
        }
    };
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            col={col}
            data={users}
        />
    );
}

UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    onFilter: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onFavourite: PropTypes.func
};

export default UsersTable;
