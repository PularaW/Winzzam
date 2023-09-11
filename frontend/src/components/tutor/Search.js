// import { Link, useLocation } from 'react-router-dom'
import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import "./Topbar.css";

const Search = (props) => {

    // const { earnings } = props;
    // Dummy batch years data
    const dummyBatchYears = [2020, 2021, 2022, 2023,2024];

    const [selectedBatchYear, setSelectedBatchYear] = useState('');

    const handleBatchYearChange = (event) => {
        setSelectedBatchYear(event.target.value);
    };

    return (
        <header>
            <div className="container_topbar_am">
                <div className='fl_am'>
                    <div>
                        <p class="card-user-name-pm-x">Months</p>
                    </div>
                </div>
                <div className="container_topbar_am">
                    <div className="dropdown-container">
                    <select className="custom-select" value={selectedBatchYear} onChange={handleBatchYearChange}>
                            {dummyBatchYears.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="container_topbar_am">
                    <div className="dropdown-container">       
                        <select className="custom-select">
                            <option value="option">Upcomming Months</option>
                            <option value="option">Previous Months</option>
                        </select>
                    </div>
                </div>
                <div className="container_topbar_am">
                    <div className="left d-flex px-2">
                    <button class="btn btn-primary pm-a">Search</button>
                    </div>
                </div>
                

            </div>
        </header>
    )
}

export default Search