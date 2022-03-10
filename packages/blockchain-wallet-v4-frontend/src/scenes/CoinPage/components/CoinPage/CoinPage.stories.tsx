import React from 'react'
import { IntlProvider } from 'react-intl'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { defaultAboutSectionActions } from '../../mocks/defaultAboutSectionActions'
import { defaultHoldingsCardActions } from '../../mocks/defaultHoldingsCardActions'
import * as AboutSection from '../AboutSection/AboutSection.stories'
import * as AlertCard from '../AlertCard/AlertCard.stories'
import * as CoinHeader from '../CoinHeader/CoinHeader.stories'
import * as HoldingsCard from '../HoldingsCard/HoldingsCard.stories'
import { CoinPage } from './CoinPage'
import { CoinPageComponent } from './types'

const coinPageStoriesMeta: ComponentMeta<CoinPageComponent> = {
  argTypes: {
    about: {
      defaultValue: 'bitcoin',
      mapping: {
        bitcoin: (
          // @ts-ignore
          <AboutSection.Bitcoin
            {...AboutSection.Bitcoin.args}
            actions={defaultAboutSectionActions}
          />
        ),
        solana: (
          // @ts-ignore
          <AboutSection.Solana {...AboutSection.Solana.args} actions={defaultAboutSectionActions} />
        )
      },
      options: ['bitcoin', 'solana']
    },
    activity: {
      defaultValue: null
    },
    alertCard: {
      defaultValue: 'not_tradable',
      mapping: {
        not_tradable: (
          // @ts-ignore
          <AlertCard.NotTradable {...AlertCard.NotTradable.args} />
        )
      },
      options: ['not_tradable']
    },
    chart: {
      defaultValue: null
    },
    favoriteButton: {
      defaultValue: null
    },
    header: {
      defaultValue: 'Bitcoin',
      mapping: {
        Bitcoin: (
          <CoinHeader.Bitcoin
            // @ts-ignore
            coinCode={CoinHeader.Bitcoin.args.coinCode}
            // @ts-ignore
            coinDescription={CoinHeader.Bitcoin.args.coinDescription}
            // @ts-ignore
            coinName={CoinHeader.Bitcoin.args.coinName}
          />
        ),
        Ethereum: (
          <CoinHeader.Ethereum
            // @ts-ignore
            coinCode={CoinHeader.Ethereum.args.coinCode}
            // @ts-ignore
            coinDescription={CoinHeader.Ethereum.args.coinDescription}
            // @ts-ignore
            coinName={CoinHeader.Ethereum.args.coinName}
          />
        )
      },
      options: ['Ethereum', 'Bitcoin']
    },
    holdings: {
      defaultValue: 'BitcoinWithBalance',

      mapping: {
        BitcoinEmpty: (
          <HoldingsCard.BitcoinEmpty
            // @ts-ignore
            coinCode={HoldingsCard.BitcoinEmpty.args.coinCode}
            // @ts-ignore
            coinTotal={HoldingsCard.BitcoinEmpty.args.coinTotal}
            // @ts-ignore
            total={HoldingsCard.BitcoinEmpty.args.total}
            actions={defaultHoldingsCardActions}
          />
        ),
        BitcoinWithBalance: (
          <HoldingsCard.Bitcoin
            // @ts-ignore
            coinCode={HoldingsCard.Bitcoin.args.coinCode}
            // @ts-ignore
            coinTotal={HoldingsCard.Bitcoin.args.coinTotal}
            // @ts-ignore
            total={HoldingsCard.Bitcoin.args.total}
            actions={defaultHoldingsCardActions}
          />
        )
      },
      options: ['BitcoinWithBalance', 'BitcoinEmpty']
    },
    promoCard: {
      defaultValue: null
    },
    recurringBuys: {
      defaultValue: null
    },
    wallets: {
      defaultValue: null
    }
  },
  component: CoinPage,
  decorators: [(Story) => <IntlProvider locale='en'>{Story()}</IntlProvider>],
  title: 'Pages/CoinPage'
}

const Template: ComponentStory<CoinPageComponent> = (args) => <CoinPage {...args} />

export const Default = Template.bind({})
Default.args = {
  about: 'bitcoin',
  activity: null,
  alertCard: 'not_tradable',
  chart: null,
  favoriteButton: null,
  header: 'Bitcoin',
  holdings: 'BitcoinWithBalance',
  promoCard: null,
  recurringBuys: null,
  wallets: null
}

export default coinPageStoriesMeta