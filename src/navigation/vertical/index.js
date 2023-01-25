// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Roles Management'
    },
    {
      title: 'Add Role',
      icon: AccountCogOutline,
      path: '/roles/add'
    },
    {
      title: 'List',
      icon: AccountCogOutline,
      path: '/roles'
    },
    {
      sectionTitle: 'User Management'
    },
    {
      title: 'Add',
      icon: AccountCogOutline,
      path: '/users/add'
    },
    {
      title: 'List',
      icon: AccountCogOutline,
      path: '/users'
    },
    {
      sectionTitle: 'Booking Management'
    },
    {
      title: 'List',
      icon: AccountCogOutline,
      path: '/bookings'
    }
  ]
}

export default navigation
