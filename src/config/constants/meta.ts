import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Kronos Swap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Kronos Swap), NFTs, and more, on a platform you can trust.',
  image: 'https://Kronos Swap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Kronos Swap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Kronos Swap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Kronos Swap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Kronos Swap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Kronos Swap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Kronos Swap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Kronos Swap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Kronos Swap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Kronos Swap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Kronos Swap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Kronos Swap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Kronos Swap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Kronos Swap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Kronos Swap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Kronos Swap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Kronos Swap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Kronos Swap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Kronos Swap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Kronos Swap Info & Analytics')}`,
        description: 'View statistics for Kronos Swap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Kronos Swap Info & Analytics')}`,
        description: 'View statistics for Kronos Swap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('Kronos Swap Info & Analytics')}`,
        description: 'View statistics for Kronos Swap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('Kronos Swap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('Kronos Swap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('Kronos Swap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('Kronos Swap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('Kronos Swap')}`,
      }
    default:
      return null
  }
}
