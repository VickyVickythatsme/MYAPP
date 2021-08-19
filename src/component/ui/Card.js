import classes from "./card.module.css";
function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
  // this is used to wrap the component so that all display like card
}
export default Card;
