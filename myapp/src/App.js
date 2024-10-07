import "./style.css"

function App() {
  return (
    <div className="App">
     <form  className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" id="item"/>
      </div>
      <button className="btn">Add</button>
    </form>
    <h1 className="header"> TODO List</h1>
    </div>
  );
}

export default App;
