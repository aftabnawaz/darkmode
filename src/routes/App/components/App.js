import React from "react";
import Toggle from "./Toggle/toggle";
import useDarkMode from "./use-dark-mode";
import useUserData from "./use-user-data";
import "../styles/_app.scss";
import Header from "./Navigation/Header";

function App() {  
  const [isDarkMode, setDarkModeee] = useDarkMode(false);
  const [userData, setUserData] = useUserData("");
  const [state, setState] = React.useState({ name: "", email: "" })

  function handleChange(evt) {
    const { name, value} = evt.target;
    setState({
      ...state,
      [name]: value
    });
  }

  function handleSave(evt) {    
    const data = { name: state.name, email: state.email };
    setUserData(data);
    alert('User data is saved')
  }

  function handleClear(evt) {
    setState({ ...state, name: "", email: "" });    
    setUserData("");
  }

  return (
    <div className="app">      
      <Header/>
      <div className="level">
        <div>
          <h1 className="title">Dark Mode</h1>
        </div>
        <Toggle darkMode={isDarkMode} setDarkMode={setDarkModeee} />
      </div>

      <div className="columns">
        <div className="column">
          <p>
            Lollipop powder powder. Cotton candy caramels chupa chups halvah
            muffin caramels apple pie topping cake. Topping chocolate bar pastry
            chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar
            plum. Chocolate bar lollipop candy canes. Biscuit croissant apple
            pie pudding caramels wafer tart tootsie roll macaroon. Croissant
            tiramisu chocolate bar carrot cake lemon drops halvah.
          </p>
        </div>
        <div className="column">
          <p>
            Marshmallow tiramisu liquorice bear claw chocolate bar bear claw
            tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops
            marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart.
            Pudding sugar plum chocolate cake cake biscuit pastry pastry
            chocolate bar tart. Lemon drops dessert gummies icing.
          </p>
        </div>
      </div>

      <div className="field">
        <div className="control">          
          <input
            name="name"
            value={state.name}
            className="input"
            type="text"            
            placeholder="Name"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input name="email" value={state.email} className="input" type="email" placeholder="Email" onChange={handleChange} />
        </div>
      </div>

      <section className="section">
        <div className="buttons level-right">
          <button className="button is-primary" onClick={handleSave}>Save</button>
          <button className="button is-link" onClick={handleClear}>Clear</button>         
        </div>
      </section>
      
    </div>
  );
}

export default App;
