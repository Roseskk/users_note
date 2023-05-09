import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../api";
import Qualities from "./qualities";

const User = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        api.users.getById(userId).then(result => setUser(result));
    }, []);
    console.log(user);

    return (
        <>
            {
                user ? (
                    <div className={"d-flex flex-column  rounded border p-3"}>
                        <span className={"h2"}>{user.name}</span>
                        <span className={"h3"}>Профессия: {user.profession.name}</span>
                        <span><Qualities qual={user.qualities} /></span>
                        <span>completedMeetings: {user.completedMeetings}</span>
                        <span className={"h-2"}>Rate: {user.rate}</span>
                        <Link to={"/users"}>Все пользователи</Link>
                    </div>
                ) : (
                    <span>Loading</span>
                )
            }
        </>
    );
};

export default User;
