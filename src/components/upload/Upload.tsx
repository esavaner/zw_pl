import Column from 'components/column/Column';
import loc from 'components/lang/translate';
import React, { useReducer, useState } from 'react';

import './Upload.scss';

enum FA {
    TITLE = 'title',
    TYPE = 'type',
    TECH = 'tech',
    SIZE = 'size',
    DATE = 'date',
    FILE = 'file',
}

interface FormState {
    title: string,
    type: string,
    tech: string,
    size: string,
    date: any,
    file: any,
}

const reducerForm = (state: FormState, action: any) => {
    return {...state, [action.type]: action.value};
};

export default function Upload() {
    const initial: FormState = {title: '', type: '', tech: '', size: '', date: '', file: null};
    const [form, dispatchForm] = useReducer(reducerForm, initial);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(form, e);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>{loc('TITLE')}</label>
            <input type='text' value={form.title} onChange={(e) => dispatchForm({type: FA.TITLE, value: e.target.value})}/>
            <label>{loc('TYPE')}</label>
            <select value={form.type} onChange={(e) => dispatchForm({type: FA.TYPE, value: e.target.value})}>
                <option value=''>{loc('SELECT')}</option>
                <option value='painting'>{loc('PAINTINGS')}</option>
                <option value='drawing'>{loc('DRAWINGS')}</option>
                <option value='digital'>{loc('DIGITAL')}</option>
            </select>
            { (form.type === 'painting') &&
            <>
                <label>{loc('TECHNIQUE')}</label>
                <select value={form.tech} onChange={(e) => dispatchForm({type: FA.TECH, value: e.target.value})}>
                    <option value='oil'>{loc('OIL')}</option>
                    <option value='acrylic'>{loc('ACRILIC')}</option>
                </select>
            </>
            }
            { (form.type === 'painting' || form.type === 'drawing') &&
            <>
                <label>{loc('SIZE')}</label>
                <input type='text' value={form.size} onChange={(e) => dispatchForm({type: FA.SIZE, value: e.target.value})}/>
            </>
            }
            <label>{loc('DATE')}</label>
            <input type='date' value={form.date} onChange={(e) => dispatchForm({type: FA.DATE, value: e.target.value})}/>
            <label>{loc('FILE')}</label>
            <input type='file' value={form.file} onChange={(e) => dispatchForm({type: FA.FILE, value: e.target.value})}/>

            <input type='submit' value={loc('ADD')}/>
        </form>
    );
}