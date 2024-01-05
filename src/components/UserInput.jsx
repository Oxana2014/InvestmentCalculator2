import { useState } from "react";
import InputGroup from "./InputGroup";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    "initial-investment": 10000,
    "annual-investment": 1000,
    "expected-return": 6,
    duration: 10,
  });
  function handleInputs(input, value) {
setUserInput(prevUserInput => {
const currentUserInput = {...prevUserInput, [input] : value}
console.log(currentUserInput)
return currentUserInput
})
  }
  return (
    <div id="user-input">
      <InputGroup
        label="INITIAL INVESTMENT"
        id="initial-investment"
        value={userInput["initial-investment"]}
        onChange={handleInputs}
      />
      <InputGroup
        label="ANNUAL INVESTMENT"
        id="annual-investment"
        value={userInput["annual-investment"]}
        onChange={handleInputs}
      />
      <InputGroup
        label="EXPECTED RETURN"
        id="expected-return"
        value={userInput["expected-return"]}
        onChange={handleInputs}
      />
      <InputGroup
        label="DURATION"
        id="duration"
        value={userInput["duration"]}
        onChange={ handleInputs}
      />
    </div>
  );
}
