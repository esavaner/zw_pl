import { Filter } from 'components/gallery/FilterOptions';
import React, { useState } from 'react';
import loc from 'components/lang/translate';

import './FilterPane.scss';

interface FilterProps {
    filter: Filter,
    filterIndex: number,
    setOptions: any,
}

export default function FilterPane(props: FilterProps) {
    const [tab, setTab] = useState(Object.fromEntries(props.filter.values.map(value => [value, false])));
    const handleChange = (option: string | number) => {
        tab[option] = !tab[option];
        setTab(tab);
        props.filter.active = Object.entries(tab).filter(([, active]) => active).map(([val_2,]) => val_2);
        props.setOptions(props.filter, props.filterIndex);
    };

    const options = props.filter.values.map((option: string | number) =>
        <label key={`checkbox-${option}`}>
            <input
                type='checkbox'
                onChange={() => handleChange(option)}
            />
            {option}
        </label>
    );

    return (
        <>
            <h3>{loc(props.filter.title.toUpperCase())}</h3>
            {options}
        </>
    );
}