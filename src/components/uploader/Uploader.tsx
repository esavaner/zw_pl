import { FormState } from 'components/upload/Upload';
import useUploadImage from 'hooks/useUploadImage';
import React from 'react';
import loc from 'translation/translate';
import { CheckOutlined, LoadingOutlined } from '@ant-design/icons';

const Uploader = ({form}: {form: FormState}) => {
    const {imgSent, dataSent, imgError, dataError} = useUploadImage(form);
    return (
        <>
            <div>
                {loc('UPLOAD_IMG')}
                {imgSent ? <CheckOutlined /> : <LoadingOutlined />}
            </div>
            {imgError}
            <div>
                {loc('UPLOAD_DATA')}
                {dataSent ? <CheckOutlined /> : <LoadingOutlined />}
            </div>
            {dataError}
        </>
    );
};

export default Uploader;