import "./chart.css";
import React from 'react';
import {Adsense} from '@ctrl/react-adsense';
import {Pie, PieChart, Tooltip, Text, Cell} from 'recharts';
import GithubLogo from "./assets/image/github.png";
import TenArtists from './TenArtists';


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


export default function Chart({pie, artistToGenres}) {


    const CustomTooltip = ({active, payload}) => {
        if (active && payload) {


            return (
                <div className="custom-tooltip">
                    <Text className="text-chart">{`${payload[0].name} : ${payload[0].value}%`}</Text>
                </div>
            );
        }

        return null;
    };


    return (

        <body>

        <div className="recharts-wrapper">

            <h1 className="chart-title">Your Genre Pie</h1>

            <PieChart className="justify-content-center align-items-center" width={600} height={700}  >
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={pie}
                    cx={250}
                    outerRadius={255}
                    fill="#151718"
                >

                    {
                        pie.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                    }

                </Pie>
                <Tooltip
                    content={CustomTooltip}
                />
            </PieChart>

            <TenArtists artistToGenres={artistToGenres}> </TenArtists>


            <subtitle>Website developed by :> gian <a href="https://github.com/gian0012">
                <img alt="gh" src={GithubLogo}/></a>

            </subtitle>

        </div>

        <Adsense
            client="ca-pub-4553692047764224"
            slot="3870085646"
            style={{ display: 'block' }}
            layout="in-article"
            format="fluid"
        />

        <Adsense
            client="ca-pub-4553692047764224"
            slot="3047958566"
            style={{ width: 500, height: 300 }}
            format="auto"
        />

        </body>
    );
}

