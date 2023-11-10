/**
 * <div id="parent">
 *   <div id="child">
 *     <h1>I'm h1 tag</h1>
 *     <h2>I'm h2 tag</h2>
 *   </div> 
 * </div>
 * 
 */ //const heading= React.createElement("h1", {id:"heading"}, "hello world from react");
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "i'm h2 tag")
]));
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.e6b9f917.js.map
