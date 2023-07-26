import React, { useNavigate } from "react";

function SampleNavigate(props) {
    const navigate = useNavigate();
    const moveToMain = () => {
        navigate("/")
    };

    return;
} 

export default SampleNavigate