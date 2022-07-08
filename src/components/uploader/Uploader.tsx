import { FormState } from 'components/upload/Upload';
import useUploadImage from 'hooks/useUploadImage';
import React, { useContext } from 'react';
import { CheckOutlined, LoadingOutlined } from '@ant-design/icons';
import {
  TranslationContext,
  TranslationContextType,
} from 'translation/TranslationProvider';

const Uploader = ({ form }: { form: FormState }) => {
  const { t } = useContext(TranslationContext) as TranslationContextType;
  const { imgSent, dataSent, imgError, dataError } = useUploadImage(form);
  return (
    <>
      <div>
        {t('UPLOAD_IMG')}
        {imgSent ? <CheckOutlined /> : <LoadingOutlined />}
      </div>
      {imgError}
      <div>
        {t('UPLOAD_DATA')}
        {dataSent ? <CheckOutlined /> : <LoadingOutlined />}
      </div>
      {dataError}
    </>
  );
};

export default Uploader;
