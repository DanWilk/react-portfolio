import React from 'react';

function Resume() {
    return (
        <div className='body-text flex-row'>
            <span className='resume-link'>download my resume <a className='resume-link-text'href={require('../../assets/resume/Daniel_Wilkinson_Resume (3).pdf')}>here</a></span>
            <ul className='resume-list'>
                <p>Front-End Skills: {'{'}
                    <li className='resume-list-item'>HTML</li>
                    <li className='resume-list-item'>CSS</li>
                    <li className='resume-list-item'>Javascript</li>
                    <li className='resume-list-item'>React</li>
                {'}'}
                </p>
            </ul>
            <ul className='resume-list'>
                <p>Back-End Skills: {'{'}
                    <li className='resume-list-item'>Node.js</li>
                    <li className='resume-list-item'>Express.js</li>
                    <li className='resume-list-item'>MongoDb</li>
                    <li className='resume-list-item'>MySQL</li>
                    <li className='resume-list-item'>GraphQl</li>
                    <li className='resume-list-item'>MongoDb</li>
                {'}'}
                </p>
            </ul>
            <ul className='resume-list'>
                <p> Soft Skills: {'{'}
                    <li className='resume-list-item'>Proficient at Troubleshooting</li>
                    <li className='resume-list-item'>Working with a team</li>
                    <li className='resume-list-item'>Understanding documentation</li>
                    <li className='resume-list-item'>Eagerness to learn</li>
                    <li className='resume-list-item'>Ability to adapt to new situations</li>
                {'}'}
                </p>
            </ul>
    </div>
    )
}

export default Resume;