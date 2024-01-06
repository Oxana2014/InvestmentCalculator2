import InputGroup from "./InputGroup";

export default function UserInput({ userInput, onChangeInputs }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputGroup
          label="INITIAL INVESTMENT"
          id="initialInvestment"
          value={userInput["initialInvestment"]}
          onChange={onChangeInputs}
        />
        <InputGroup
          label="ANNUAL INVESTMENT"
          id="annualInvestment"
          value={userInput["annualInvestment"]}
          onChange={onChangeInputs}
        />
      </div>
      <div className="input-group">
        <InputGroup
          label="EXPECTED RETURN"
          id="expectedReturn"
          value={userInput["expectedReturn"]}
          onChange={onChangeInputs}
        />
        <InputGroup
          label="DURATION"
          id="duration"
          value={userInput["duration"]}
          onChange={onChangeInputs}
        />
      </div>
    </section>
  );
}
