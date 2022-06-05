
import './App.css';
import { Switch } from "@chakra-ui/core";
import { useContext } from 'react';
import { Themecontext } from './context/Themecontext';
// import { Light } from './components/Light';

function App() {

  const {theme,toggletheme} = useContext(Themecontext);
  return (
    <div className={`App ${theme==="light" ? "App":"Dark"}`}>
      <div style={{display:"flex",gap:"20px",paddingLeft:"100px"}}>
        <h1>My Dashboard</h1>
        <Switch onChange={toggletheme} style={{height:"20px",marginTop:"37px"}}/>
      </div>
      <div style={{width:"30%",height:"150px",border:"1px solid black"}}>
        <h3>Hii my name is shanshank</h3>
        <h4>my email is nawalerason@gmail.com</h4>
      </div>
      
    </div>
  );
}

export default App;
