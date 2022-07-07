import React, { useState } from 'react'
import axios from 'axios'
// import Message from './Message'
import './Styles.css'

export const Upload = () => {
    const [file, setFile] = useState('')
    const [filename, setFilename] = useState('')
    const [uploadedFile, setUploadedFile] = useState({})
    const [message, setMessage] = useState('')
    const onChange = e => {
        setFile(e.target.files[0])
        setFilename(e.target.files[0].name)
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const { fileName, filePath } = res.data
            setUploadedFile({fileName, filePath})

            setMessage('File Uploaded')
        } catch(err){
            if(err.response.status === 500) {
                console.log('Server unable to fulfill request')
            }
            else {
                console.log(err.response.data.msg);
            }

        }
    }
    return (
        <div className='form-container'>
        {/* {message ? <Message msg={message}/> : null} */}
            <h2>Upload Resume</h2>
            <form onSubmit={onSubmit}>
                <div className='form-group-files'>
                    <input 
                    type="file" 
                    className='inputfile'
                    id='customFile'
                    onChange={onChange}/>
                    <label className='custom-file-label' htmlFor='customFile'> 
                        Choose a File
                    </label>
                    <p className='thick'> {filename}</p>
                </div>
                <p> Supported Formats: .PDF, .txt</p>
                <input type="submit" value="Upload File" className="button"/>
            </form>
        </div>
    )
}
