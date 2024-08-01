import React from "react";
import Modal from "react-modal";

const PdfViewer = ({ isOpen, onRequestClose, pdfUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="pdf-modal"
      overlayClassName="pdf-overlay"
      contentLabel="PDF Viewer"
    >
      <button onClick={onRequestClose} className="close-modal-button">
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
  );
};

export default PdfViewer;
