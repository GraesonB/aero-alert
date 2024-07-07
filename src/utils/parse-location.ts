export function parseLocation(location: { [key: string]: any }): Aeroplan.Location {
  const parsedLocation: Aeroplan.Location = {
    type: location.type,
    airport_name: location.airportName,
    city_code: location.cityCode,
    city_name: location.cityName,
    state_code: location.stateCode,
    country_code: location.countryCode,
  };
  return parsedLocation;
}
