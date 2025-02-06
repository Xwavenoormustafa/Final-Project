import React from "react";
import JobsRightSection from "./sections/JobsRightSection";
import { Container } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import JobsLeftSection from "./sections/JobsLeftSection";

const JobsPage = () => {
  return (
    <div>
      <Container className="mt-4">
        <Row className="gy-4">
          {/* Left section */}
          <Col
            lg={3}
            className="d-none d-lg-block"
            style={{ position: "sticky", top: "0", height: "100vh" }}
          >
            <JobsLeftSection />
          </Col>

          {/* Right section */}
          <Col lg={9} style={{ overflowY: "auto",  }}>
            <JobsRightSection />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JobsPage;
