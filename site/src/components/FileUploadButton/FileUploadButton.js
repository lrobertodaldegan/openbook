import React, {useState} from 'react';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

const FileUploadButton = () => {
	const [selectedFile, setSelectedFile] = useState(undefined);
	const [isSelected, setIsSelected] = useState(false);

	const changeHandler = (event) => {
        const file = event.target.files[0];
		
        setSelectedFile(file);
		setIsSelected(file !== null);
	};

	const handleSubmission = () => {
		const formData = new FormData();
		formData.append('File', selectedFile);
    }

	return(
        <div className='row'>
            <div className='col-5'>
                <input className="form-control form-control-sm"
                        type="file" 
                        name="file" 
                        onChange={changeHandler} />
            </div>
            <div className='col-2'>
                {isSelected
                    ? <SecondaryButton 
                            label="Enviar arquivo" 
                            action={() => handleSubmission()}/>
                    : <></>}
            </div>
		</div>
	)
}

export default FileUploadButton;