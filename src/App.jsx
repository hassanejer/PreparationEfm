import { Routes, Route } from "react-router-dom";
import Covid from "./Composants/Covid";
import Poids from "./Composants/Poids";
import Header from "./Composants/Header";



function App() {

  return(
  

    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/" element={} /> */}
        <Route path='/covid/:id' element={<Covid />} />
        <Route path='/poid' element={<Poids />} />
      </Routes>
    </div>

  )
  
}

export default App;
