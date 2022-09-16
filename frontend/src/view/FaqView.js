import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Faq from '../pages/Faq/Faq'

function FaqView() {
    return (
        <div className='faq'>
            <Sidebar />
            <div className="faqContainer">
                <Navbar />
                <Faq />
            </div>
        </div>
    )
}

export default FaqView