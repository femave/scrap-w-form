import axios from 'axios'

export default {
  getData: () => {
    const URL = `http://localhost:3001`
    return axios.get(URL)
    // .then(res => res.json())
    .then(res => {
      const users = res.data
      const usersMap = users.map(user => {
        return { 
          users: user.username,
          id: user.id          
        }
      })
    //   console.log(forecastDays)
    //   const weatherData = forecastDays.map(day => {
    //     return {
    //       city: city,
    //       temp: day.temp.day,
    //       minTemp: day.temp.min,
    //       maxTemp: day.temp.max,
    //       humidity: day.humidity,
    //       description: day.weather[0].description,
    //       icon: `http://openweathermap.org/img/w/${day.weather[0].icon}.png`,
    //       day: moment.unix(day.dt).format('MMM Do YY')
    //     }
    //   })
      return users
    })
  }

}