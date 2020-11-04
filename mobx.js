npm i @react-native-community/async-storage --save
react-native link



MOBX--------------
npm i mobx mobx-react --save
npm i metro-react-native-babel-preset @babel/preset-flow @babel/plugin-proposal-decorators --save-dev

.babelrc
{
  "presets": [
    "module:metro-react-native-babel-preset"
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ]
}
