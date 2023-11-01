export default function Avatar(props) {
  return (
    <>
      <img src={props.image} alt="" />
      {
        props.isNew && <span>New</span>
      }
    </>
  );
}