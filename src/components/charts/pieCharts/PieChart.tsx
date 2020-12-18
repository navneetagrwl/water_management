import React from 'react';
import { Pie } from 'react-chartjs-2';

interface IControlChartProps {
    chartConfig?: any
}

class PieChart extends React.Component<IControlChartProps> {
    render() {
        return (
            <Pie
                data={this.props.chartConfig.chartData}
                options={this.props.chartConfig.options}
                height={125}
            />
        )
    }
}

export default PieChart;