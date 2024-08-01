import React, { useState } from "react";
import Modal from "react-modal";

const TestPdfViewer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dummyPdfUrl =
    "https://bridges-backend-ob24.onrender.com/pdfs/1722433314669-Magali_Pitch_bb_2024.pdf";

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
        <iframe
          src={dummyPdfUrl}
          title="PDF Viewer"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </Modal>
    </div>
  );
};

export default TestPdfViewer;
