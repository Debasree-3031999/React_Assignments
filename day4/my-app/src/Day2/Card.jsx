import styles from "./Card.module.css";

const rightStyling = {
  color: "blue",
  padding: "2px",
};
const rightStyling2 = {
  fontSize: "50px",
  color: "red",
};
function Card(props) {
  // console.log(props)
  const { date, headone, headtwo, headthree,button, imgURL } = props;
  return (
    <div className={styles.maindiv}>
      <div className={styles.subdiv}>
      <div className={styles.card}>
        <p>{date}</p>
          <img className={styles.logo} src={imgURL}/>
        
      </div>
     
      <div className={styles.left__content}>
        <button style={{ color: "white", fontSize: "20px",backgroundColor:"black" }}>{button}</button>
        <h1> {headone}</h1>
        <h2> {headtwo}</h2>
        <div className={styles.bottomflex}>
          <h3> {headthree}</h3>
          <span>&#8594;</span>
        </div>
      </div>
      </div>
      </div>
  );
}

export default Card;

// const props = {
//     name:"santhi",
//     gender:"Female",
//     c:3
// }
// const {a,b,c} = number
// console.log(a)
// css
// module.css
// inline styling
// css in js
//
