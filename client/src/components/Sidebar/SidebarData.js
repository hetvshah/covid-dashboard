import React from 'react';
import { AiFillPushpin } from 'react-icons/ai';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import InfoIcon from '@material-ui/icons/Info';

export const SidebarData = [
  {
    title: 'Pins',
    icon: <AiFillPushpin />,
    link: '/',
  },
  {
    title: 'Add or View Location',
    icon: <LocationOnIcon />,
    link: '/locations',
  },
  {
    title: 'Notifications',
    icon: <NotificationsActiveIcon />,
    link: '/notifs',
  },
  {
    title: 'Source',
    icon: <InfoIcon />,
    link: '/sources',
  },
];
