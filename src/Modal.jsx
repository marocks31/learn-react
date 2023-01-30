import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    return (
      <div 
      className="modal-background">
        <section 
          className="modal-content">
          {props.children}
          <button
            className="close" type="button" onClick={props.onClose}>Close
          </button>
        </section>
      </div>
    );
  }
}