import React, { ReactNode } from "react";
import CustomGridItemBig from "./CustomGridItemBig";                  // * (Componente) Elemento grande de la grilla
import CustomGridItemSmall from "./CustomGridItemSmall";              // * (Componente) Elementos pequeños de la grilla
import customGridSchema from "../schemas/custom-grid-schema";         // * (Esquema ~ VTEX) Para ser manejado del lado del admin
import styles from "./styles.css";

type Props = {
  gridType: number
  children: [ReactNode, ReactNode, ReactNode, ReactNode, ReactNode]
};

/**
 * Este componente sirve para maquetar una grilla que puede ir cambiando de arquitectura según se requiera en el admin
 * @param gridType manera en la que la grilla va a cambiar de arquitectura 
 * @param children componente vtex que va a ser pintado
 * @returns grilla con sus childrens
 */

/** */
const CustomGrid = ({ gridType = 1, children }: Props) => {
  const gridTypeClass: string = `grid__${gridType}`;          // ! Clase con la que va a ser manejada la arquitectura de la grilla

  return (
    <div>
      <h1 className={styles["custom__grid--title"]}>Diagramation Template</h1>
      <div className={styles[gridTypeClass]}>
        <CustomGridItemBig element={children[0]} />
        <CustomGridItemSmall elementOne={children[1]} elementTwo={children[2]} />
        <CustomGridItemSmall elementOne={children[3]} elementTwo={children[4]} />
      </div>
    </div>
  );
};

CustomGrid.schema = customGridSchema;

export default CustomGrid;
