

export default function InputGroup({ label, id, value, onChange }) {
 
  function handleInput(event) {
    onChange(id, event.target.value);
  }
  return (
    <div className="input-group ">
      <label htmlFor={id}>{label}</label>
      <input type="number" id={id} onChange={ handleInput} value={value} min='0' />
    </div>
  );
}
