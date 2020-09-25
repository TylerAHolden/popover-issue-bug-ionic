import { IonButton, IonContent, IonMenu, IonPopover } from '@ionic/react';

import React, { useState } from 'react';

import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const Menu: React.FC = () => {
  const [showPopover, setShowPopover] = useState();

  const openPopover = (e: any) => {
    e.persist();
    setShowPopover(e);
  };

  return (
    <IonMenu contentId='main' type='overlay'>
      <IonContent>
        <IonPopover
          showBackdrop={false}
          animated={false}
          translucent={true}
          mode='ios'
          event={showPopover}
          isOpen={showPopover ? true : false}
          onDidDismiss={() => setShowPopover(undefined)}
        >
          <p>Popover content here</p>
        </IonPopover>
        <IonButton onClick={(e) => openPopover(e)}>Open Popover</IonButton>
        <p>
          TEXT HERE
          <br />
        </p>
        <p>
          TEXT HERE
          <br />
        </p>
        <p>
          TEXT HERE
          <br />
        </p>
        <p>
          TEXT HERE
          <br />
        </p>
        <p>
          TEXT HERE
          <br />
        </p>
        <p>
          TEXT HERE
          <br />
        </p>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
