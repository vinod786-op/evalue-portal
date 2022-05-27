import React, { useState, useRef } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import './Upload.css'
import { toast } from 'react-toastify';


const AddNewProjectModal = (props) => {


    const refClose = useRef(null)
    const host = "http://localhost:5000"

    const [file, setFile] = useState(null); // state for storing actual image
    const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage
    const [state, setState] = useState({
        title: '',
        description: ''
    });

    const [errorMsg, setErrorMsg] = useState('');
    const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
    const dropRef = useRef(); // React ref for managing the hover state of droppable area

    const handleInputChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const onDrop = (files) => {
        const [uploadedFile] = files;
        setFile(uploadedFile);

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewSrc(fileReader.result);
        };
        fileReader.readAsDataURL(uploadedFile);
        setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
        dropRef.current.style.border = '2px dashed #e9ebeb';
    };

    const updateBorder = (dragState) => {
        if (dragState === 'over') {
            dropRef.current.style.border = '2px solid #000';
        } else if (dragState === 'leave') {
            dropRef.current.style.border = '2px dashed #e9ebeb';
        }
    };

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        refClose.current.click();
        toast.success("New Project Added successfully");


        try {
            const { title, description } = state;
            if (title.trim() !== '' && description.trim() !== '') {
                if (file) {
                    const formData = new FormData();
                    formData.append('file', file);
                    formData.append('title', title);
                    formData.append('description', description);

                    setErrorMsg('');
                    await axios.post(`${host}/api/file/upload`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                    props.history.push('/list');
                } else {
                    setErrorMsg('Please select a file to add.');
                }
            } else {
                setErrorMsg('Please enter all the field values.');
            }
        } catch (error) {
            error.response && setErrorMsg(error.response.data);
        }
    };

    return (
        <div>
            <button type="button" className="btn btn-outline-warning my-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop24">
                Add new Project
            </button>

            <div className="modal fade" id="staticBackdrop24" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Add New Project Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleOnSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <input type="text" name="title" placeholder="Enter project name" required className="form-control" value={state.title || ''} id="title" onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <textarea rows="5" className="form-control" placeholder="Enter Project Description" name="description" id="description" required minLength={10} value={state.description || ''} onChange={handleInputChange}></textarea>
                                    <label htmlFor="floatingTextarea"></label>
                                </div>
                                <div className="upload-section">
                                    <Dropzone onDrop={onDrop}
                                        onDragEnter={() => updateBorder('over')}
                                        onDragLeave={() => updateBorder('leave')}
                                    >
                                        {({ getRootProps, getInputProps }) => (
                                            <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
                                                <input {...getInputProps()} />
                                                <p style={{ color: 'black', fontWeight: '900' }}>Drag and drop a file OR click here to select a file</p>
                                                <em>(Only *.jpeg, png, pdf, doc, txt will be accepted)</em>
                                                {file && (
                                                    <div>
                                                        <strong>Selected file:</strong> {file.name}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </Dropzone>
                                    {previewSrc ? (
                                        isPreviewAvailable ? (
                                            <div className="image-preview">
                                                <img className="preview-image" src={previewSrc} alt="Preview" />
                                            </div>
                                        ) : (
                                            <div className="preview-message">
                                                <p style={{ color: 'red', fontWeight: '900' }}>No preview available for this file</p>
                                            </div>
                                        )
                                    ) : (
                                        <div className="preview-message">
                                            <p style={{ color: 'black', fontWeight: '900' }}>Image preview will be shown here after selection</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" ref={refClose} className="btn btn-dange" data-bs-dismiss="modal">Close</button>
                                <button type="submit"  className="btn btn-warning">Add Project</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewProjectModal