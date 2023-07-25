import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>보글보글</p>;
    }
    return <p>물이 아직 안 끓어요</p>
}
    
function toCelsius(fahrenheit) { // 화씨 -> 섭씨
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) { // 섭씨 -> 화씨
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return NaN; // Return NaN for invalid inputs
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded;
  }

function Calculator(props) {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale("c");
  };

  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale("f");
  };

  // 화씨 온도가 입력되고있으면 섭씨온도로 변경하는 함수를 매개변수로 넣어 변환값을 받아 인풋태그에 입력
  // 섭씨 온도가 입력되고 있으면 그대로 인풋태그에 출력
  const celsius = 
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}

export default Calculator;
