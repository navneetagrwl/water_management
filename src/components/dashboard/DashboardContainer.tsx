import React from 'react';
import { IonCard, IonCardContent } from '@ionic/react';
import PieChart from '../charts/pieCharts/PieChart';
import BarChart from '../charts/BarCharts/BarCharts';
import Table from '../table/Table'
import './DashboardContainer.css';

const chartConfig = {
  chartData: {
    labels: ['Empty', 'Filled'],
    datasets: [
      {
        label: 'Water',
        backgroundColor: ['#A5D8DD', '#1C4E80'],
        data: [65, 59],
        borderWidth: 0
      }
    ]
  },
  options: {
    title: {
      display: false,
      text: '',
      fontSize: 20
    },
    legend: {
      display: true,
      position: 'right'
    }
  }
}

const column = [
  { label: 'First Name', id: 'firstName' },
  { label: 'Last Name', id: 'lastName' },
  { label: 'Points 1', id: 'point1' },
  { label: 'Points 2', id: 'point2' },
  { label: 'Points 3', id: 'point3' },
]

const row = [
  { firstName: 'First Name', lastName: 'firstName', point1: 12 },
  { lastName: 'firstName1', firstName: 'First Name1', point2: 13 },
  { point3: 12, firstName: 'First Name2', lastName: 'firstName2' },
]

// const row: any = [];

class DashboardContainer extends React.Component {
  render() {
    return (
      <div>
        <div className="parent-container">
          <div className="container-medium">
            <IonCard>
              <IonCardContent>
                <PieChart chartConfig={chartConfig} />
              </IonCardContent>
            </IonCard>
          </div>
          <div className="container-large">
            <IonCard>
              <IonCardContent>
                <BarChart />
              </IonCardContent>
            </IonCard>
          </div>
        </div>
        <div>
          <IonCard>
            <IonCardContent>
              <div className="table-container">
                <Table columns={column} rows={row} />
              </div>
            </IonCardContent>
          </IonCard>
        </div>
      </div>
    );
  }
};

export default DashboardContainer;
