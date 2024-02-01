import React from "react";
import styles from "./DefaultLayout.module.scss";
import clsx from "clsx";

 
interface DefaultLayoutProps {
    message: string;
  }

const DefaultLayout: React.FC<DefaultLayoutProps> = ({message}) => {
    return (
        <>
        <h3 className={clsx(styles.title)}>
            {message}
        </h3>
        </>
    );
  }
  
  export default DefaultLayout;