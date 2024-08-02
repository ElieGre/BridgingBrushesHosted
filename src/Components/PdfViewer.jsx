import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";

const PdfViewer = ({ isOpen, onRequestClose, artistId }) => {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    if (!artistId) return;

    const fetchPdfUrl = async () => {
      try {
        const requestUrl = `https://bridges-backend-ob24.onrender.com/artists/artist/pdf/${artistId}`;
        console.log("Request URL:", requestUrl); // Log the request URL

        const response = await axios.get(requestUrl, { responseType: "blob" });
        console.log("PDF Response Data:", response.data);

        // Create a URL for the PDF blob
        const url = URL.createObjectURL(response.data);
        console.log("PDF URL:", url);

        setPdfUrl(url);
      } catch (error) {
        console.error("Error fetching PDF URL:", error);
      }
    };

    fetchPdfUrl();
  }, [artistId, isOpen]);

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

export default PdfViewer;
