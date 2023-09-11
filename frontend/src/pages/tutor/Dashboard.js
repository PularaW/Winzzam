import './Dashboard.css'
import Navbar from '../../components/tutor/Navbar';
import Sidebar from '../../components/tutor/Sidebar';
import Topbar from '../../components/tutor/Topbar';
import Exams from '../../components/tutor/Exams'
import Earnings from '../../components/tutor/Earnings';
import Notifications from '../../components/tutor/Notifications'
import Search from '../../components/tutor/Search';
import ShowMonths from '../../components/tutor/ShowMonths';
import { Link } from 'react-router-dom'; 

import "bootstrap/dist/css/bootstrap.min.css";


const Dashboard = () => {
  return (
    <>

      <div className="row  bg-secondary bg-opacity-10">

        <div className='d-flex flex-column bg-light col-sm-2'>
          <Sidebar />
        </div>
        <div className="main col-sm-10">
          <div className="header">
            <Navbar />
          </div>
          <div className="insight">
            <div className="box">
            <Link to="/tutor_active_month" type="button" class="btn btn-primary pm-b">View</Link>
              <Topbar
                monthName="July"
                registeredStudents="218"
                examsCount="04"
              />
              <Exams />
              <Earnings
                earnings='100,000'
              />
             
            </div>
            <div className="noti-box">
              <Notifications />
            </div>

            <div className="months">
              <Search />
              <ShowMonths
                selectedBatchYear={2023}
                selectedMonthsType={'JAN'}
              />
            </div>
          </div>
        </div>



      </div>
    </>

  )
}

export default Dashboard