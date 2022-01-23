
import React from 'react'
import { Bar } from 'react-chartjs-2';
const ChartsReport = ( props ) =>
{
    const reportData = {
        labels: props.data,
        datasets: [
            {
                label: 'Report',
                backgroundColor: 'rgb(253,116,155)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                borderRadius: 55,
                data: props.count
            }
        ],
        options: {
            scales: {
                x: {
                    display: false,
                    min: 0.5,
                    max: 2.5,
                    offset: false
                },
                y: {
                    display: false,
                    min: 0.5,
                    max: 2.5
                }
            }
        }
    }

    return (
        <>
            <Bar
                datasetIdKey='id'
                data={ reportData }
                options={ {
                    title: {
                        display: true,
                        text: 'Report Status',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right',
                        maxWidth: 10
                    }
                } }
            />
        </>
    )
}

export default ChartsReport
