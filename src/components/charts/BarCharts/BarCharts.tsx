import React from 'react'
import { Bar } from 'react-chartjs-2'

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: 'Empty',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: '#1C4E80',
        },
        {
            label: 'Filled',
            data: [2, 3, 20, 5, 1, 4],
            backgroundColor: '#A5D8DD',
        }
    ],
}

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
}

class GroupedBar extends React.Component {
    render() {
        return (
            <Bar data={data} options={options} height={125} />
        )
    }
}

export default GroupedBar