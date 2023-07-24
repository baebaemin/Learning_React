import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "배민경",
        comments: "안녕하세요~",
    },
    {
        name: "이수염",
        comments: "하이하이",
    },
    {
        name: "선다용",
        comments: "먼저 가버렸군...",
    },
    {
        name: "더영이",
        comments: "서영이 너마저...",
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comments} />
                )
            })}
        </div>
    );
}

export default CommentList;