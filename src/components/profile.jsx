import Avatar from './Avata';


export default function Profile(props) {
  return(
    <div className="profile">
      <Avatar image = {props.image} isNew = {props.isNew}/>
      <h1>{props.name}</h1>
      <p>{props.title}</p>
    </div>
  );
}
// export default function Profile({image,name,title}) {
//   return(
//     <div className="profile">
//       <img src={image} alt="" />
//       <h1>{name}</h1>
//       <h1>{title}</h1>
//     </div>
//   );
// }
