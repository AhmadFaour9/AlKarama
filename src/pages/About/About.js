import React, { useEffect, useState } from 'react';
import './About.css'

import Navbar from '../../component/Navbar/Navbar';
import { config } from '../../Constant/environment';
import useGet from '../../custom Hooks/useGet';
import axios from 'axios';
import { AboutFan, About_team, Advertisements, BossOfTeam, Fans, Footer, StrategyOfTeam, TeamPlayers, TechnicalStaff, TopOfAboutPage } from '../../Sections';

const About = () => {
  const [assosiations, setAssosiations] = useState()

  useEffect(() => {
    axios.get(`${config.baseUrl}/${config.associations}`)
      .then(res => {
        console.log(res.data.data)
        setAssosiations(res.data.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (<div className='page'>
    <div className='nav  flex-column row p-0 m-0 col-12 col-lg-12 col-sm-12 col-md-12 px-0 ' style={{ display: 'block' }}>
      <Navbar />
    </div>
    <div><Advertisements/></div>
    <div className="top container-fluid row p-0 m-0 col-12 col-lg-12 col-sm-12 col-md-12 px-0"><TopOfAboutPage /></div>
    <div className="about-team ">
      <About_team
        header="حول النادي"
        text='جاءت فكرة تأسيس النادي من قبل مجموعة من شباب مدينة حمص الذين مارسوا رياضة كرة القدم ,و فكرا بطريقة جدية في تاسيس  نادي ليجمعهم جميعا'
        image={require('../../assets/images/time_with_slide_card.png')}
        innerhead='فكرة تأسيس نادي الكرامة الرياضي'
        page='About'
      />
    </div>
    <div className='boss'><BossOfTeam /></div>
    <div className='technical-staff'><TechnicalStaff /></div>
    <div className='team-players'> <TeamPlayers /></div>
    <div className='strategy-of-team'><StrategyOfTeam /></div>
    <div className='fans'><Fans /></div>
    <div className='about-fan'><AboutFan data={assosiations && assosiations} /></div>
    <div className='footer'><Footer /></div>
  </div>
  );
}
export default About;
