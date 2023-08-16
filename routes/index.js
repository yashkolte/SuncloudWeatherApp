var express = require("express");
var router = express.Router();
var request = require("request");

const apiKey = "7c4bb4a0091ed04b260de4ee9e7433f7";

router.get("/", function (req, res, next) {
  res.render("index");
});

/* GET home page. */
router.get("/suncloud", function (req, res, next) {
  res.render("suncloud", {
    weather: null,
    city_name: null,
    feels_like: null,
    temp_min: null,
    temp_max: null,
    temp: null,
    pressure: null,
    visibility: null,
    humidity: null,
    wind_speed: null,
    wind_deg: null,
    clouds: null,
    country: null,
    sunrise: null,
    sunset: null,
    timezone: null,
    cloud_description: null,
    cloud_icon: null,
    date: null,
    sunsettime: null,
    sunrisetime: null,
    lat: null,
    lon: null,
    tempinc: null,
    dt_txt: null,
    error: null,
  });
});

router.post("/weather", function (req, res) {
  let city = req.body.city;
  console.log(city);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  request(url, function (err, response, body) {
    if (err) {
      res.render("index", { weather: null, error: "Error, please try again" });
    } else {
      let weather = JSON.parse(body);
      console.log(weather);
      if (weather.main == undefined) {
        res.render("index", {
          weather: null,
          error: "Error, please try again",
        });
      } else {
        let city_name = `${weather.name}`;
        let feels_like = `${weather.main.feels_like}`;
        let temp_min = `${Math.trunc([(weather.main.temp_min - 32) * 5] / 9)}`;
        let temp_max = `${Math.trunc([(weather.main.temp_max - 32) * 5] / 9)}`;
        let pressure = `${weather.main.pressure}`;
        let visibility = `${weather.visibility}`;
        let temp = `${Math.trunc([(weather.main.temp - 32) * 5] / 9)}`;

        let humidity = `${weather.main.humidity}`;
        let wind_speed = `${weather.wind.speed}`;
        let wind_deg = `${weather.wind.deg}`;
        let clouds = `${weather.clouds.all}`;
        let country = `${weather.sys.country}`;
        let sunrise = `${weather.sys.sunrise}`;
        let sunset = `${weather.sys.sunset}`;
        let timezone = `${weather.timezone}`;
        let cloud_description = `${weather.weather[0].description}`;
        let cloud_icon = `${weather.weather[0].icon}`;
        let dt = `${weather.dt}`;
        let lat = `${weather.coord.lat}`;
        let lon = `${weather.coord.lon}`;

        var day = new Date(dt * 1000);
        var date = day.toUTCString();

        var snst = new Date(sunset * 1000);
        var sunsettime = snst.toUTCString();

        var snre = new Date(sunrise * 1000);
        var sunrisetime = snre.toUTCString();

        res.render("suncloud", {
          city_name: city_name,
          feels_like: feels_like,
          temp_min: temp_min,
          temp_max: temp_max,
          temp: temp,
          pressure: pressure,
          visibility: visibility,
          humidity: humidity,
          wind_speed: wind_speed,
          wind_deg: wind_deg,
          clouds: clouds,
          country: country,
          sunrise: sunrise,
          sunset: sunset,
          timezone: timezone,
          cloud_description: cloud_description,
          cloud_icon: cloud_icon,
          dt: dt,
          sunsettime: sunsettime,
          sunrisetime: sunrisetime,
          date: date,
          lat: lat,
          lon: lon,

          error: null,
        });
      }
    }
  });
});



// router.post("/forcast", function (req, res) {
//   let lat = req.body.lat;
//   let lon = req.body.lon;

//   let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

//   request(url, function (err, response, body) {
//     if (err) {
//       res.render("index", { forcast: null, error: "Error, please try again" });
//     } else {
//       let forcast = JSON.parse(body);
//       console.log(forcast);

//       if (forcast.main == undefined) {
//         res.render("index", {
//           forcast: null,
//           error: "Error, please try again",
//         });
//       } else {
//         let dt_txt = `${forcast.list[0].dt_txt}`;
//         res.send(dt_txt
//         );
//       }
//     }
//   });
// });

module.exports = router;
