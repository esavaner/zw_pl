import loc from 'translation/translate';
import React, { useReducer } from 'react';

import './Upload.scss';
import { uploadImage } from 'services/firebase';
import { ART_TYPE } from 'models/image.model';

enum FA {
    TITLE = 'title',
    TYPE = 'type',
    TECH = 'tech',
    SIZE = 'size',
    DATE = 'date',
    FILE = 'file',
}

export interface FormState {
    title: string,
    type: ART_TYPE,
    tech: string,
    size: string,
    date: string,
    file: any,
}

const reducerForm = (state: FormState, action: any) => {
    return {...state, [action.type]: action.type === FA.FILE ? action.target.files[0] : action.target.value};
};

export default function Upload() {
    const initial: FormState = {title: '', type: ART_TYPE.OTHER, tech: '', size: '', date: '', file: null};
    const [form, dispatchForm] = useReducer(reducerForm, initial);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(e, form);
        uploadImage(form);
    };

    return (
        <div className='upload'>
            <form onSubmit={handleSubmit}>
                <label>{loc('TITLE')}</label>
                <input type='text' value={form.title} onChange={(e) => dispatchForm({type: FA.TITLE, target: e.target})}/>
                <label>{loc('TYPE')}</label>
                <select value={form.type} onChange={(e) => dispatchForm({type: FA.TYPE, target: e.target})}>
                    <option value=''>{loc('SELECT')}</option>
                    <option value={ART_TYPE.PAINTING}>{loc('PAINTINGS')}</option>
                    <option value={ART_TYPE.DRAWING}>{loc('DRAWINGS')}</option>
                    <option value={ART_TYPE.DIGITAL}>{loc('DIGITAL')}</option>
                    <option value={ART_TYPE.OTHER}>{loc('DIGITAL')}</option>
                </select>
                { (form.type === ART_TYPE.PAINTING) &&
                <>
                    <label>{loc('TECHNIQUE')}</label>
                    <select value={form.tech} onChange={(e) => dispatchForm({type: FA.TECH, target: e.target})}>
                        <option value='oil'>{loc('OIL')}</option>
                        <option value='acrylic'>{loc('ACRYLIC')}</option>
                    </select>
                </>
                }
                { (form.type === ART_TYPE.PAINTING || form.type === ART_TYPE.DIGITAL) &&
                <>
                    <label>{loc('SIZE')}</label>
                    <input type='text' value={form.size} onChange={(e) => dispatchForm({type: FA.SIZE, target: e.target})}/>
                </>
                }
                <label>{loc('DATE')}</label>
                <input type='date' value={form.date} onChange={(e) => dispatchForm({type: FA.DATE, target: e.target})}/>
                <label>{loc('FILE')}</label>
                <input type='file' onChange={(e) => dispatchForm({type: FA.FILE, target: e.target})}/>

                <input type='submit' value={loc('ADD')}/>
            </form>
        </div>
    );
}