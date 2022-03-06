import tester1 from './tester.jpg';
import tester2 from './tester2.jpeg';
import tester3 from './tester3.jpg';


export interface Image {
    src: string,
    title: string,
    date: string,
    size: string,
    technique: string,
}

export const emptyImage = {src: '', title: '', date: '', size: '', technique: ''};

export const images : Image[] = [
    { src: tester1, size: '40x40', technique: 'oil', title: 'Tester 1asdasdas daada daada adasdadadaddas', date: '2014' },
    { src: tester2, size: '40x40', technique: 'oil', title: 'Tester 2', date: '2015' },
    { src: tester3, size: '40x40', technique: 'acril', title: 'Tester 3', date: '2015' },
    { src: tester1, size: '40x40', technique: 'oil', title: 'Tester 1', date: '2016' },
    { src: tester2, size: '40x40', technique: 'oil', title: 'Tester 2', date: '2017' },
    { src: tester3, size: '40x40', technique: 'acril', title: 'Tester 3', date: '2015' },
    { src: tester1, size: '40x40', technique: 'oil', title: 'Tester 1', date: '2018' },
    { src: tester3, size: '40x40', technique: 'acril', title: 'Tester 3', date: '2015' },
    { src: tester2, size: '40x40', technique: 'oil', title: 'Tester 2', date: '2019' },
    { src: tester1, size: '40x40', technique: 'oil', title: 'Tester 1', date: '2020' },
    { src: tester2, size: '40x40', technique: 'oil', title: 'Tester 2', date: '2021' },
    { src: tester1, size: '40x40', technique: 'oil', title: 'Tester 1', date: '2022' },
    { src: tester2, size: '40x40', technique: 'oil', title: 'Tester 2', date: '2023' },
    { src: tester3, size: '40x40', technique: 'acril', title: 'Tester 3', date: '2015' },
    { src: tester1, size: '40x40', technique: 'oil', title: 'Tester 1', date: '2024' },
    { src: tester2, size: '40x40', technique: 'oil', title: 'Tester 2', date: '2014' },
    { src: tester1, size: '40x40', technique: 'oil', title: 'Tester 1', date: '2015' },
    { src: tester3, size: '40x40', technique: 'acril', title: 'Tester 3', date: '2015' },
    { src: tester2, size: '40x40', technique: 'oil', title: 'Tester 2', date: '2014' },
];
