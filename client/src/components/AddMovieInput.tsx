interface Props {
  type: string;
  placeHolder: string;
  onChange: any;
}

function AddMovieInput({ type, placeHolder, onChange }: Props) {
  return (
    <input
      style={{ height: "4vh", width: "14vw", border: "1px solid black", borderRadius: "20px", padding: "2%" }}
      type={type}
      placeholder={placeHolder}
      onChange={onChange}
    />
  );
}

export default AddMovieInput;
