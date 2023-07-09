import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import { ellipse, square, triangle } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';

import Coach from './Coach'; // import the Coach component you created
// import History from './History';
// import Flashcards from './Flashcards';
// import Settings from './Settings';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
//import '@ionic/react/css/normalize.css';
//import '@ionic/react/css/structure.css';
//import '@ionic/react/css/typography.css';
/*
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
*/
/* Theme variables */
//import './theme/variables.css';

const App: React.FC = () => (
  <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/coach" component={Coach} exact={true} />
        {/* Uncomment these as you create these components */}
        {/* <Route path="/history" component={History} exact={true} /> */}
        {/* <Route path="/flashcards" component={Flashcards} exact={true} /> */}
        {/* <Route path="/settings" component={Settings} exact={true} /> */}
        <Route path="/" render={() => <Redirect to="/coach" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="coach" href="/coach">
          <IonIcon icon={triangle} />
          <IonLabel>Coach</IonLabel>
        </IonTabButton>
        {/* Uncomment these as you create these components */}
        {/* <IonTabButton tab="history" href="/history">
          <IonIcon icon={ellipse} />
          <IonLabel>History</IonLabel>
        </IonTabButton> */}
        {/* <IonTabButton tab="flashcards" href="/flashcards">
          <IonIcon icon={square} />
          <IonLabel>Flashcards</IonLabel>
        </IonTabButton> */}
        {/* <IonTabButton tab="settings" href="/settings">
          <IonIcon icon={square} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton> */}
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
);

export default App;
