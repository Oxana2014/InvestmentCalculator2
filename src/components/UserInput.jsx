import InputGroup from "./InputGroup";

export default function UserInput() {
  return (
    <div 
     id="user-input"  
    // className="input-group "
    >
  <InputGroup label="INITIAL INVESTMENT" id="initial-investment"/>
 <InputGroup label="ANNUAL INVESTMENT" id="annual-investment" />
 <InputGroup label="EXPECTED RETURN" id="expected-return"/>
 <InputGroup label="DURATION" id="duration" />
  </div>
  );
}
