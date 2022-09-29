import React, { ReactNode } from "react";       // * (Dependecia ~ ReactNode) Es una representación virtual ligera, sin estado, inmutable, de un nodo DOM
import styles from "./styles.css";

type Props = {
  element: ReactNode
};

/**
 * Este componente sirve para pintar el elemento más grande en la arquitectura de la grilla
 * @param element children componente de vtex
 * @returns item grande de la grilla
 */

const CustomGridItemBig = ({ element }: Props) => {
  return (
    <div className={styles.grid__itemBig}>
      {element}
    </div>
  );
};

export default CustomGridItemBig;
