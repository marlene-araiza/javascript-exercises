const convertToCelsius = function(temperatureInCelsius) {
 c = (temperatureInCelsius - 32) * (5/9);
 cRounded = Math.round(c * 10) / 10;
 return cRounded; 
};

const convertToFahrenheit = function(temperatureInFahreinheit) { 
  f = (temperatureInFahreinheit * (9/5) + 32);
  fRounded = Math.round(f * 10) / 10;
  return fRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
