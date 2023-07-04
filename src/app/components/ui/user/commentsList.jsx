import React, { useEffect, useState } from "react";
import Comments from "./comments";
import api from "../../../api";
import { useParams } from "react-router-dom";
import AddCommentForm from "./addCommentForm";

const CommentsList = (props) => {
    const { userId } = useParams();
    const [users, setUsers] = useState(null);
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
                    commentsData
                        .map((comment) => {
                            const userIndex = usersData.findIndex(
                                (usr) => usr.value === comment.userId
                            );
                            return { ...comment, user: usersData[userIndex] };
                        })
                        .sort((a, b) => b.created_at - a.created_at)
                );
            });
        });
    }, []);

    const onSubmitForm = (formData) => {
        if (formData.userSelect.length > 0 && formData.comment.length > 0) {
            api.comments
                .add({
                    userId: formData.userSelect,
                    pageId: userId,
                    content: formData.comment
                })
                .then(() => {
                    const coms = [...comments];
                    coms.push({
                        _id: Math.floor(Math.random() * 100).toString(),
                        pageId: userId,
                        userId: formData.userSelect,
                        user: users[
                            users.findIndex(
                                (usr) => usr.value === formData.userSelect
                            )
                        ],
                        content: formData.comment,
                        created_at: Date.now()
                    });
                    setComments(
                        coms.sort((a, b) => b.created_at - a.created_at)
                    );
                })
                .catch((err) => console.log("NE OKAY", err));
        } else {
            alert("Данные не введены");
        }
    };

    const handleDelete = (id) => {
        api.comments.remove(id).then(() => {
            setComments((prevState) =>
                prevState.filter((com) => com._id !== id)
            );
        });
    };

    return (
        <>
            <div className="card mb-2">
                {" "}
                <div className="card-body">
                    <AddCommentForm users={users} onSubmitForm={onSubmitForm} />
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
