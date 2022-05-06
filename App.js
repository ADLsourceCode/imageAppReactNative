import React, { Fragment } from 'react'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

import TabNavigator from './misc/tabNavigator'

export default function App() {
  return (
<Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <TabNavigator />
    </ApplicationProvider>
  </Fragment>
    );
}

