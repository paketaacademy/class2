import React, { useState, useEffect } from 'react';
import TableMarket from '../components/TableMarket';
import api from '../api';


const headCells = [
    { id: 'id', numeric: false, disablePadding: true, label: '#' },
    { id: 'coin', numeric: true, disablePadding: false, label: 'Coin' },
    { id: 'alerts', numeric: true, disablePadding: false, label: 'Alerts' },
    { id: 'galaxyScore', numeric: true, disablePadding: false, label: 'Galaxy Score™' },
    { id: 'altRank', numeric: true, disablePadding: false, label: 'AltRank™' },
    { id: 'correlationRank', numeric: true, disablePadding: false, label: 'Correlation Rank' },
    { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
    { id: '1hChangeUSD', numeric: true, disablePadding: false, label: '1H % Change (USD)' },
    { id: '24hChangeUSD', numeric: true, disablePadding: false, label: '24H % Change (USD)' },
    { id: '24hChangeBTC', numeric: true, disablePadding: false, label: '24H % Change (BTC)' },
    { id: 'marketCap', numeric: true, disablePadding: false, label: 'Market Cap' },
    { id: 'marketVolume', numeric: true, disablePadding: false, label: 'Market Volume' },
    { id: 'marketDominance', numeric: true, disablePadding: false, label: 'Market Dominance' },
    { id: 'volatily', numeric: true, disablePadding: false, label: 'Volatility' },
    { id: 'circulatingSupply', numeric: true, disablePadding: false, label: 'Circulating Supply' },
    { id: 'socialVol', numeric: true, disablePadding: false, label: 'Social Volume' },
    { id: 'socialEng', numeric: true, disablePadding: false, label: 'Social Engagement' },
    { id: 'socialCont', numeric: true, disablePadding: false, label: 'Social Contributors' },
    { id: 'socialDom', numeric: true, disablePadding: false, label: 'Social Dominance' },
    { id: 'averageSent', numeric: true, disablePadding: false, label: 'Average Sentiment' },
    { id: 'bullishSent', numeric: true, disablePadding: false, label: 'Bullish Sentiment' },
    { id: 'bearishSent', numeric: true, disablePadding: false, label: 'Bearish Sentiment' },
    { id: 'sharedLinks', numeric: true, disablePadding: false, label: 'Shared Links' },
    { id: 'twitterVol', numeric: true, disablePadding: false, label: 'Twitter Volume' },
    { id: 'redditVol', numeric: true, disablePadding: false, label: 'Reddit Volume' },
    { id: 'mediumVol', numeric: true, disablePadding: false, label: 'Medium Volume' },
    { id: 'youtubeVol', numeric: true, disablePadding: false, label: 'Youtube Volume' },
    { id: 'newsVol', numeric: true, disablePadding: false, label: 'News Volume' },
    { id: 'spamVol', numeric: true, disablePadding: false, label: 'Spam Volume' },
];

function Markets() {
    const [coins, setCoins] = useState([]);


    useEffect(() => {
        async function fetchApi() {
            const response = await api.get('/market')
            setCoins(response.data.data)
        }
        fetchApi()
    }, [])


    return (
        <>
            <TableMarket rows={coins} headCells={headCells} />
        </>
    )
}

export default Markets;
