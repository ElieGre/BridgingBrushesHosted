import React from "react";
import Modal from "react-modal";

const PdfViewer2 = ({ isOpen, onRequestClose, pdfUrl, title }) => {
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
      <h2>{title}</h2>
      {pdfUrl ? (
        <iframe
          src={pdfUrl}
          title="PDF Viewer"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      ) : (
        <div>Loading PDF...</div>
      )}
    </Modal>
  );
};

export default PdfViewer2;
