export enum FilterType {
    SIZE = 'size',
    TECHNIQUE = 'technique',
    YEAR = 'year',
}


export interface Filter {
    title: string,
    type: string,
    active: string[],
    values: string[],
}


export const sizes : Filter = {
    title: 'Size',
    type: FilterType.SIZE,
    active: [],
    values: [
        '100x70',
        '40x40',
    ],
};

export const techniques : Filter = {
    title: 'Technique',
    type: FilterType.TECHNIQUE,
    active: [],
    values: [
        'oil',
        'acrylic',
    ],
};

export const years : Filter = {
    title: 'Year',
    type: FilterType.YEAR,
    active: [],
    values: [
        '2022',
        '2021',
        '2020',
        '2019',
        '2018',
        '2017',
        '2016',
        '2015',
        '2014',
    ],
};
