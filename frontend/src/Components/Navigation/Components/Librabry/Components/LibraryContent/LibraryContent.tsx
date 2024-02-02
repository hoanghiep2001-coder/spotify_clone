import React, { useEffect } from "react";
import styles from "./LibraryContent.module.scss";
import clsx from "clsx";
import { ListIcon, SearchIcon } from "../../../../../../Assets/Icons/icons";

interface LibraryContentProps {

}

const LibraryContent: React.FC<LibraryContentProps> = () => {

    // useEffect(() => {

    // }, )

    return (
        <>
            <div 
            // style={{
            //     height:
            // }}
            >
                <div className={clsx("item", styles.item)}>
                    <SearchIcon width="1.2rem" height="1.2rem" className={clsx()} />
                    <ListIcon  width="1.2rem" height="1.2rem" className={clsx()} />
                </div>
            </div>
        </>
    );
}

export default LibraryContent;