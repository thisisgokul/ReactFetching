import { React, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Cards from "./Cards";


export default function Home() {
  const [datas, setdatas] = useState([]);
  const fetchData = async () => {
    try {
      await fetch("./restaurants.json")
        .then((data) => data.json())
        .then((data) => setdatas(data.restaurants));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <Row>
      {datas.map((item,index) => (
        <Col key={index} sm={12} md={6} lg={3} className="py-3">
            <Cards items={item} />
        </Col>
      ))}
    </Row>
  );
}
