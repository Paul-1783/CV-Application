import "./../../styles/preview.css";

export function PreviewFrame() {
  return (
    <div className="preview">
      <div className="preview-buttons">
        <button className="preview-btn">Load example</button>
        <button className="preview-btn">Save as PDF</button>
        <button className="preview-btn">Clear</button>
      </div>
      <div className="preview-frame"></div>
    </div>
  );
}
