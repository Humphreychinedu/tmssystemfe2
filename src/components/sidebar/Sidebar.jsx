import React from 'react'
import './sidebar.css'
import {LineStyle, Timeline, TrendingUp, PermIdentity,
   Storefront, AttachMoney, BarChart, MailOutline, 
   DynamicFeed, ChatBubbleOutline, WorkOutline,Report } from '@mui/icons-material';
import { Link } from "react-router-dom";
   
function Sidebar() {
    return (
        <div className='sidebar'>
         <div className="sidebarWrapper">
             <div className="sidebarMenu">
                 <h3 className="sidebarTitle">
                   Dasboard  
                 </h3>
                 <ul className="sidebarList">
                    <Link to="/" >
                     <li className="sidebarListItem active">
                         <LineStyle className='sidebarIcon'/>
                         Home
                     </li>
                     </Link> 
                     <li className="sidebarListItem">
                         <Timeline className='sidebarIcon'/>
                         Analytics
                     </li>
                     <li className="sidebarListItem">
                         <TrendingUp className='sidebarIcon'/>
                         Sales
                     </li>
                 </ul>
             </div>
             <div className="sidebarMenu">
              <h3 className="sidebarTitle">Quick Menu</h3>
              <ul className="sidebarList">
                  <Link to="/users">
                  <li className="sidebarListItem">
                    <PermIdentity className="sidebarIcon" />
                    Employees
                  </li>
                  </Link>
                  <Link to="/products">
                  <li className="sidebarListItem">
                    <Storefront className="sidebarIcon" />
                    Bookings
                  </li>
                  </Link>
                <li className="sidebarListItem">
                  <AttachMoney className="sidebarIcon" />
                  Accomodations
                </li>
                <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  Departments
                </li>
              </ul>
          </div>
          <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
         </div>
        </div>
    )
}

export default Sidebar
