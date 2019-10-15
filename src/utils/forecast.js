const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/40819b27a17b9f3a1e54d41f22f19be4/' + lat + ',' + long + '?units=si&lang=en'

    request({url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to the weather srevice!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently '+ body.currently.temperature + ' degrees out. There\'s a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast