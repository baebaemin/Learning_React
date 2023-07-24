ReactDOM.render(<input value="hi" />, rootNode);

setTimeout(function() {
    ReactDOM.render(<input value={null} />, rootNode);
}, 1000);