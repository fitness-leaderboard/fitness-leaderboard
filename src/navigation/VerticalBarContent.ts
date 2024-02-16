// ** Type import
import { VerticalNavItemsType } from '../core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      path: '/',
    },
    {
      sectionTitle: 'Fitness',
    },
    // {
    //   title: 'Login',
    //   //path: '/pages/login',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Register',
    //   //path: '/pages/register',
    //   openInNewTab: true
    // },
    {
      title: 'Leaderboard',
      path: '/leaderboard',
      //icon: FormatLetterCase,
    },
    {
      title: 'Challenges',
      path: '/challenge',
      //icon: GoogleCirclesExtended
    },
    {
      title: 'Friendboard',
      path: '/friendboard',
      //icon: GoogleCirclesExtended
    },
    {
      title: 'Account Settings',
      //path: '/account-settings'
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Social',
      path: '/social',
    },
  ]
}

export default navigation
