import tester1 from './tester.jpg';
import tester2 from './tester2.jpeg';
import tester3 from './tester3.jpg';


export interface Image {
    src: string,
    title: string,
    year: string,
    size: string,
    technique: string,
}

export const emptyImage = {src: '', title: '', year: '', size: '', technique: ''};

export const images : Image[] = [
    { src: tester1, size: '40x40', technique: 'oil', title: 'Tester 1asdasdas daada daada adasdadadaddas', year: '2014' },
    { src: tester2, size: '40x40', technique: 'oil', title: 'Tester 2', year: '2015' },
    { src: tester3, size: '40x40', technique: 'acril', title: 'Tester 3', year: '2015' },
    { src: tester1, size: '40x40', technique: 'oil', title: 'Tester 1', year: '2016' },
    { src: tester2, size: '40x40', technique: 'oil', title: 'Tester 2', year: '2017' },
    { src: tester3, size: '40x40', technique: 'acril', title: 'Tester 3', year: '2015' },
    { src: tester1, size: '40x40', technique: 'oil', title: 'Tester 1', year: '2018' },
    { src: tester3, size: '40x40', technique: 'acril', title: 'Tester 3', year: '2015' },
    { src: tester2, size: '40x40', technique: 'oil', title: 'Tester 2', year: '2019' },
    { src: tester1, size: '40x40', technique: 'oil', title: 'Tester 1', year: '2020' },
    { src: tester2, size: '40x40', technique: 'oil', title: 'Tester 2', year: '2021' },
    { src: tester1, size: '40x40', technique: 'oil', title: 'Tester 1', year: '2022' },
    { src: tester2, size: '40x40', technique: 'oil', title: 'Tester 2', year: '2023' },
    { src: tester3, size: '40x40', technique: 'acril', title: 'Tester 3', year: '2015' },
    { src: tester1, size: '40x40', technique: 'oil', title: 'Tester 1', year: '2024' },
    { src: tester2, size: '40x40', technique: 'oil', title: 'Tester 2', year: '2014' },
    { src: tester1, size: '40x40', technique: 'oil', title: 'Tester 1', year: '2015' },
    { src: tester3, size: '40x40', technique: 'acril', title: 'Tester 3', year: '2015' },
    { src: tester2, size: '40x40', technique: 'oil', title: 'Tester 2', year: '2014' },
];
