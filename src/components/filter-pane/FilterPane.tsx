import { Filter } from 'components/gallery/FilterOptions';
import React, { useState } from 'react';

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
            <h3>{props.filter.title}</h3>
            {options}
        </>
    );
}