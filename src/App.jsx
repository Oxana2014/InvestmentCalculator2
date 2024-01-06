import { useState } from "react";

import Header from "./components/Header";
 import UserInput from './components/UserInput'
 import ResultTable from "./components/ResultTable";
 import {calculateInvestmentResults } from "./util/investment"

function App() {
const [result, setResult] = useState([])
function calculateResult(userInput) {
const result = calculateInvestmentResults(userInput)
setResult(result)
}
  return (
    <>
      <Header />
      <main>
       <UserInput calculate={calculateResult} />
       < ResultTable result={result}/>
      </main>
    </>
  );
}

export default App;
