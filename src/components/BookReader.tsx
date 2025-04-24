import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface BookReaderProps {
  bookUrl: string;
}

const BookReader: React.FC<BookReaderProps> = ({ bookUrl }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const goToPrevPage = () => setPageNumber(prev => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNumber(prev => Math.min(prev + 1, numPages));

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Document
        file={bookUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div className="text-gray-500">Loading PDF...</div>}
        className="shadow-lg"
      >
        <Page
          pageNumber={pageNumber}
          width={600}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      </Document>

      <div className="flex items-center justify-between mt-4 gap-4">
        <button
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          Previous
        </button>

        <p className="text-gray-700">
          Page {pageNumber} of {numPages}
        </p>

        <button
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookReader;
