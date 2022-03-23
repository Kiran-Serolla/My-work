const Modal = (props) => {
    return (
        <>
            <div className="modal fade" 
            id={props.modalid} 
            data-bs-backdrop="static"
             data-bs-keyboard="false" 
             tabIndex="-1" 
             aria-labelledby={`${props.modalid}Label`}
             aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={`${props.modalid}Label`}>{props.modaltitle}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                           {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal