import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10,
  });
  function handleInputs(input, value) {
    setUserInput((prevUserInput) => {
      const currentUserInput = { ...prevUserInput, [input]: value };
      // console.log(currentUserInput);
      return currentUserInput;
    });
  }

  return (
    <>
      <Header />
      <main>
        <UserInput userInput={userInput} onChangeInputs={handleInputs} />
        <ResultTable userInput={userInput} />
      </main>
    </>
  );
}

export default App;
