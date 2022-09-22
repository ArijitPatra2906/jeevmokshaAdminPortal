import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import FaqDetails from '../pages/Faq/FaqDetails'

function FaqDetailsView() {
    return (
        <div className='faq'>
            <Sidebar />
            <div className="faqContainer">
                <Navbar />
                <FaqDetails />
            </div>
        </div >
    )
}

export default FaqDetailsView
