import React, { ReactNode } from "react";       // * (Dependecia ~ ReactNode) Es una representación virtual ligera, sin estado, inmutable, de un nodo DOM
import styles from "./styles.css";

type Props = {
  elementOne: ReactNode,
  elementTwo: ReactNode
};

/**
 * Este componente sirve para pintar el elemento más grande en la arquitectura de la grilla
 * @param elementOne children componente de vtex
 * @param elementTwo children componente de vtex
 * @returns items pequeños de la grilla
 */

/** */
const CustomGridItemSmall = ({ elementOne, elementTwo }: Props) => {
  return (
    <div className={styles["grid__itemSmall"]}>
      <div className={styles["grid__itemSmall--one"]}>
        {elementOne}
      </div>
      <div className={styles["grid__itemSmall--two"]}>
        {elementTwo}
      </div>
    </div>
  );
};

export default CustomGridItemSmall;
