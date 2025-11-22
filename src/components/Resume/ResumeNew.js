import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Cv_Raed_Hamrouni.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const togglePage = () => {
    setPageNumber(pageNumber === 1 ? 2 : 1);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        {/* Download Button Top */}
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* PDF Document */}
        <Row className="resume">
          <Document 
            file={pdf} 
            className="d-flex justify-content-center"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        {/* Toggle Page Button */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "30px", marginBottom: "30px" }}>
          <Button
            variant="primary"
            onClick={togglePage}
            style={{ 
              maxWidth: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "12px 30px",
              fontSize: "1.1rem",
              fontWeight: "600"
            }}
          >
            {pageNumber === 1 ? (
              <>
              
                <BsArrowRightCircle style={{ fontSize: "1.03rem" }} />
              </>
            ) : (
              <>
                <BsArrowLeftCircle style={{ fontSize: "1.3rem" }} />
               
              </>
            )}
          </Button>
        </Row>

        {/* Download Button Bottom */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;