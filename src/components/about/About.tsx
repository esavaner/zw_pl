import Button from 'components/button/Button';
import Row from 'components/row/Row';
import React from 'react';

import './About.scss';

interface AboutProps {
    children?: React.ReactNode;
}

export default function About(props: AboutProps) {
    return (
        <div className='about'>
            <span>Zosia Wiktorek</span>
            <Row>
                <Button>
                    About me
                    <i className='gg-arrow-right'></i>
                </Button>
                <Button>
                    Contact
                    <i className='gg-arrow-right'></i>
                </Button>
            </Row>
        </div>
    );
}