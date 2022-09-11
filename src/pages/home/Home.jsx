import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo'
import './home.css'
import {userData} from '../../DummyData';
import WidgetSmall from '../../components/widgetsmall/WidgetSmall';
import WidgetLarge from '../../components/widgetlarge/WidgetLarge';

function Home() {
    return (
        <div className='home'>
            <FeaturedInfo/>
            <Chart data={userData} title={"Travel Analytics"} grid dataKey="Active Users"/>
            <div className="homeWidgets">
                <WidgetSmall/>
                <WidgetLarge/>
            </div>
        </div>
    )
}

export default Home
