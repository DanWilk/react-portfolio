import React from 'react';

function About() {
    return(
        <section>
            <div className='flex-row'>
                <img className='profile-img' src={require(`../../assets/images/my-profile.jpg`)} alt='profile '></img>
                <h1 className='text'>About Me</h1>
            </div>
            <p className='text body-text lg-body-text'>
                I am an alumni of the University of Richmond full stack web development coding bootcamp.
                However before starting my journey as a full stack developer I worked as an electrician for several years.
                Doing this has taught me many skills such as troubleshooting and ability to interpret complicated documents.
            </p>
        </section>
    )
}

export default About