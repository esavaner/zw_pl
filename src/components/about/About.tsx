import Button from 'components/button/Button';
import Column from 'components/column/Column';
import Row from 'components/row/Row';
import React from 'react';

import './About.scss';

export default function About() {
    return (
        <div className='about'>
            <Row>
                <Column>
                    <span>Zosia Wiktorek</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit neque lacinia turpis consectetur, vitae pharetra mi varius. Suspendisse sed nibh ac nulla ultrices lobortis. Vivamus vel felis quis est ultricies consectetur. Phasellus in neque in tellus sagittis pretium blandit at purus. Ut nec est elit. Suspendisse tristique nisl vel massa accumsan, a vulputate nunc sodales. Vestibulum nibh velit, sollicitudin at tellus id, dapibus blandit mi. Praesent eu dignissim purus. Suspendisse potenti.
                    </p>
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
                </Column>
                <div className='separator'></div>
                <Column>
                    <a href='https://www.facebook.com/'><i className='gg-facebook'></i></a>
                    <a href='https://twitter.com/home'><i className='gg-twitter'></i></a>
                    <a href='https://www.instagram.com/'><i className='gg-instagram'></i></a>
                </Column>
            </Row>
        </div>
    );
}