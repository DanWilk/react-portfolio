import React from 'react';

function Resume() {
    return (
        <div className='body-text'>
            <ul className='resume-list'>
                <p>Skills: {'{'}
                    <li className='resume-list-item'>HTML,</li>
                    <li className='resume-list-item'>CSS,</li>
                    <li className='resume-list-item'>Javascript,</li>
                    <li className='resume-list-item'>Node.Js,</li>
                    <li className='resume-list-item'>MySQL</li>
                {'}'}
                </p>
                </ul>
        </div>
    )
}

export default Resume;