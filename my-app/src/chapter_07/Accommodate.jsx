import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) { // isFull, count값이 변경될 때 업데이트됨
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    }) // 의존성 배열을 생략하였으므로 마운된 직후와 컴포넌트가 업데이트될 때마다 호출 됨

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY); // count가 MAX값 이상이면 isFull은 true ! 
        console.log(`Current count value: ${count}`);
    }, [count]);  // 마운된 직후와 배열 안의 값이 하나라도 바뀐다면 이펙트 함수가 실행

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}> 퇴장 </button>
            {isFull && <p style= {{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;