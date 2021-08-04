import React, { useEffect, useState } from 'react'
import './covid.css'
const Covid = () => {
    const [data, setData] = useState([]);
    const getCoviddata = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);

        }

    };
    useEffect(() => {
        getCoviddata();
    }, [])

    return (
        <>
            <h1>LIVE</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>
            <ul>
                <li className="card5">
                    <div className="card_main5" >
                        <div className="card_inner5">
                            <p className="card_name5"> <span> OUR </span>COUNTRY</p>
                            <p className="total_total5 card_small5">INDIA</p>
                        </div>
                    </div>
                </li>
                <li className="card6">
                    <div className="card_main6" >
                        <div className="card_inner6">
                            <p className="card_name6"> <span> TOTAL </span>RECOVERED</p>
                            <p className="total_total6 card_small6">{data.recovered}</p>
                        </div>
                    </div>
                </li>

                <li className="card1">
                    <div className="card_main1" >
                        <div className="card_inner1">
                            <p className="card_name1"> <span> TOTAL </span>CONFIRMED</p>
                            <p className="total_total1 card_small1">{data.confirmed}</p>
                        </div>
                    </div>
                </li>
                <li className="card2">
                    <div className="card_main2" >
                        <div className="card_inner2">
                            <p className="card_name2"> <span> TOTAL </span>DEATHS</p>
                            <p className="total_total2 card_small2">{data.deaths}</p>
                        </div>
                    </div>
                </li>

                <li className="card3">
                    <div className="card_main3" >
                        <div className="card_inner3">
                            <p className="card_name3"> <span> TOTAL </span>ACTIVE</p>
                            <p className="total_total3 card_small3">{data.active}</p>
                        </div>
                    </div>
                </li>
               </ul>
               <h2>Thanks for visiting our website.
                   <h2>follow the government guideline to save you as well as others</h2>
               </h2>
               <h2>Stay home Stay safe</h2>
        </>
    )
}

export default Covid
