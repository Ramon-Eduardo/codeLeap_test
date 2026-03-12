import './styles.css';

export const DeleteModal = ({ onClose, onDelete, isOpen }) => {
    if (isOpen) {
        return (
            <div className="modalOverlay">
                <div className="modalContent">
                    <p>Are you sure you want to delete this item?</p>
                    <div className="modalActions">
                        <button className="cancel" onClick={onClose}>Cancel</button>
                        <button className="confirm" onClick={onDelete}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default DeleteModal;