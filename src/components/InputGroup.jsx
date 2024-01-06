

export default function InputGroup({ label, id, value, onChange }) {
 
  function handleInput(event) {
    onChange(id, event.target.value);
  }
  return (
    <p >
      <label htmlFor={id}>{label}</label>
      <input type="number" id={id} required onChange={ handleInput} value={value} min='0' />
    </p>
  );
}
