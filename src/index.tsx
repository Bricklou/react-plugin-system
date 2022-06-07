import App from "./App";
import vendor from "./vendor";

window.React = vendor.React;
window.ReactDOM = vendor.ReactDOM;

// This line become React.createElement(...) -> React will be null if not defined on window.
const root = vendor.ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<App />);
