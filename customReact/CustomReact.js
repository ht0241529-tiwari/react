function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);

  // Set children content (text or HTML)
  if (typeof reactElement.children === 'string' || typeof reactElement.children === 'number') {
    domElement.innerHTML = reactElement.children;
  }

  // Set attributes skipping 'children'
  for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    if (reactElement.props[prop] != null) {
      domElement.setAttribute(prop, reactElement.props[prop]);
    }
  }

  container.appendChild(domElement);
}

// Usage remains same
const ReactElement = {
  type: 'a',
  props: {
    href: 'https://www.Google.com',
    target: '_blank',
  },
  children: 'Click here to visit example.com',
};

const maincontainer = document.querySelector('#root');
customRender(ReactElement, maincontainer);

// HTML Setup (pehla step)
// xml
// <!DOCTYPE html>
// <html>
// <body>
//   <div id="root"></div>  <!-- Yeh empty hai abhi -->
//   <script>
//     // Yahan code chalega
//   </script>
// </body>
// </html>
// Step 1: ReactElement Object Banta Hai
// javascript
// const ReactElement = {
//   type: 'a',                           // <a> tag banega
//   props: {
//     href: 'https://www.Google.com',    // link ka address
//     target: '_blank'                   // new tab mein khulega
//   },
//   children: 'Click here to visit example.com'  // link par text
// };
// Status: Object ready hai, DOM mein kuch nahi dikha abhi.

// Step 2: customRender Call Hota Hai
// javascript
// const maincontainer = document.querySelector('#root');  // <div id="root"></div>
// customRender(ReactElement, maincontainer);
// Step 3: Function Ke Andar Entry
// text
// customRender(reactElement, container) {
//   ↓
//   const domElement = document.createElement('a');  
//   // Ab domElement = <a></a> (empty anchor tag bana)
// Step 4: Children Check
// javascript
// if (typeof reactElement.children === 'string') {  // true (string hai)
//   domElement.innerHTML = 'Click here to visit example.com';
// }
// // Ab domElement = <a>Click here to visit example.com</a>
// Step 5: Props Loop (for loop chalti hai)
// text
// 1st iteration: prop = 'href' 
//   ≠ 'children', href = 'https://www.google.com' ≠ null
//   domElement.setAttribute('href', 'https://www.google.com')

// 2nd iteration: prop = 'target'
//   ≠ 'children', target = '_blank' ≠ null  
//   domElement.setAttribute('target', '_blank')

// 3rd iteration: prop = 'children' 
//   == 'children' → continue (skip ho gaya)
// Final domElement ab:

// xml
// <a href="https://www.Google.com" target="_blank">
//   Click here to visit example.com
// </a>
// Step 6: Container Mein Add
// javascript
// maincontainer.appendChild(domElement);
// // #root ke andar yeh <a> tag add ho gaya
// Final Browser Output
// xml
// <div id="root">
//   <a href="https://www.Google.com" target="_blank">
//     Click here to visit example.com
//   </a>
// </div>
// Result: Ab page par ek clickable Google link dikhega jo new tab mein khulega!

// Key Learning Points
// ReactElement = JS object (data)

// domElement = Real HTML element (browser mein dikhega)

// Props → setAttribute() se HTML attributes bante hain

// Children → innerHTML se text content banta hai

// Try karo: Browser console mein paste karke dekho, turant link ban jayega! 
