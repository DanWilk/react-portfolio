import React from 'react';

const images = [
    {
        imgSrc: 'band-gogh.PNG',
        title: 'Band-Gogh',
        tech: 'handlebars, css, javascript, node.js, express.js',
        link: 'https://band-gogh.herokuapp.com/',
        githubLink: 'https://github.com/DanWilk/band-gogh'
    },
    {
        imgSrc: 'lorem-sipsum.JPG',
        title: 'Lorem-Sipsum',
        tech: 'html, css, javascript, third-party api',
        link: 'https://cshepscorp.github.io/lorem-sipsum/',
        githubLink: 'https://github.com/DanWilk/lorem-sipsum'
    },
    {
        imgSrc: 'weather-app.JPG',
        title: 'Wheather App',
        tech: 'html, css, javascript, third-party api',
        link: 'https://danwilk.github.io/weather-app/',
        githubLink: 'https://github.com/DanWilk/weather-app'
    },
    {
        imgSrc: 'gregs-list.PNG',
        title: "Greg's List",
        tech: 'MERN, GraphQl, Chakra UI',
        link: 'https://gregs-list-1.herokuapp.com/',
        githubLink: 'https://github.com/DanWilk/gregs-list'
    }
]


function Portfolio() {
    return (
        <div className='flex-row portfolio-container body-text lg-body-con'>
            {images.map((image) => (
                <div className='image-container' key={image.title}>
                    <a href={image.link}>
                        <img className='portfolio-image' src={require(`../../assets/images/${image.imgSrc}`)} alt={image.title}></img>
                    </a>
                    <div className='flex-row'>
                        <p className='image-text'>{image.tech}</p>
                        <a className='github-link' href={image.githubLink}>Github</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Portfolio;