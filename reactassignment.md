# React Theory Assignment

1. What is a JavaScript library? Explain with examples.

A JavaScript library is basically a collection of pre-written code that you can pull into your project to help you do things faster. Instead of writing everything from scratch, someone already figured out the hard parts and packaged them up for you to use.

Examples:
- React – helps you build UI components
- Lodash – gives you utility functions for arrays, objects, strings, etc.
- Axios – makes HTTP requests easier than using the native fetch API
- Chart.js – lets you build charts without doing all the math yourself

The key thing about a library is that the user is in control. You decide when to call it, how to use it, and what to do with the results. It doesn't take over your app — it just helps.



 2. What is a framework?

A framework is like a complete structure or skeleton for building an application. Unlike a library (which you call), a framework calls you — it sets the rules, the file structure, the flow, and you fill in the blanks.

Examples:
- Angular – a full front-end framework by Google
- *Next.js – a React-based framework for building full-stack web apps
- Django – a Python framework for building backend web apps
- Ruby on Rails – another backend framework

Frameworks are more opinionated. They tell you how to organise your files, how to route pages, how to handle data — basically, they make a lot of decisions for you.



 3. Explain the difference between a library and a framework with real-world analogies

Analogy 1 — The Kitchen:
A library is like having a set of kitchen tools (knife, blender, oven). You pick up the tools when you need them and cook however you want.

A framework is like working in a restaurant kitchen — there's already a system. There's a head chef (the framework), a set menu (rules), assigned stations, and you just follow the process.

Analogy 2 — Building a house:
A library is like buying pre-made bricks, pipes, and windows — you still design and build the house yourself.

A framework is like buying a house kit — the blueprint is already there, you just put it together following the instructions.

The technical way to say it: With a library, *you call the code*. With a framework, *the code calls you*. This is called Inversion of Control.



 4. Why is React classified as a library and not a framework?

React is called a library because it only handles one thing: building and rendering UI components. That's it.

It doesn't tell you how to:
- Fetch data from an API (you need Axios or fetch)
- Handle routing between pages (you need React Router)
- Manage global state (you need Redux or Zustand)
- Handle forms (you could use React Hook Form)

You have full control over how you structure your project and what other tools you bring in. React just takes care of the view layer. Because it doesn't force a complete structure on you, it's a library — not a framework.



 5. Why do developers use React? List and explain at least 5 reasons

1. Component-Based Architecture
React lets you break your UI into small, reusable pieces called components. Instead of writing one giant HTML file, you have a Navbar component, a Card component, a Footer component, etc. This makes your code cleaner and easier to manage.

2. Virtual DOM for Performance
React doesn't update the real browser DOM directly every time something changes. It first updates a lightweight copy called the Virtual DOM, figures out what actually changed, and then only updates that specific part in the real DOM. This makes UI updates really fast.

3. Reusability
Because everything is a component, you can reuse pieces across your entire app. Built a Button component? You can use it 50 times in your app without rewriting it. This saves a ton of time.

4. Large Ecosystem and Community
React has been around since 2013. There are thousands of libraries built specifically for React, tonnes of tutorials, answers on Stack Overflow for almost every problem, and a huge job market for it.

5. One-Way Data Flow
Data in React flows in one direction — from parent to child through props. This makes it much easier to understand where your data is coming from and debug issues, compared to frameworks where data can flow in multiple directions and get confusing.

6. React Native
Once you learn React for web, you can use React Native to build mobile apps for iOS and Android. The concepts are almost identical, so learning React once opens multiple doors.



 6. What does it mean when we say React is a Single Page Application (SPA)?

When we say React is an SPA, it means the browser only loads one HTML file for the whole app. When you click a link or navigate around the app, React doesn't ask the server for a new HTML page — instead, it dynamically swaps out the content on the page using JavaScript.

So the URL might change (e.g., from /home to /about), but the browser never actually reloads. React just removes the Home content and renders the About content in its place.



 7. How does a SPA differ from a traditional multi-page website?

| Traditional Multi-Page Website | Single Page Application (SPA) |
|||
| Every click sends a request to the server | JavaScript handles navigation in the browser |
| Browser fully reloads on every page | No full reload — content swaps dynamically |
| Server sends a new HTML file each time | Only one HTML file is ever loaded |
| Slower navigation (network round-trips) | Faster navigation after initial load |
| Example: old school news sites | Example: Gmail, Facebook, Twitter |

The trade-off is that SPAs can have a slightly slower initial load (because they load a lot of JS upfront), but after that, the navigation feels instant.



 8. What problem does React solve compared to vanilla JavaScript?

With vanilla JavaScript, managing the UI gets really messy as your app grows. Here's why:

- You have to manually find DOM elements using document.getElementById() or querySelector()
- You have to manually update the DOM every time your data changes
- There's no structure — your HTML, CSS, and JS logic are all tangled together
- Code reuse is hard — if you want the same UI element in two places, you end up copying code

React solves this by:
- Letting you describe what the UI should look like based on state (React handles the actual DOM updates)
- Organising code into components that can be reused
- Using a Virtual DOM so updates are efficient
- Making your code predictable — same state = same UI, always

In short, React brings structure and efficiency to front-end development at scale.



 SECTION B: React Fundamentals

 1. What is a component in React?

A component is basically a reusable piece of your UI. Think of it like a custom HTML element that you build yourself. It can have its own logic, its own styling, and it returns JSX (which looks like HTML) that gets displayed on the screen.

For example, instead of writing the same navbar code on every page, you create a Navbar component once and use <Navbar /> wherever you need it.

Every React app is built by combining components together — big ones made of smaller ones.



 2. Explain the difference between functional components and class components

Functional Components (the modern way):
- Just a regular JavaScript function that returns JSX
- Use hooks like useState and useEffect to manage state and side effects
- Simpler, cleaner, and easier to read
- This is what everyone uses today

jsx
function Welcome() {
  return <h1>Hello!</h1>;
}


Class Components (the old way):
- Uses ES6 class syntax and extends React.Component
- Has a render() method that returns JSX
- Uses this.state and lifecycle methods like componentDidMount()
- More verbose and harder to read

jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello!</h1>;
  }
}


Today, class components are mostly legacy. You'll still see them in old codebases, but new projects almost always use functional components.



 3. What is JSX and why is it used?

JSX stands for JavaScript XML. It's a syntax extension that lets you write what looks like HTML directly inside your JavaScript code.

jsx
const element = <h1>Hello, world!</h1>;


Without JSX, you'd have to write:
javascript
const element = React.createElement('h1', null, 'Hello, world!');


That gets ugly fast, especially for complex UIs. JSX is just syntactic sugar — the browser doesn't understand JSX, so Babel compiles it into regular JavaScript before it runs.

JSX is used because it makes the code much more readable and intuitive when you're building UI — it visually looks like what you're building.



 4. What are the rules of writing JSX?

1. Return a single root element — You can only return one top-level element. If you need multiple, wrap them in a <div> or use a Fragment (<>...</>).

2. All tags must be closed — Even self-closing tags like <img>, <input>, <br> must be written as <img />, <input />, <br />.

3. Use className instead of class — Because class is a reserved keyword in JavaScript.

4. Use htmlFor instead of for — Same reason, for is reserved.

5. JavaScript expressions go inside curly braces — {2 + 2}, {name}, {isLoggedIn ? "Yes" : "No"}

6. Attributes use camelCase — onClick not onclick, tabIndex not tabindex, backgroundColor not background-color.

7. Comments use {/* comment */} — Not <!-- comment -->.



 5. What are props? How are they different from state?

Props (short for properties) are how you pass data from a parent component to a child component. They're like arguments you pass to a function — the child receives them and uses them, but it cannot modify them. Props are read-only.

jsx
// Parent passes a prop
<Greeting name="Jasper" />

// Child receives and uses it
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}


State is data that lives inside a component and can change over time. When state changes, React re-renders the component to show the updated UI.

| | Props | State |
||||
| Where it comes from | Parent component | Inside the component itself |
| Can it change? | No (read-only) | Yes |
| Who controls it? | Parent | The component itself |
| What triggers re-render? | Parent re-renders | setState / useState setter |



 6. What is state in React?

State is data that a component manages internally and that can change over time. It's what makes a React app interactive — when state changes, React automatically re-renders the component and updates the UI.

For example, think of a like button. The number of likes is state — it starts at 0, and every time the button is clicked, the state updates and the displayed number changes.

jsx
const [likes, setLikes] = useState(0);


State is what makes React dynamic. Without state, every component would just be static HTML.



 7. Explain how useState works internally (conceptually, not code)

When you call useState with an initial value, React:

1. Creates a memory slot for that piece of state somewhere in React's internal memory (not inside the component function itself, because that gets re-created every render).

2. Returns two things: the current value of that state, and a function to update it.

3. When you call the setter function (like setCount), React doesn't immediately change the state. Instead, it schedules a re-render.

4. On the next render, React calls your component function again. This time, instead of giving you the initial value, it gives you the updated value from its memory.

5. React compares the new Virtual DOM output with the previous one, figures out what changed, and updates only that part of the real DOM.

The key insight is: state lives outside the component function in React's memory. Every render is just React calling your function again with the current state values.



 8. What is event handling in React? How is it different from vanilla JS?

Event handling in React is how you respond to user interactions — clicks, input changes, form submissions, hover events, etc.

In React, you attach event handlers directly in JSX using camelCase:

jsx
<button onClick={handleClick}>Click me</button>
<input onChange={handleChange} />


Differences from vanilla JS:

| Vanilla JavaScript | React |
|||
| element.addEventListener('click', fn) | onClick={fn} directly in JSX |
| Uses lowercase: onclick, onchange | Uses camelCase: onClick, onChange |
| Often have to manually clean up listeners | React manages listeners for you |
| You target DOM elements by ID/class | You attach events declaratively in JSX |
| Event handlers are strings in HTML: onclick="fn()" | Event handlers are function references: onClick={fn} |

React uses Synthetic Events under the hood — these are wrapper objects that normalise browser differences, so your events work the same across all browsers.



 9. What is conditional rendering? Provide 2 different methods of doing it

Conditional rendering means showing different UI based on some condition — like only showing a logout button if the user is logged in.

Method 1 — Ternary Operator:
jsx
return (
  <div>
    {isLoggedIn ? <LogoutButton /> : <LoginButton />}
  </div>
);


Method 2 — Logical AND (&&):
jsx
return (
  <div>
    {isAdmin && <AdminPanel />}
  </div>
);

This one is good when you only want to show something (or nothing). If isAdmin is false, nothing renders. If it's true, <AdminPanel /> renders.



 10. What are lists and keys in React? Why are keys important?

When you have an array of data and you want to render each item as a component or HTML element, you use .map() to loop through the array and return JSX for each item.

jsx
const fruits = ['Apple', 'Mango', 'Orange'];

return (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);


Keys are special props that you give to list items so React can tell them apart. Keys must be unique among siblings.

Why keys are important:
When the list updates (an item is added, removed, or reordered), React needs to figure out which items changed. Without keys, it has to re-render the entire list. With keys, React can identify exactly which item changed and only update that one.

Using array index as a key is okay for static lists, but for dynamic lists (where items can be added/removed/reordered), you should use a unique ID from your data.



 11. What is a controlled component?

A controlled component is an input element (like <input>, <select>, <textarea>) whose value is controlled by React state. Instead of letting the DOM manage the input's value, React manages it.

jsx
const [name, setName] = useState('');

return (
  <input
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
);


Here, the input's value is always equal to the name state. When the user types, onChange updates the state, which updates the input. React is the single source of truth.

This is different from an uncontrolled component, where you'd use a ref to access the DOM directly and React doesn't track the value.

Controlled components are preferred because they make validation, formatting, and form submission much easier.



 12. What is useEffect and what problem does it solve?

useEffect is a hook that lets you run side effects in your components. A side effect is anything that reaches outside the component — like:

- Fetching data from an API
- Updating the document title
- Setting up a timer or interval
- Subscribing to an event
- Interacting with localStorage

The problem it solves: React's render function is supposed to be pure (same input = same output, no side effects). But real apps need to do things like fetch data when a component loads. useEffect gives you a safe, controlled place to do those things *after* the component renders.

jsx
useEffect(() => {
  // This runs after the component renders
  fetchUserData();
}, [userId]);




 13. Explain what happens when the dependency array in useEffect is empty, has values, or is omitted

Empty array []:
jsx
useEffect(() => {
  // Runs ONCE — only when the component first mounts
  fetchData();
}, []);

Think of it like componentDidMount — runs once when the component appears on screen.



Has values [value1, value2]:
jsx
useEffect(() => {
  // Runs on mount AND whenever userId or filter changes
  fetchUserData(userId, filter);
}, [userId, filter]);

React watches those values. Every time any of them changes, the effect runs again.



No array (omitted):
jsx
useEffect(() => {
  // Runs after EVERY render
  console.log('I run on every render!');
});

This runs after every single render. This is usually not what you want and can cause performance issues or infinite loops if not careful.



 SECTION C: React Internals

 1. What is the Virtual DOM?

The Virtual DOM (VDOM) is a lightweight JavaScript object that represents what the real DOM should look like. It lives in memory and mirrors the structure of the actual browser DOM.

Instead of directly manipulating the real DOM (which is slow), React first makes all changes to the Virtual DOM (which is fast — it's just a JS object). Then it compares the new VDOM with the previous VDOM and figures out what actually changed. Only those specific changes are applied to the real DOM.

Think of it like making edits to a draft document before publishing the final version — you don't reprint the whole thing for every small change.



 2. How does React update the UI efficiently?

React updates the UI through a process called Reconciliation, which involves three steps:

1. Render phase: When state or props change, React calls your component function again and generates a new Virtual DOM tree.

2. Diffing: React compares the new Virtual DOM with the previous Virtual DOM to find the differences (the "diff"). This algorithm runs in O(n) time and is very optimised.

3. Commit phase: React takes only the differences it found and applies those minimal changes to the real browser DOM. It doesn't touch anything that didn't change.

This process is what makes React fast — it minimises real DOM operations, which are the expensive part.



 3. Explain the concept of re-rendering in React

A re-render happens when React calls your component function again to produce a new Virtual DOM output. React then compares it to the previous output and updates the real DOM if needed.

Re-rendering is not the same as the browser painting/repainting — React can re-render a component internally without necessarily changing anything visible on screen (if the output is the same).

Re-renders are generally fast and not something to fear — React is designed for it. The key is that re-renders don't mean the entire DOM gets updated, just that React re-runs your component function and checks what (if anything) changed.



 4. What triggers a re-render?

A component re-renders when:

1. State changes — You call a state setter function (setCount(newValue))
2. Props change — The parent component passes new prop values
3. Parent re-renders — By default, when a parent re-renders, all its children re-render too (even if their props didn't change)
4. Context changes — If the component consumes a React Context and the context value changes
5. A hook update — Like useReducer dispatch being called

Note: Calling a setter function with the same value as the current state will NOT trigger a re-render (React is smart enough to bail out).



 5. What are the advantages of breaking your app into smaller components?

1. Easier to understand — Small components do one thing. It's easier to read a 20-line component than a 500-line one.

2. Reusability — You can use the same component in multiple places without duplicating code.

3. Easier to test — Small, focused components are much easier to write unit tests for.

4. Easier to debug — When something breaks, you can quickly isolate which component is the problem.

5. Team collaboration — Multiple developers can work on different components without stepping on each other's code.

6. Better performance — Smaller components can be optimised individually (e.g., wrapped in React.memo to prevent unnecessary re-renders).



 6. What is component reusability and why is it important?

Component reusability means building components in a way that they can be used in multiple places across your app without being rewritten.

For example, a Card component that accepts title, image, and description as props can be used on a product listing page, a blog page, and a team members page — all with different content but the same structure and styling.

Why it's important:
- DRY (Don't Repeat Yourself) — Write once, use everywhere
- Consistency — The same component looks and behaves the same across the app
- Maintainability — If you need to fix a bug or update the design, you do it in one place and it propagates everywhere
- Faster development — You're not rebuilding the same UI over and over



 SECTION D: Project Structure & Files

 1. What is the role of main.jsx in a React app?

main.jsx is the entry point of the React application. It's the first JavaScript file that runs. Its job is to:

1. Import React and ReactDOM
2. Import the root App component
3. Find the <div id="root"> element in index.html
4. Mount (render) the entire React app into that div

jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


Without main.jsx, React doesn't know where to start or where to inject the app into the HTML.



 2. What is the role of App.jsx?

App.jsx is the root component of the application — the top-level component that everything else lives inside. It's usually where you:

- Set up your routes (using React Router)
- Include global layouts (like a Navbar or Footer that should appear on every page)
- Import and render other top-level components

Think of App.jsx as the container that holds the entire application together. main.jsx renders App, and App renders everything else.



 3. Explain how main.jsx and App.jsx are connected

main.jsx imports App and renders it into the DOM:


index.html (has <div id="root">)
  ↓
main.jsx (finds #root and renders <App /> into it)
  ↓
App.jsx (the root component, renders the whole UI tree)
  ↓
All other components...


The relationship is: main.jsx is the launcher, and App.jsx is the application. main.jsx calls App, and App handles everything from there.



 4. What is the purpose of the components folder?

The components folder is where you store all your reusable UI components — things like Navbar.jsx, Footer.jsx, Button.jsx, Card.jsx, etc.

Keeping components in their own folder:
- Makes the project easier to navigate
- Separates concerns (components vs pages vs utilities)
- Makes it clear which files are reusable building blocks



 5. What is the purpose of the assets folder?

The assets folder is where you store static files that your app needs — mainly images, icons, fonts, and SVG files.

By keeping these in one dedicated folder, you know exactly where to look when you need an image, and imports are consistent across your project.



 6. Why do we store images inside the assets folder instead of random locations?

1. Organisation — You always know where your images are
2. Build optimisation — Vite (or webpack) processes files in assets — it can optimise images, hash filenames for caching, and bundle them correctly
3. Consistent imports — Your import paths are predictable and easy to manage
4. Avoid broken paths — If you put images in random places, paths can break when the app is built or deployed

If you store images outside of assets (like in public/), they won't be processed by the build tool and some optimisations won't apply.



 7. How do you properly import and use an image in React?

jsx
// Step 1: Import the image at the top of the file
import logo from '../assets/logo.png';

// Step 2: Use it as the src attribute
function Header() {
  return <img src={logo} alt="Company Logo" />;
}


This is the correct way because Vite processes the import and replaces it with the correct optimised URL at build time. You should never hardcode image paths as strings like src="./assets/logo.png" — that can break after building.



 SECTION E: NPM & Project Setup

 1. What is npm?

npm stands for Node Package Manager. It's a tool that comes with Node.js and lets you:
- Install packages (third-party libraries) into your project
- Manage dependencies (which packages your project needs)
- Run scripts defined in your package.json

It's basically the app store for JavaScript. There are over a million packages available on the npm registry at [npmjs.com](https://npmjs.com).



 2. What is the purpose of package.json?

package.json is the configuration file for your Node.js/JavaScript project. It tells npm everything it needs to know about your project:

- What your project is called and what version it is
- Which packages (dependencies) your project needs
- What scripts you can run (like npm run dev)
- Metadata like description and author

Every Node.js/React project has one. It's the first thing npm looks at.



 3. List and explain at least 5 important fields inside package.json

json
{
  "name": "my-react-app",
  "version": "1.0.0",
  "scripts": { "dev": "vite", "build": "vite build" },
  "dependencies": { "react": "^18.2.0" },
  "devDependencies": { "vite": "^5.0.0" }
}


1. name — The name of your project. Must be lowercase and URL-safe. Used if you publish to npm.

2. version — The current version of your project, using Semantic Versioning (major.minor.patch e.g. 1.0.0).

3. scripts — Custom commands you can run with npm run <script-name>. This is where dev, build, test, etc. are defined.

4. dependencies — Packages your app needs to run in production (e.g., react, react-dom, axios).

5. devDependencies — Packages only needed during development (e.g., vite, eslint, prettier). These are not included in the production build.

6. description — A short description of what the project does.

7. author — Who made the project.



 4. What is package-lock.json and why is it important?

package-lock.json is an automatically generated file that records the exact version of every single package (and their dependencies' dependencies) that was installed in your project.

It's important because:
- It locks your dependencies to specific versions
- It ensures everyone on the team (and your deployment server) installs the exact same versions
- Without it, npm install might install slightly different patch versions for different people, which can cause "it works on my machine" bugs

You should commit package-lock.json to version control but never manually edit it.



 5. What is the difference between package.json and package-lock.json?

 package.json                 package-lock.json 

 Written by the developer        Auto-generated by npm 
 Lists approximate versions 
(e.g., ^18.0.0 means 18.x.x)   Records the exact version installed (e.g., 18.2.0) 
 Describes what your project 
needs                            Records exactly what was installed 
 You edit it manually            Never edit it manually 
 Committed to git                Also committed to git 
 
In short: package.json says "I need React version 18 or higher". package-lock.json says "I installed exactly React 18.2.0 on this date".



 6. What does npm install do? What is the difference between npm install and npm install <package-name>?

npm install (no package name):
- Reads package.json
- Downloads all listed dependencies and devDependencies
- Puts them all in the node_modules folder
- Used when you first clone a project or want to reinstall all packages

npm install <package-name> (with a package name):
- Downloads that specific package from the npm registry
- Adds it to dependencies in package.json
- Also updates package-lock.json
- Example: npm install axios installs Axios and adds it as a dependency

Add --save-dev or -D to add to devDependencies instead:

npm install vite --save-dev




 7. What does npm run do?

npm run executes scripts that are defined in the scripts section of package.json.

json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}


- npm run dev → runs the development server
- npm run build → creates a production build
- npm run preview → previews the production build locally

npm run is just npm's way of running your custom shortcut commands.



 8. How do you know which command starts your React app?

Look inside package.json at the scripts section. Whichever script is labelled dev or start is the one that launches the dev server.

For a Vite project it's usually:

npm run dev


For Create React App projects it's usually:

npm start


The README file of a project usually also tells you how to run it.



 9. What is the role of the scripts section in package.json?

The scripts section lets you define shortcut commands for common tasks in your project. Instead of remembering and typing a long command like ./node_modules/.bin/vite --host --port 3000, you can just type npm run dev.

It also standardises commands across a team — everyone runs the same scripts, with the same flags, every time.



 10. Install any npm package of your choice and explain what it does, how you installed it, and where it appears

Package chosen: axios

What it does:
Axios is an HTTP client library for making requests to APIs (GET, POST, PUT, DELETE, etc.). It's simpler and more powerful than the native fetch API — it automatically parses JSON responses, handles errors more gracefully, and supports request cancellation and interceptors.

How I installed it:
bash
npm install axios


Where it appears:
1. In node_modules/axios/ — the actual package code lives here
2. In package.json under "dependencies":
   json
   "dependencies": {
     "axios": "^1.6.0"
   }
   
3. In package-lock.json with the exact version and its own dependency tree



 SECTION F: Tools & Environment

 1. What is Vite?

Vite (pronounced "veet", French for "fast") is a modern build tool and development server for JavaScript/front-end projects. It was created by Evan You (the creator of Vue.js) and is now very popular in the React world too.

Vite uses ES modules natively in the browser during development, which makes it extremely fast — it doesn't need to bundle your entire app every time you make a change.



 2. What is a build tool?

A build tool is a program that transforms and bundles your source code into files that browsers can understand and efficiently serve in production.

Build tools typically:
- Bundle many JavaScript files into fewer files
- Transpile modern JS (JSX, TypeScript, ES2022+) into browser-compatible code
- Minify/compress CSS and JS to make files smaller
- Optimise images and other assets
- Generate cache-busting filenames

Examples: Vite, Webpack, Parcel, Rollup



 3. Why do we use build tools like Vite in React?

1. JSX needs to be compiled — Browsers don't understand JSX. Vite transforms JSX into regular JavaScript.

2. ES Modules and bundling — In production, you want as few HTTP requests as possible. Vite bundles your files together.

3. Hot Module Replacement (HMR) — When you save a file, Vite instantly updates just that module in the browser without a full page reload. This makes development super fast.

4. TypeScript/CSS preprocessing — Vite handles TypeScript, SCSS, and other preprocessors out of the box.

5. Production optimisation — When you run npm run build, Vite produces a highly optimised set of files with minification, tree-shaking (removing unused code), and code splitting.



 4. What is the difference between a development server and a web server?

 Development Server                               Web Server 

 Used during development (locally)                Used in production (live on the internet) 
 Provides HMR (Hot Module Replacement)            Serves static files, handles real user traffic 
 Serves unminified, readable code                 Serves minified, optimised production build 
 Usually runs on localhost:5173 or similar        Runs on a real domain (e.g., example.com) 
 Examples: Vite dev server, npm start             Examples: Nginx, Apache, Vercel, Netlify 
 Not meant for production use                     Designed for performance and security at scale 



 5. What happens when you run your React app locally?

When you run npm run dev:

1. Vite starts a development server on localhost (usually port 5173)
2. Vite reads your main.jsx (entry point) and resolves all imports
3. Your browser requests the page from localhost
4. Vite serves index.html which includes a <script type="module"> pointing to your entry file
5. React mounts — main.jsx runs, finds the <div id="root">, and renders <App /> into it
6. Your components render and you see the UI
7. HMR is active — if you save a file, Vite pushes the update to the browser instantly without reloading the whole page

Everything runs on your machine. No internet connection needed (after packages are installed).



 SECTION G: ENV & GIT

 1. What is an environment variable (.env)?

An environment variable is a variable defined outside your code that provides configuration values to your app. They live in a .env file at the root of your project.

In a Vite React project, environment variables must start with VITE_ to be accessible in the browser:


VITE_API_KEY=abc123
VITE_BASE_URL=https://api.example.com


You access them in your code like this:
javascript
const apiKey = import.meta.env.VITE_API_KEY;




 2. Why do we use .env files in projects?

1. Security — You don't want sensitive values (API keys, passwords, secrets) hardcoded in your source code, especially if your code is on GitHub where anyone can see it.

2. Flexibility — Different environments (development, staging, production) can have different values. Your dev .env might point to a local database; your production .env points to the live database.

3. Portability — New team members can set up their own environment by filling in a .env file based on a .env.example template.



 3. Give examples of things that should go inside .env

- API keys: VITE_STRIPE_PUBLIC_KEY=pk_test_...
- Base URLs: VITE_API_BASE_URL=https://api.myapp.com
- Firebase config values
- Third-party service tokens (Cloudinary, Supabase, etc.)
- Feature flags: VITE_ENABLE_DARK_MODE=true
- Database connection strings (in backend projects)

Things that should NOT go in .env: passwords for user accounts, private keys that should stay on the server.



 4. What is .gitignore?

.gitignore is a file that tells Git which files and folders to ignore and not include when you commit to a repository.

Any file or folder listed in .gitignore will not be tracked by Git — it won't be staged, committed, or pushed to GitHub.


node_modules/
.env
dist/




 5. Why is node_modules added to .gitignore?

node_modules contains all your installed packages. It can be hundreds of megabytes or even gigabytes in size and contain thousands of files.

There's no need to push it to GitHub because:
- Anyone who clones your repo can just run npm install and their machine will download and install the exact same packages using package.json and package-lock.json
- It would make your repo incredibly slow to clone and push
- It would bloat your repository unnecessarily



 6. What are other files/folders that should be ignored?


node_modules/       # Dependencies (too large, easily regenerated)
.env                # Sensitive environment variables
.env.local          # Local overrides
dist/               # Production build output (generated, not source)
build/              # Same as above for CRA projects
.DS_Store           # Mac OS system files (useless noise)
*.log               # Log files
.vscode/            # Editor settings (optional, team preference)
coverage/           # Test coverage reports




 7. What are the risks of not using .gitignore properly?

1. Exposing secrets — If you push .env to a public GitHub repo, your API keys are visible to everyone. Bad actors can steal them and use them (running up bills, accessing private data, etc.)

2. Huge repo size — Pushing node_modules makes your repo massive, slows down cloning, and wastes storage.

3. Messy commit history — Unignored log files, build artifacts, and OS files clutter your commits with irrelevant noise.

4. Security breaches — Leaked database credentials or private keys can lead to serious security incidents, data loss, or financial damage.

5. Merge conflicts — Auto-generated files getting committed causes unnecessary conflicts between team members.



 SECTION H: Routing

 1. What is client-side routing?

Client-side routing is when the browser handles navigation without asking the server for a new page. Instead of the server sending a completely new HTML document when you click a link, JavaScript intercepts the click, updates the URL in the browser bar, and renders the appropriate component.

The server is never actually contacted for navigation — only the initial page load and any API calls.



 2. What is React Router?

React Router is the most popular routing library for React. It gives you the tools to create a multi-page experience inside your SPA — different "pages" (components) are shown for different URLs.

It handles:
- Matching URLs to components
- Navigating between routes without page reloads
- Nested routes
- Dynamic routes (e.g., /users/:id)
- Redirects and 404 pages

Install it with:
bash
npm install react-router-dom




 3. Why do we need routing in React?

Without routing, a React app can only show one thing. Routing lets you:

- Show different pages for different URLs (/home, /about, /contact)
- Create navigation that feels natural to users (they can use browser back/forward buttons)
- Share links with other people that go directly to specific pages
- Build complex apps with many views while keeping the SPA performance benefits

Without routing, your app would just be one component with conditional rendering hacks — not scalable and not user-friendly.



 5. How is routing different from traditional page navigation?

| Traditional Navigation | React Router (Client-Side) |
|||
| Browser sends request to server | JavaScript handles it in the browser |
| Server sends back a new HTML file | React renders a new component |
| Full page reload (flash of white) | Instant — no reload |
| Network required for each navigation | No network needed for navigation |
| History is managed by server | History is managed by the browser's History API |



 6. What is the purpose of <BrowserRouter>, <Routes>, and <Route>?

<BrowserRouter>:
The wrapper that enables routing for your entire app. It connects React Router to the browser's URL and History API. It typically wraps your entire <App /> component.

jsx
<BrowserRouter>
  <App />
</BrowserRouter>


<Routes>:
A container that holds all your <Route> definitions. It looks at the current URL and renders the first matching <Route>. Only one <Route> renders at a time.

<Route>:
Defines a single route — it maps a URL path to a component. When the URL matches the path, the corresponding element is rendered.

jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>




 7. What is the difference between <a> tag and <Link> in React?

| <a> tag (HTML) | <Link> (React Router) |
|||
| Causes a full page reload | No page reload — client-side navigation |
| Sends a new request to the server | JavaScript handles the navigation |
| Resets all React state | React state is preserved |
| Native HTML element | Component from react-router-dom |
| href="/about" | to="/about" |

Use <a> for: External links (to other websites)

Use <Link> for: Internal navigation within your React app

Using <a> inside a React SPA will cause the entire app to reload, which defeats the purpose of building an SPA. Always use <Link> for internal navigation.

jsx
// Wrong for internal links
<a href="/about">About</a>

// Correct for internal links
import { Link } from 'react-router-dom';
<Link to="/about">About</Link>




