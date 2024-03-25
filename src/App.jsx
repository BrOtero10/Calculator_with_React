import Button from "./components/Button";
import Visor from "./components/Visor";

function App() {
  return(
    <div className="container">
      <div className="calculator_body" style={{ background: "linear-gradient(#5c5b5a, #3a3938)" }}>
      <Visor inf="102497856"/>
      <br/>
        <div className="calculator_elements">
          <div className="line">
            <Button value="ON / OFF"/><Button value="ANS"/><Button value="C"/><Button value="AC"/>
          </div>
          <br/>
          <div className="line">
            <Button value="7"/><Button value="8"/><Button value="9"/><Button value="&divide;"/>
          </div>
          <br/>
          <div className="line">
            <Button value="4"/><Button value="5"/><Button value="6"/><Button value="&times;"/>
          </div>
          <br/>
          <div className="line">
            <Button value="1"/><Button value="2"/><Button value="3"/><Button value="&minus;"/>
          </div>
          <br/>
          <div className="line">
            <Button value="0"/><Button value="."/><Button value="+"/><Button value="="/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;