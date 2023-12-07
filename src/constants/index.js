import {
  bank,
  bullion,
  consumers,
  customerDashboard,
  dashboard,
  faq,
  network,
  operations,
  trasactions,
} from '../assets/index';

const navLinks = [
  {
    icon: dashboard,
    label: 'Dashboard',
  },
  {
    icon: bullion,
    label: 'Bullion Operations',
  },
  {
    icon: trasactions,
    label: 'Transactions',
  },
  {
    icon: network,
    label: 'Your Network',
  },
  {
    icon: consumers,
    label: 'Consumers',
  },
  {
    icon: operations,
    label: 'Other Operations',
  },
  {
    icon: bank,
    label: 'Manage Bank Accounts',
  },
  {
    icon: faq,
    label: 'FAQ',
  },
  {
    icon: customerDashboard,
    label: 'Customize Dashboard',
  },
];

export default navLinks;

export const stockGrams = [
  {
    name: 'Gold',
    gm: '7.3',
  },
  { name: 'Silver', gm: '8.3' },
];
