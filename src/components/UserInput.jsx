import { useState } from "react";
import InputGroup from "./InputGroup";

export default function UserInput({calculate}) {
  const [userInput, setUserInput] = useState({
    "initialInvestment": 10000,
    "annualInvestment": 1000,
    "expectedReturn": 6,
    duration: 10,
  });
  function handleInputs(input, value) {
setUserInput(prevUserInput => {
const currentUserInput = {...prevUserInput, [input] : value}
console.log(currentUserInput)
calculate(currentUserInput)
return currentUserInput
})

  }
  return (
    <section id="user-input">
    <div className="input-group">
      <InputGroup
        label="INITIAL INVESTMENT"
        id="initialInvestment"
        value={userInput["initialInvestment"]}
        onChange={handleInputs}
      />
      <InputGroup
        label="ANNUAL INVESTMENT"
        id="annualInvestment"
        value={userInput["annualInvestment"]}
        onChange={handleInputs}
      />
      </div >
      <div className="input-group">
      <InputGroup
        label="EXPECTED RETURN"
        id="expectedReturn"
        value={userInput["expectedReturn"]}
        onChange={handleInputs}
      />
      <InputGroup
        label="DURATION"
        id="duration"
        value={userInput["duration"]}
        onChange={ handleInputs}
      />
    </div>
    </section>
  );
}
