import React from 'react';
import { BiPin } from 'react-icons/bi';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import InfoIcon from '@material-ui/icons/Info';

export const SidebarData = [
  {
    title: 'Pins',
    icon: <BiPin />,
    link: '/',
  },
  {
    title: 'Add or View Location Stats',
    icon: <LocationOnIcon />,
    link: '/locations',
  },
  {
    title: 'Notifs',
    icon: <NotificationsActiveIcon />,
    link: '/notifs',
  },
  {
    title: 'Sources',
    icon: <InfoIcon />,
    link: '/sources',
  },
];
