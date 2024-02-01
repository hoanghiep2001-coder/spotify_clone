import React, { useContext } from "react";
import { context } from "../../provider/Provider";
import { Col, Row } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import styles from "./DefaultLayout.module.scss";
import clsx from "clsx";

interface DefaultLayoutProps {
  message: string;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ message }) => {

  const spotify_context = useContext(context)

  return (
    <>
      <div className={clsx(styles.wrapper)}>
        <Row>
          <Col lg={3}>
            <Navigation />
          </Col>
          <Col lg={9} xxl={6}>
            MainContent
          </Col>
          <Col xxl={3} >
            SideBar
          </Col>
        </Row>
      </div>
      {console.log(spotify_context.exampleField)}
    </>
  );
}

export default DefaultLayout;