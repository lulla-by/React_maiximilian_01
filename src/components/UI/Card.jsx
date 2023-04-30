// import React from 'react';
import "./Card.css";

const Card = (props) => {
  // console.log(props)
  // console.log(props.className)
  // console.log(props.children)
 const classes = 'card ' + props.className;
  return (
    <div className={classes}> {props.children}</div>
  )
}

export default Card