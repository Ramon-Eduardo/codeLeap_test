import { useState, useEffect } from 'react';
import "../edit/styles.css";

export const EditModal = ({ onClose, onEdit, isOpen, currentTitle, currentContent }) => {
    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");

    useEffect(() => {
        if (isOpen) {
            setNewTitle(currentTitle || "");
            setNewContent(currentContent || "");
        }
    }, [isOpen, currentTitle, currentContent]);

    if (!isOpen) return null;

    return (
        <div className="editOverlay">
            <div className="editContent">
                <h3>Edit item</h3>
                <p>Title</p>
                <input
                    className="editInput"
                    type="text"
                    placeholder="Hello world"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <p>Content</p>
                <textarea
                    className="editTextarea"
                    placeholder="Content here"
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                />
                <div className="editActions">
                    <button className="cancelEdit" onClick={onClose}>Cancel</button>
                    <button
                        className="saveEdit"
                        onClick={() => {
                            onEdit(newTitle, newContent);
                            onClose();
                        }}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditModal;

