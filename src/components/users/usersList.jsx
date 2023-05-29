import React, { useState, useEffect } from "react";
import api from "../../api";
import PhraseStatus from "./phraseStatus";
import Pagination from "./pagination";
import { paginate } from "../../utils/paginate";
import GroupList from "./groupList";
import UsersTable from "./usersTable";
import _ from "lodash";

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({
        path: "name",
        order: "asc",
        icon: "bi-caret-down-fill"
    });

    useEffect(() => {
        api.proffessions.fetchAll().then((data) => setProfessions(data));
        api.users.fetchAll().then((items) => setUsers(items));
    }, []);

    const handleFilter = (id) => {
        setUsers(users.filter((i) => i._id !== id));
    };

    const handleFavourite = (id) => {
        const favArray = users.map((i) => {
            if (i._id === id) {
                i.bookmark = !i.bookmark;
            }
            return i;
        });

        setUsers(favArray);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleProfessionSelect = (item) => {
        setCurrentPage(1);
        setSelectedProf(item);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    const clearFilter = () => {
        setSelectedProf(undefined);
    };

    const filteredUsers = selectedProf
        ? users.filter((user) => {
              if (Array.isArray(professions)) {
                  return user.profession.name === selectedProf;
              } else {
                  return user.profession === selectedProf;
              }
          })
        : users;

    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);

    const count = filteredUsers.length;
    const pageSize = 8;
    const usersCrop = paginate(sortedUsers, currentPage, pageSize);

    return (
        <>
            {count ? (
                <div className={"d-flex"}>
                    {professions && (
                        <div className={"d-flex flex-column flex-shrink-0 p-3"}>
                            <GroupList
                                selectedItem={selectedProf}
                                items={professions}
                                onItemsSelect={handleProfessionSelect}
                            />
                            <button
                                className={"btn btn-secondary"}
                                onClick={clearFilter}
                            >
                                Сброс
                            </button>
                        </div>
                    )}
                    <div className={"d-flex flex-column"}>
                        <PhraseStatus len={count} />
                        <UsersTable
                            users={usersCrop}
                            onFilter={handleFilter}
                            onFavourite={handleFavourite}
                            onSort={handleSort}
                            selectedSort={sortBy}
                        />
                        <div className={"d-flex justify-content-center"}>
                            <Pagination
                                itemsCount={count}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <span>Loading</span>
            )}
        </>
    );
};

export default UsersList;
