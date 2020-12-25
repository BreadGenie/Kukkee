import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";

const Help = () => {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col>
            <h1>How it works</h1>
            <h3>
              <Link href="/">
                <a>Landing page</a>
              </Link>
            </h3>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Help;
