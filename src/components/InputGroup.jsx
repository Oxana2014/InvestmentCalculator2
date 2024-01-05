export default function InputGroup({label, id}) {
  return (
    <div
     className="input-group "
     >
      <label htmlFor={id}>{label}</label>
      <input type="number" id={id}/>
    </div>
  );
}
