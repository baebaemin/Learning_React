import React from "react";

const students = [
    {
        id: 1,
        name: "PAIK"
    },
    {
        id: 2,
        name: "BAE"
    },
    {
        id: 3,
        name: "LIM"
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;