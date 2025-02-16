# Learning JSX Under the Hood

A small project to understand how JSX works internally, based on the excellent article by Jason Miller: [WTF is JSX](https://jasonformat.com/wtf-is-jsx/).

## What I Learned

This project demonstrates the three main steps of JSX rendering:

1. **JSX to Virtual DOM**: The `h()` function (hyperscript) converts JSX syntax into plain JavaScript objects
   ```javascript
   <div id="foo">Hello!</div>
   // transforms into:
   {
     nodeName: "div",
     attributes: { id: "foo" },
     children: ["Hello!"]
   }
   ```

2. **Virtual DOM to Real DOM**: The `render()` function creates actual DOM elements without attaching them
   - Handles text nodes
   - Creates elements with correct attributes
   - Recursively processes children

3. **DOM Mounting**: Finally, the elements are attached to the actual document

## Key Takeaways
- JSX is just syntactic sugar for function calls
- No build step or `eval()` required for basic JSX understanding
- Simple implementation helps grasp React's core concepts

## Credits
Special thanks to [Jason Miller](https://jasonformat.com/wtf-is-jsx/) for the enlightening article that made JSX internals clear and approachable.

---
*This is a learning project to understand JSX internals and is not intended for production use.*
