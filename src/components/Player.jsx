import { useState } from "react";

export default function Player({ initialname, symbol , isActive ,onChangeName}) {
   const [playerName,setPlayername] =useState(initialname);
  const [isEditing, setisEditing] = useState(false);
  function handleEditClick() {
    setisEditing((Editing) => !Editing);
if(isEditing){
    onChangeName(symbol,playerName)

}

}
  function handleChange(event){
setPlayername(event.target.value);
  }
  let editableplayer = <span className="player-name">{playerName}</span>;
//   let btnCaption = "Edit";
  if (isEditing) {
    editableplayer = <input type="text" required value={playerName} onChange={handleChange} />;

    // btnCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        <span className="player-name">{editableplayer}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
