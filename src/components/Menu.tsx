import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonPopover,
} from '@ionic/react';

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Inbox',
    url: '/page/Inbox',
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: 'Outbox',
    url: '/page/Outbox',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
  },
  {
    title: 'Favorites',
    url: '/page/Favorites',
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: 'Archived',
    url: '/page/Archived',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp,
  },
  {
    title: 'Trash',
    url: '/page/Trash',
    iosIcon: trashOutline,
    mdIcon: trashSharp,
  },
  {
    title: 'Spam',
    url: '/page/Spam',
    iosIcon: warningOutline,
    mdIcon: warningSharp,
  },
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();
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
