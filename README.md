# meteor-cordova-device-id
Facilitates anonymous data collection by allowing client to generate random ID and store on device through Cordova + sync w/ server.
Android only.

## Todo
Prevent collisions by ensuring ID not already taken before claiming.

## Installation
````
meteor add marvin:cordova-device-id
````

## Usage - Client
````
// Generate a new deviceId, store locally and on server
DeviceId.gen(function(error, deviceId) {

})
````

## Full API
````
// get new Random.id() that does not already exist server side.
// saves to server
Meteor.call('deviceId/gen', function(error, deviceId) {

})

// save id to server side storage.
Meteor.call('deviceId/store', deviceId, function(error, insertSuccessful) {

})

// returns true if deviceId already stored on server
Meteor.call('deviceId/isClaimed', function(error, isClaimed) {

})

// save id to localStorage. synchronous.
DeviceId.store(deviceId)
````
