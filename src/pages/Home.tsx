import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import DashboardContainer from '../components/dashboard/DashboardContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="header-container">
          <IonTitle>Water Management</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="background" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Water Management</IonTitle>
          </IonToolbar>
        </IonHeader>
        <DashboardContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
