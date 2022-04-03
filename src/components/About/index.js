import React from 'react';

function About() {
    return(
        <section>
            <div className='flex-row'>
                <img className='profile-img' src={require(`../../assets/images/my-profile.jpg`)} alt='profile '></img>
                <h1 className='text'>About Me</h1>
            </div>
            <p className='text body-text lg-body-text'>
            Full stack web developer with a background in electrical maintenance leading to a deep
            understanding and ability to troubleshoot, understand programmable logic, and reading through
            documentation. Recently earned a certificate as a full stack developer from the University of
            Richmond coding bootcamp. As I complete my projects I attempt to implement features on the
            back-end that lead to ease of use and integration on the front-end and by users. I was a
            member of a four person team that created a MERN application that allows users to post
            needed services as well as their budget for the completion of this service. I attack front-end
            development with a mobile first design and use a wide array of UX development tools and
            libraries to accomplish a polished look. I’m very excited to create more web applications with
            both languages I know as well as any new languages I may learn along the way
            </p>
        </section>
    )
}

export default About