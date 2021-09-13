import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MiniVitalik',
  description:
    'The most popular AMM on BSC by user count! Earn Waifu through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by MiniVitalik), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | MiniVitalik',
  },
  '/competition': {
    title: 'Trading Battle | MiniVitalik',
  },
  '/prediction': {
    title: 'Prediction | MiniVitalik',
  },
  '/farms': {
    title: 'Farms | MiniVitalik',
  },
  '/pools': {
    title: 'Pools | MiniVitalik',
  },
  '/lottery': {
    title: 'Lottery | MiniVitalik',
  },
  '/collectibles': {
    title: 'Collectibles | MiniVitalik',
  },
  '/ifo': {
    title: 'Initial Farm Offering | MiniVitalik',
  },
  '/teams': {
    title: 'Leaderboard | MiniVitalik',
  },
  '/profile/tasks': {
    title: 'Task Center | MiniVitalik',
  },
  '/profile': {
    title: 'Your Profile | MiniVitalik',
  },
}
