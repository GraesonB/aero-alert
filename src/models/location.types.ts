namespace Aeroplan {
  export type LocationId = string;
  export type Location = {
    type: string;
    airport_name?: string;
    city_code: string;
    city_name: string;
    state_code?: string;
    country_code: string;
  };
}
