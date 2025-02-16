// converts JSX hmtl to object
function h(nodeName, attributes, ...args) {
    let children = args.length ? [].concat(...args) : null;
    return { nodeName, attributes, children };
}
// returns something like:
// {
//     nodeName: "div",
//     attributes: {
//         "id": "foo"
//     },
//     children: ["Hello!"]
// }

// creates actual DOM elements but without appending them
function render(vnode){
    // strings convert to #text nodes
    if(vnode.split) return document.createTextNode(vnode);

    // create DOM element with nodeName
    let n = document.createElement(vnode.nodeName);

    // copy attributes into new node
    let newAttributes = vnode.attributes || {};
    Object.keys(newAttributes).forEach(k => n.setAttribute(k, newAttributes[k]));

    // render (build) then append child nodes
    (vnode.children || []).forEach(c => n.appendChild(render(c)));

    return n;
}

// JSX => VDOM
let vdom = <div id="foo">Hello!</div>

// VDOM => DOM
let dom = render(vdom);

// add tree to body
document.body.appendChild(dom);