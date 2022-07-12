import React, { useContext, useReducer, useState } from 'react';

import './Upload.scss';
import { ART_TYPE, Image } from 'models/image.model';
import Uploader from 'components/uploader/Uploader';
import {
  TranslationContext,
  TranslationContextType,
} from 'translation/TranslationProvider';

enum FA {
  TITLE = 'title',
  TYPE = 'artType',
  TECH = 'tech',
  SIZE = 'size',
  DATE = 'date',
  FILE = 'file',
}

export type FormState = Image & {
  file: any;
};

export default function Upload() {
  const { t } = useContext(TranslationContext) as TranslationContextType;
  const [upload, setUpload] = useState(false);
  const reducerForm = (state: FormState, action: any) => {
    setUpload(false);
    return {
      ...state,
      [action.type]:
        action.type === FA.FILE ? action.target.files[0] : action.target.value,
    };
  };
  const initial: FormState = {
    title: '',
    artType: ART_TYPE.OTHER,
    tech: '',
    size: '',
    src: '',
    date: '',
    file: null,
  };
  const [form, dispatchForm] = useReducer(reducerForm, initial);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setUpload(true);
  };

  return (
    <div className="upload">
      <form onSubmit={handleSubmit}>
        <label>{t('TITLE')}</label>
        <input
          type="text"
          value={form.title}
          onChange={(e) => dispatchForm({ type: FA.TITLE, target: e.target })}
        />
        <label>{t('TYPE')}</label>
        <select
          value={form.artType}
          onChange={(e) => dispatchForm({ type: FA.TYPE, target: e.target })}
        >
          <option value="">{t('SELECT')}</option>
          <option value={ART_TYPE.PAINTING}>{t('PAINTINGS')}</option>
          <option value={ART_TYPE.DRAWING}>{t('DRAWINGS')}</option>
          <option value={ART_TYPE.DIGITAL}>{t('DIGITAL')}</option>
          <option value={ART_TYPE.OTHER}>{t('OTHER')}</option>
        </select>
        <label>{t('TECH')}</label>
        <select
          value={form.tech}
          onChange={(e) => dispatchForm({ type: FA.TECH, target: e.target })}
        >
          <option value="">{t('SELECT')}</option>
          <option value="oil">{t('OIL')}</option>
          <option value="acrylic">{t('ACRYLIC')}</option>
          <option value="coal">{t('COAL')}</option>
          <option value="pastels">{t('PASTELS')}</option>
          <option value="pencil">{t('PENCIL')}</option>
        </select>
        <label>{t('SIZE')}</label>
        <input
          type="text"
          value={form.size}
          onChange={(e) => dispatchForm({ type: FA.SIZE, target: e.target })}
        />
        <label>{t('DATE')}</label>
        <input
          type="date"
          value={form.date}
          onChange={(e) => dispatchForm({ type: FA.DATE, target: e.target })}
        />
        <label>{t('FILE')}</label>
        <input
          type="file"
          onChange={(e) => dispatchForm({ type: FA.FILE, target: e.target })}
        />

        <input type="submit" value={t('ADD')} />

        {upload && <Uploader form={form} />}
      </form>
    </div>
  );
}
