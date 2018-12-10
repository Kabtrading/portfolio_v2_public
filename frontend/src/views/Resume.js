import React from 'react';
import {Grid, Cell} from 'react-mdl';

const Resume = (props) => (
            <div className='animated slideInUp'>
                <Grid className='resumeGrid'>
                    <Cell col={12}>
                    <img src='./img/resumeNov.jpg' alt='resume jpg'/>
                    </Cell>
                </Grid>
            </div>
)

export default Resume;
