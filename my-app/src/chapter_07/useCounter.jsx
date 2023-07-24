import React, { useState } from "react";

function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));
    // Math.max로 0 아래로 내려갈 수 없게 하였음

    return [count, increaseCount, decreaseCount]
}

export default useCounter