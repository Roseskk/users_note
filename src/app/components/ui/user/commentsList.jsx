import React, { useEffect, useState } from "react";
import Comments from "./comments";
import SelectField from "../../common/form/selectField";
import api from "../../../api";
import { useParams } from "react-router-dom";
import TextField from "../../common/form/textField";

const CommentsList = (props) => {
    const { userId } = useParams();
    const [users, setUsers] = useState(null);
    const [formData, setFromData] = useState({
        userSelect: "",
        comment: ""
    });
    const [comments, setComments] = useState([]);
    useEffect(() => {
        api.users.fetchAll().then((userData) => {
            api.comments.fetchCommentsForUser(userId).then((commentsData) => {
                const usersData = Object.keys(userData).map((userName) => ({
                    label: userData[userName].name,
                    value: userData[userName]._id
                }));
                setUsers(usersData);
                setComments(
                    commentsData.map((comment) => {
                        const userIndex = userData.findIndex(
                            (usr) => usr._id === comment.userId
                        );
                        return { ...comment, user: userData[userIndex] };
                    })
                );
            });
        });
    }, []);

    const handleSelect = (target) => {
        setFromData({
            ...formData,
            [target.name]: target.value
        });
    };

    const handleArea = (target) => {
        setFromData({
            ...formData,
            [target.name]: target.value
        });
    };

    const handleForm = (e) => {
        e.preventDefault();
        if (formData.userSelect.length === 0) return;
        api.comments
            .add({
                userId: formData.userSelect,
                pageId: userId,
                content: formData.comment
            })
            .then((res) => {
                api.users.fetchAll().then((userData) => {
                    api.comments
                        .fetchCommentsForUser(userId)
                        .then((commentsData) => {
                            const usersData = Object.keys(userData).map(
                                (userName) => ({
                                    label: userData[userName].name,
                                    value: userData[userName]._id
                                })
                            );
                            setUsers(usersData);
                            setComments(
                                commentsData.map((comment) => {
                                    const userIndex = userData.findIndex(
                                        (usr) => usr._id === comment.userId
                                    );
                                    return {
                                        ...comment,
                                        user: userData[userIndex]
                                    };
                                })
                            );
                        });
                });
            });
    };

    const handleDelete = (id) => {
        api.comments.remove(id).then(() => {
            api.users.fetchAll().then((userData) => {
                api.comments
                    .fetchCommentsForUser(userId)
                    .then((commentsData) => {
                        const usersData = Object.keys(userData).map(
                            (userName) => ({
                                label: userData[userName].name,
                                value: userData[userName]._id
                            })
                        );
                        setUsers(usersData);
                        setComments(
                            commentsData.map((comment) => {
                                const userIndex = userData.findIndex(
                                    (usr) => usr._id === comment.userId
                                );
                                return {
                                    ...comment,
                                    user: userData[userIndex]
                                };
                            })
                        );
                    });
            });
        });
    };

    console.log(comments);
    return (
        <>
            <div className="card mb-2">
                {" "}
                <div className="card-body ">
                    <form onSubmit={handleForm}>
                        {users !== null ? (
                            <SelectField
                                label={"Выбор пользователя"}
                                name={"userSelect"}
                                options={users}
                                value={formData.selectValue}
                                onChange={handleSelect}
                            />
                        ) : null}
                        <TextField
                            label={"Комментарий"}
                            type={"textarea"}
                            name={"comment"}
                            value={formData.comment}
                            onChange={handleArea}
                        />
                        <button className={"btn btn-primary"}>Отправить</button>
                    </form>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-body ">
                    <h2>Comments</h2>
                    <hr />
                    <Comments onDelete={handleDelete} comments={comments} />
                </div>
            </div>
        </>
    );
};

export default CommentsList;
