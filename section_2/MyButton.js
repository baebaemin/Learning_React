function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true) },
        isClicked ? 'Clicked!' : 'Click here!'
    )
}

// 리액트 컴포넌트를 돔컨테이너에 렌더링하는 부분
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);