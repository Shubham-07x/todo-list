import { useState } from "react";
import PropTypes from 'prop-types';

const ListItem = (props) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false); 

  function handleItemClick() {
    setIsCompleted(!isCompleted);
  }

  function handleItemDelete() {
    props.onDelete(props.index); 
  }

  return (
    <li
      key={props.index}
      className="list-item"
      style={{
        textDecoration: isCompleted ? "line-through" : "none",
        cursor: "pointer",
        position: 'relative'
      }}
      onClick={handleItemClick}
      onDoubleClick={handleItemDelete} 
      onMouseEnter={() => setShowTooltip(true)} 
      onMouseLeave={() => setShowTooltip(false)} 
    >
      {props.todoItem}
      {showTooltip && <span className="tooltip">Single-click to cancel Item & Double-click to delete Item</span>}
    </li>
  );
};

ListItem.propTypes = {
    todoItem: PropTypes.string.isRequired, 
    index: PropTypes.number.isRequired, 
    onDelete: PropTypes.func.isRequired, 
};
  
export default ListItem;
