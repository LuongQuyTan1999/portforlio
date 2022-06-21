import { Paths } from './path';

import {
  DashboardIcon,
  SwapIcon,
  ProfileIcon,
  BugIcon,
  GovernanceIcon,
  DocsIcon,
  TermIcon,
} from '@/icons';

export const sidebar = [
  {
    label: 'Dashboard',
    icon: DashboardIcon,
    to: Paths.Dashboard,
  },
  {
    label: 'Swap',
    icon: SwapIcon,
    to: Paths.Swap,
  },
  {
    label: 'My profile',
    icon: ProfileIcon,
    to: Paths.Profile,
  },
  {
    label: 'Bug Bounty',
    icon: BugIcon,
    to: Paths.BugBounty,
  },
  {
    label: 'Governance',
    icon: GovernanceIcon,
    to: Paths.Governance,
  },
  {
    label: 'Docs ',
    icon: DocsIcon,
    to: Paths.Docs,
  },
  {
    label: 'Terms and Conditions',
    icon: TermIcon,
    to: Paths.TermsAndConditions,
  },
];
