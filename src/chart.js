import "./chart.css";
import React from 'react';
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


        <div className="chart-items mx-auto my-auto justify-content-center align-items-center">
            <body className="chart-gradient">

            <h1 className="chart-title">Your Genre Pie</h1>
            <PieChart width={1250} height={700}>
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={pie}
                    cx={650}
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

            </body>
        </div>
    );
}

