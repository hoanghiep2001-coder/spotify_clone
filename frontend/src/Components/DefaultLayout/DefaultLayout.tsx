import React, { useContext } from "react";
import { context } from "../../provider/Provider";
import { Col, Row } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import styles from "./DefaultLayout.module.scss";
import clsx from "clsx";
import MainContent from "../MainContent/MainContent";

interface DefaultLayoutProps {
  message: string;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ message }) => {

  const spotify_context = useContext(context)

  return (
    <>
      <div className={clsx(styles.wrapper)}>
        <Row>
          <Col className={clsx(styles.col_lg_3)}>
            <Navigation />
          </Col>
          <Col>
            <MainContent />
          </Col>
          <Col className={clsx(styles.col_lg_3)} >
            SideBar
          </Col>
        </Row>
      </div>
      {/* {console.log(spotify_context.exampleField)} */}
    </>
  );
}

export default DefaultLayout;