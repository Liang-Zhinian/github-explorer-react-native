/**
 * MIT License
 *
 * Copyright (c) 2017 johnwakley
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

// @flow

import React from 'react'
import {DrawerNavigator} from 'react-navigation'
import colors from './common/colors'
import {TrendingStackView, MostStarredStackView} from './common/stackNavigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function drawerViewNavigationOptions (label: string, iconName: string) {
  return {
    drawerLabel: label,
    drawerIcon: ({tintColor}) => (
      <MaterialIcons
        name={iconName}
        size={24}
        style={{color: tintColor}}
        accessibilityLabel={label}
      />
    )
  }
}

const TabView = DrawerNavigator(
  {
    Trending: {
      screen: TrendingStackView,
      navigationOptions: drawerViewNavigationOptions('Trending', 'trending-up')
    },
    MostStarred: {
      screen: MostStarredStackView,
      navigationOptions: drawerViewNavigationOptions('Most Starred', 'star')
    }
  },
  {
    drawerWidth: 250,
    contentOptions: {
      activeTintColor: colors.textOnPrimary,
      activeBackgroundColor: colors.primary,
      inactiveTintColor: colors.primary
    }
  }
)

export default TabView
