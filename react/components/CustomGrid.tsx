import React, { ReactNode } from "react";
import customGridSchema from "../schemas/custom-grid-schema";
import CustomGridItemBig from "./CustomGridItemBig";
import CustomGridItemSmall from "./CustomGridItemSmall";
import styles from "./styles.css";

type Props = {
  gridType: number
  children: [ReactNode, ReactNode, ReactNode, ReactNode, ReactNode]
};

const CustomGrid = ({ gridType = 1, children }: Props) => {
  console.log("Mostar children:", gridType, children);

  const gridTypeClass: string = `grid__${gridType}`;

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
