import React from "react";

function Nav(props) {

    const {pages = [], currentPage, setCurrentPage} = props

    const setPageHandler = (page) => {
        setCurrentPage(page)
        console.log(page);
    }
    return (
        
        <header className='flex-row'>
            <h2>
                <a href='/'>Daniel Wilkinson</a>
            </h2>
            <ul className="flex-row lg-nav">
                {pages.map(page => (
                    <li className='nav-items' key={page} onClick={() => setPageHandler(page)}>
                        <span >
                            {page}
                        </span>
                    </li>
                ))}
            </ul>
            
        </header>
        
    )
}

export default Nav