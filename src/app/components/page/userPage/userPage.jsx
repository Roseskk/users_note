import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import Qualities from "../../ui/qualities";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const UserPage = ({ userId }) => {
    // const {userId}
    // const history = useHistory();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);
    // const handleClick = () => {
    //     history.push("/users");
    // };
    if (user) {
        return (
            <div>
                <h1> {user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <Qualities qualities={user.qualities} />
                <p>completedMeetings: {user.completedMeetings}</p>
                <h2>Rate: {user.rate}</h2>
                <Link to={`/users/${userId}/edit`}>Редактировать</Link>
            </div>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
