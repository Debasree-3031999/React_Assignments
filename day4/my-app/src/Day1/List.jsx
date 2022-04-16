// component => function => take any propertie as argument and
// return  react element

import React from "react";
import styles from './List.module.css'

const List = (props) => {
  console.log(styles)
  return (
    <>
      <h1 className= {styles.header}>Student's List</h1>
      <p className= {styles.header__list}>MASAI</p>
    </>
  );
};

export default List;

//golbal css
// list componeny
// module.css

