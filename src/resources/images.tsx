import tester1 from './tester.jpg';
import tester2 from './tester2.jpeg';
import tester3 from './tester3.jpg';


import { ART_TYPE , Image } from '../models/image.model';

export const emptyImage = {src: '', title: '', date: '', size: '', technique: ''};

export const images : Image[] = [
    { src: tester1, size: '40x40', technique: 'oil', title: 'Tester 1asdasdas daada daada adasdadadaddas', date: '2014', artType: ART_TYPE .PAINTING },
    { src: tester2, size: '40x40', technique: 'oil', title: 'Tester 2', date: '2015', artType: ART_TYPE .DRAWING },
    { src: tester3, size: '40x40', technique: 'acril', title: 'Tester 3', date: '2015', artType: ART_TYPE .DIGITAL },
];
