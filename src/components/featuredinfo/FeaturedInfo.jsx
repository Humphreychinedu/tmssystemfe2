import './featuredinfo.css'
import {ArrowDownward, ArrowUpward} from '@mui/icons-material'
function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Net Spend</span>
                <div className="featuredMoneyContainer">
                    <span className="featureMoney">#2000</span>
                    <span className="featureMoneyRate">-11.4 <ArrowDownward className='featuredIcon negative'/></span>
                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Tickets Booked</span>
                <div className="featuredMoneyContainer">
                    <span className="featureMoney">#2000</span>
                    <span className="featureMoneyRate">-11.4 <ArrowDownward  className='featuredIcon negative'/></span>
                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featureMoney">#2000</span>
                    <span className="featureMoneyRate">+2.4 <ArrowUpward  className='featuredIcon'/></span>
                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>
            
        </div>
    )
}

export default FeaturedInfo
