import "./App.css";

function App() {
  function handleClick() {
    alert("Button Clicked!");
  }
  function handleUser(name) {
    alert(name);
  }
  function handleChange(e) {
    console.log(e.target);
    console.log(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert("Form Submitted");
  }
  function handleMouse() {
    console.log("Mouse Over");
  }
  function ProductCard({ name }) {
    function addToCart() {
      alert(`${name} added to cart`);
    }

    return (
      <div>
        <h2>{name}</h2>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    );
  }
  function LikeButton() {
    return <button onClick={() => alert("Liked ❤️")}>Like</button>;
  }
  function Search() {
    function handleSearch(e) {
      console.log("Searching:", e.target.value);
    }

    return <input onChange={handleSearch} placeholder="Search..." />;
  }
  function Task1() {
    function display() {
      alert("Hello");
    }
    return <button onClick={display}>Click</button>;
  }
  function Task2() {
    function display(e) {
      console.log(e.target.value);
    }
    return <input type="text" onChange={display} />;
  }
  function Tak3(name) {
    alert(name);
  }
  return (
    <>
      <h1>Day6 of React</h1>
      <br />
      {/* BASIC onClick EVENT */}
      <button
        onClick={handleClick}
        style={{ width: "250px", margin: "20px auto" }}
      >
        Click Me
      </button>
      <br />
      {/* INLINE EVENT FUNCTION */}
      <button
        onClick={() => alert("Hello Indresh")}
        style={{ width: "250px", margin: "20px auto" }}
      >
        Click
      </button>
      <br />
      {/* PASS DATA IN EVENT */}
      <button
        onClick={() => handleUser("Indresh")}
        style={{ width: "250px", margin: "20px auto" }}
      >
        Show Name
      </button>
      <br />
      {/* onChange (INPUT HANDLING) */}
      <input type="text" onChange={handleChange} />
      <br />
      {/* onSubmit (FORM) */}
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
      <br />
      {/* MULTIPLE EVENTS (REAL UI) */}
      <div onMouseOver={handleMouse}>Hover me</div>
      <br />
      <ProductCard name="Apple" />
      <ProductCard name="Laptop" />
      <br />
      <LikeButton />
      <br />
      <Search />
      <br />
      <Task1 />
      <br />
      <Task2 />
      <br />
      <button onClick={() => Tak3("Indresh")}>Click Task3</button>
    </>
  );
}

export default App;
