# **👉 JSX (JavaScript XML)**

This is the most important concept after components.
Let’s break it down clearly and simply.

---

# ✅ **1. What is JSX?**

JSX allows you to write **HTML inside JavaScript**.

Example:

```jsx
const element = <h1>Hello JSX!</h1>;
```

Without JSX, you'd write this ugly code:

```javascript
const element = React.createElement("h1", null, "Hello JSX!");
```

So, JSX just makes UI code **easy and readable**.

---

# ✅ **2. Basic JSX Rules**

### **Rule 1: Only ONE parent element**

This ❌ is not allowed:

```jsx
return <h1>Hello</h1>
<p>World</p>
```

You must wrap in a single parent:

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
```

Or use Fragment:

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);
```

---

### **Rule 2: Use `className` instead of `class`**

HTML uses `class`, but JSX uses:

```jsx
<div className="box"></div>
```

---

### **Rule 3: JavaScript inside JSX uses `{ }`**

Example:

```jsx
const name = "Engineer";

return <h1>Hello {name}</h1>;
```

You can put:

* variables
* functions
* expressions

Example:

```jsx
return <p>2 + 3 = {2 + 3}</p>;
```

---

# ✅ **3. JSX Examples**

### Example 1: Variables + JSX

```jsx
const age = 25;

return <p>Your age is {age}</p>;
```

---

### Example 2: Function inside JSX

```jsx
function greet() {
  return "Welcome!";
}

return <h2>{greet()}</h2>;
```

---

### Example 3: Using conditional expressions

```jsx
const isLoggedIn = true;

return <h1>{isLoggedIn ? "Logged In" : "Guest"}</h1>;
```

---

# ⭐ **4. Your Task**

Inside `App.jsx`, write JSX that shows:

* Your name
* Today's date
* A simple calculation
* A message using a function

---


