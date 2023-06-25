/* eslint-disable react/prop-types */
import { useState } from 'react';
import ImageElement from './ImageElement';
import CameraIcon from './icons/cameraIcon.svg?component';

const ImagePreview = ({ formValues, setFormValues }) => {
	const [previewImage, setPreviewImage] = useState(null);

	const handleImageChange = (e) => {
		const selectedFile = e.target.files[0];

		if (selectedFile) {
			const previewURL = URL.createObjectURL(selectedFile);
			setPreviewImage(previewURL);
			setFormValues({ ...formValues, image: selectedFile });
			// setSelectedImage(selectedFile);
		}
	};

	return (
		<div className='relative max-w-max mx-auto mt-4'>
			{/* {productImagePreview && <ImageElement />}
					{!productImagePreview && image && <ImageElement />}*/}
			<div className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2'>
				<label htmlFor='upload'>
					<p>
						<CameraIcon className='cursor-pointer' />
					</p>
					<input
						type='file'
						id='upload'
						accept='image/*'
						onChange={handleImageChange}
						className='hidden'
					/>
				</label>
			</div>
			<div className='h-28 w-28 sm:h-40 sm:w-40 rounded-full border border-primary-700 bg-white overflow-hidden'>
				{previewImage && <ImageElement imgSrc={previewImage} />}
			</div>
		</div>
	);
};
export default ImagePreview;
