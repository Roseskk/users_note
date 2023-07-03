import React from "react";
import displayDate from "../../../utils/date";

const Comments = ({ comments, onDelete }) => {
    return (
        <>
            {comments.map((comment) => {
                return (
                    <div key={comment._id} className="bg-light card-body  mb-3">
                        <div className="row">
                            <div className="col">
                                <div className="d-flex flex-start ">
                                    <img
                                        src={`https://avatars.dicebear.com/api/avataaars/${(
                                            Math.random() + 1
                                        )
                                            .toString(36)
                                            .substring(7)}.svg`}
                                        className="rounded-circle shadow-1-strong me-3"
                                        alt="avatar"
                                        width="65"
                                        height="65"
                                    />
                                    <div className="flex-grow-1 flex-shrink-1">
                                        <div className="mb-4">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-1 ">
                                                    {comment.user.name}
                                                    <span className="small p-2">
                                                        {displayDate(
                                                            comment.created_at
                                                        )}
                                                    </span>
                                                </p>
                                                <button
                                                    onClick={() =>
                                                        onDelete(comment._id)
                                                    }
                                                    className="btn btn-sm text-primary d-flex align-items-center"
                                                >
                                                    <i className="bi bi-x-lg"></i>
                                                </button>
                                            </div>
                                            <p className="small mb-0">
                                                {comment.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default React.memo(Comments);