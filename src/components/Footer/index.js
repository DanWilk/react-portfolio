import React from 'react';

function Footer() {
    return (
        <footer>
            <div className='link-container'>
                <a href='https://github.com/DanWilk'>
                    <img src={require('../../assets/images/GitHub-Mark-64px.png')} alt='githublink'></img>
                </a>
                <a href='www.linkedin.com/in/daniel-wilkinson-041870171'>
                    <img className='link-in' src={require('../../assets/images/LI-In-Bug.png')} alt='LinkedIn link'></img>
                </a>
            </div>
        </footer>
    )
}

export default Footer;