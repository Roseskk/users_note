import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import Qualities from "../../ui/qualities";
import { Link, useHistory } from "react-router-dom";
import UserInfo from "../../ui/user/userInfo";
import UserMeets from "../../ui/user/userMeets";
import CommentsList from "../../ui/user/commentsList";
// import { useHistory } from "react-router-dom";

const UserPage = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);
    if (user) {
        return (
            <>
                <div className="container">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <UserInfo
                                id={userId}
                                name={user.name}
                                profession={user.profession.name}
                                rate={user.rate}
                            />
                            <div className="card mb-3">
                                <div className="card-body d-flex flex-column justify-content-center text-center">
                                    <h5 className="card-title">
                                        <span>Qualities</span>
                                    </h5>
                                    <Qualities qualities={user.qualities} />
                                </div>
                            </div>
                            <UserMeets meets={user.completedMeetings} />
                            <button
                                onClick={() => history.goBack()}
                                className={"btn btn-primary"}
                            >
                                Вернуться на страницу юзеров
                            </button>
                        </div>
                        <div className="col-md-8">
                            <CommentsList />
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
