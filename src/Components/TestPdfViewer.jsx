import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";

const TestPdfViewer = () => {
  const { artistId } = useParams(); // Get the artistId from the route
  const [isOpen, setIsOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    if (artistId) {
      setPdfUrl(
        `https://bridges-backend-ob24.onrender.com/artists/artist/pdf/${artistId}`
      );
    }
  }, [artistId]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open PDF Viewer</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="pdf-modal"
        overlayClassName="pdf-overlay"
        contentLabel="PDF Viewer"
      >
        <button onClick={closeModal} className="close-modal-button">
          Close
        </button>
        {pdfUrl && (
          <iframe
            src={pdfUrl}
            title="PDF Viewer"
            width="100%"
            height="100%"
            frameBorder="0"
          />
        )}
      </Modal>
    </div>
  );
};

export default TestPdfViewer;
