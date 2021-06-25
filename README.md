# goGreen App using 

* React-Native app built using [React-native](https://reactnative.dev/).
* Redux: [Redux](https://redux.js.org/).
* Redux-saga: [Redux-saga](https://redux-saga.js.org/).
* Typescript: [Typescript](https://www.typescriptlang.org/docs/).

### Also integrated for debugging:

* React Native Debugger [react-native-debugger](https://github.com/jhen0409/react-native-debugger)

## Installation And Running
Clone this repository.

### For iOS
1. `yarn install or npm install`
1. `cd ios && npx pod install `
1. `react-native run-ios`
### For Android
1. `yarn install or npm install`
1. `react-native start`
1. `react-native run-android`


## App Flow

- When the user opens the app, the data gets fetched directly from goGreen service.
- User can navigate through all the data and paginate through it till he reaches the end.
- If no data fetched users gets returned a message on the screen.
- User can click on any of the vehicles to view more details about it.
- User can navigate to the website to get more data about the selected vehicle.
- User can go go back from detailsScreen to mainScreen.
- User can search for vehicles by typing any part of the "model" or "brand" and the data gets fetched from the backend accordingly. 



## Screenshots
![Main Screen](https://i.ibb.co/rxTCrZF/photo-2021-06-25-07-41-09.jpg)
![Details Screen](https://i.ibb.co/qdmnDYj/photo-2021-06-25-07-42-02-2.jpg)
![Searching](https://i.ibb.co/hcGSQLc/photo-2021-06-25-07-42-43.jpg)
