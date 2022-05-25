import React from "react";
import { Table, Col, Row, Container } from "react-bootstrap";
import "./Leaderboard.css";

const Leaderboard = () => {
  const players = localStorage.getItem("name");
  return (
    <div>
      <Container className="justify-content-center">
        <Row>
          <Col>
            <p id="leaderboard-heading">LEADERBOARD</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Table bordered variant="dark">
              <thead>
                <tr>
                  <th width="100px" className="leaderboard-rank">
                    Rank
                  </th>
                  <th width="300px" className="leaderboard-player">
                    Player
                  </th>
                  <th width="200px" className="leaderboard-score">
                    High score
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="leaderboard-rank">1</td>
                  <td className="leaderboard-player">{players}</td>
                  <td className="leaderboard-score">12345</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Leaderboard;
