import React from "react";
import { ListGroup } from "react-bootstrap";
import clsx from "clsx";
import { HomeIcon, SearchIcon } from "../../../../Assets/Icons/icons";


interface NavHeaderProps {

}

const NavHeader: React.FC<NavHeaderProps> = () => {

    return (
        <>
            <ListGroup>
                <ListGroup.Item className={clsx("cur-pointer", "text", "main-bgColor", "d-lg-flex", "align-items-lg-center", "gap-lg-3")}>
                    <HomeIcon width="2.4rem" height="2.4rem" className={null} />
                    <span>Home</span>
                </ListGroup.Item>
                <ListGroup.Item className={clsx("cur-pointer", "text", "main-bgColor","d-lg-flex", "align-items-lg-center", "gap-lg-3")}>
                    <SearchIcon width="2.4rem" height="2.4rem" className={null} />
                    <span>Search</span>
                </ListGroup.Item>
            </ListGroup>
            
            

        </>
    );
}

export default NavHeader;