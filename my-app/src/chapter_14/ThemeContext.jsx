import React from "react";

const ThemeContext = React.createContext(); // 초기값 설정 안 함 - Provider에서 설정할 예정
ThemeContext.displayName = "ThemeContext";

export default ThemeContext;