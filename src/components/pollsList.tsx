import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { encrypt } from "../helpers/helpers";
import { Card, Badge, Row, Col, CardColumns } from "react-bootstrap";

const PollsList = (): JSX.Element => {
  const user = useSelector((state) => state.authReducer.username);
  const userid = encrypt(user);
  const [data, setData] = useState([]);
  const getData = () => {
    fetch(`http://localhost:5000/v1/user/${userid}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const Allpolls = (): any => {
    return data && data.length > 0 ? (
      data.map((item) => (
        <Card border="dark" className="p-2" key={item._id}>
          <Card.Title className="text-center">
            {item.title}
            <Badge variant={item.open ? "success" : "danger"} className="ml-1">
              {item.open ? "open" : "closed"}
            </Badge>
          </Card.Title>
          <Card.Body className="text-center">
            {item.description}
            <a href={`/poll/${item._id}`} className="stretched-link"></a>
          </Card.Body>
        </Card>
      ))
    ) : (
      <br />
    );
  };
  return (
    <>
      <Row className="mt-2">
        <Col>
          <h4>Your Polls </h4>
        </Col>
      </Row>

      <div className="my-2">
        {data && data.length > 0 ? (
          <CardColumns>
            <Allpolls />
          </CardColumns>
        ) : (
          <p>
            You haven't created any polls yet. Start one by clicking the new
            poll button above
          </p>
        )}
      </div>
    </>
  );
};

export default PollsList;
