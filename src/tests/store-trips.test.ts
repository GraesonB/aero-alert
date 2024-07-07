import { DBConnection } from "../db-connection";
import { storeTrips } from "../utils/store-trips";

describe("storeFlights", () => {
  let db: DBConnection;

  beforeEach(async () => {
    db = new DBConnection();
    await db.init();
  });

  afterEach(async () => {
    await db.close();
  });

  it("should store flights correctly", async () => {
    const groups = [
      {
        boundDetails: {
          originLocationCode: "YYC",
          destinationLocationCode: "NRT",
          duration: 63900,
          ranking: 64,
          segments: [
            {
              flightId: "SEG-AC201-YYCYVR-2024-10-01-0605",
              connectionTime: 5040,
            },
            {
              flightId: "SEG-AC8842-YVRSFO-2024-10-01-0805",
              connectionTime: 4260,
            },
            {
              flightId: "SEG-UA837-SFONRT-2024-10-01-1145",
              arrivalDaysDifference: 1,
            },
          ],
        },
        airBounds: [
          {
            airBoundId: "BC1-1-SLNR-12660106206640730629-12",
            fareFamilyCode: "STANDARD",
            isCheapestOffer: true,
            availabilityDetails: [
              {
                flightId: "SEG-AC201-YYCYVR-2024-10-01-0605",
                cabin: "eco",
                bookingClass: "X",
                statusCode: "HK",
                quota: 9,
                mileagePercentage: 6.72,
              },
              {
                flightId: "SEG-AC8842-YVRSFO-2024-10-01-0805",
                cabin: "eco",
                bookingClass: "G",
                statusCode: "HK",
                quota: 9,
                mileagePercentage: 12.58,
              },
              {
                flightId: "SEG-UA837-SFONRT-2024-10-01-1145",
                cabin: "eco",
                bookingClass: "X",
                statusCode: "HK",
                quota: 9,
                mileagePercentage: 80.7,
              },
            ],
            fareInfos: [
              {
                fareType: "unifares",
                fareClass: "XBP00ATG",
                pricedPassengerTypeCodes: ["ADT"],
                travelerIds: ["ADT-1"],
                ticketDesignator: "AE2",
                corporateCode: "169147",
                flightIds: [
                  "SEG-AC8842-YVRSFO-2024-10-01-0805",
                  "SEG-AC201-YYCYVR-2024-10-01-0605",
                  "SEG-UA837-SFONRT-2024-10-01-1145",
                ],
              },
            ],
            prices: {
              unitPrices: [
                {
                  travelerIds: ["ADT-1"],
                  prices: [
                    {
                      base: 0,
                      total: 14237,
                      currencyCode: "CAD",
                      totalTaxes: 14237,
                    },
                  ],
                  milesConversion: {
                    convertedMiles: {
                      base: 36200,
                      total: 50437,
                      totalTaxes: 14237,
                    },
                    remainingNonConverted: {
                      total: 0,
                      currencyCode: "CAD",
                      totalTaxes: 0,
                    },
                  },
                },
              ],
              totalPrices: [
                {
                  base: 0,
                  total: 14237,
                  currencyCode: "CAD",
                  totalTaxes: 14237,
                },
              ],
              isRedemption: false,
              milesConversion: {
                convertedMiles: {
                  base: 36200,
                  total: 50437,
                  totalTaxes: 14237,
                },
                remainingNonConverted: {
                  total: 0,
                  currencyCode: "CAD",
                  totalTaxes: 0,
                },
              },
            },
            airOffer: {
              totalPrice: {
                value: 14237,
              },
              prices: {
                unitPrices: [
                  {
                    travelerIds: ["ADT-1"],
                    prices: [
                      {
                        base: 0,
                        total: 14237,
                        currencyCode: "CAD",
                        totalTaxes: 14237,
                      },
                    ],
                    milesConversion: {
                      convertedMiles: {
                        base: 36200,
                        total: 50437,
                        totalTaxes: 14237,
                      },
                      remainingNonConverted: {
                        total: 0,
                        currencyCode: "CAD",
                        totalTaxes: 0,
                      },
                    },
                  },
                ],
                totalPrices: [
                  {
                    base: 0,
                    total: 14237,
                    currencyCode: "CAD",
                    totalTaxes: 14237,
                  },
                ],
                isRedemption: false,
                milesConversion: {
                  convertedMiles: {
                    base: 36200,
                    total: 50437,
                    totalTaxes: 14237,
                  },
                  remainingNonConverted: {
                    total: 0,
                    currencyCode: "CAD",
                    totalTaxes: 0,
                  },
                },
              },
              milesConversion: {
                convertedMiles: {
                  base: 36200,
                  total: 50437,
                  totalTaxes: 14237,
                },
                remainingNonConverted: {
                  total: 0,
                },
              },
            },
          },
          {
            airBoundId: "BC1-1-SLNR-12660106206640730629-13",
            fareFamilyCode: "FLEX",
            availabilityDetails: [
              {
                flightId: "SEG-AC201-YYCYVR-2024-10-01-0605",
                cabin: "eco",
                bookingClass: "X",
                statusCode: "HK",
                quota: 9,
                mileagePercentage: 6.72,
              },
              {
                flightId: "SEG-AC8842-YVRSFO-2024-10-01-0805",
                cabin: "eco",
                bookingClass: "G",
                statusCode: "HK",
                quota: 9,
                mileagePercentage: 12.58,
              },
              {
                flightId: "SEG-UA837-SFONRT-2024-10-01-1145",
                cabin: "eco",
                bookingClass: "X",
                statusCode: "HK",
                quota: 9,
                mileagePercentage: 80.7,
              },
            ],
            fareInfos: [
              {
                fareType: "unifares",
                fareClass: "XBP00AFL",
                pricedPassengerTypeCodes: ["ADT"],
                travelerIds: ["ADT-1"],
                ticketDesignator: "AE2",
                corporateCode: "169147",
                flightIds: [
                  "SEG-AC201-YYCYVR-2024-10-01-0605",
                  "SEG-UA837-SFONRT-2024-10-01-1145",
                  "SEG-AC8842-YVRSFO-2024-10-01-0805",
                ],
              },
            ],
            prices: {
              unitPrices: [
                {
                  travelerIds: ["ADT-1"],
                  prices: [
                    {
                      base: 0,
                      total: 14237,
                      currencyCode: "CAD",
                      totalTaxes: 14237,
                    },
                  ],
                  milesConversion: {
                    convertedMiles: {
                      base: 52200,
                      total: 66437,
                      totalTaxes: 14237,
                    },
                    remainingNonConverted: {
                      total: 0,
                      currencyCode: "CAD",
                      totalTaxes: 0,
                    },
                  },
                },
              ],
              totalPrices: [
                {
                  base: 0,
                  total: 14237,
                  currencyCode: "CAD",
                  totalTaxes: 14237,
                },
              ],
              isRedemption: false,
              milesConversion: {
                convertedMiles: {
                  base: 52200,
                  total: 66437,
                  totalTaxes: 14237,
                },
                remainingNonConverted: {
                  total: 0,
                  currencyCode: "CAD",
                  totalTaxes: 0,
                },
              },
            },
            airOffer: {
              totalPrice: {
                value: 14237,
              },
              prices: {
                unitPrices: [
                  {
                    travelerIds: ["ADT-1"],
                    prices: [
                      {
                        base: 0,
                        total: 14237,
                        currencyCode: "CAD",
                        totalTaxes: 14237,
                      },
                    ],
                    milesConversion: {
                      convertedMiles: {
                        base: 52200,
                        total: 66437,
                        totalTaxes: 14237,
                      },
                      remainingNonConverted: {
                        total: 0,
                        currencyCode: "CAD",
                        totalTaxes: 0,
                      },
                    },
                  },
                ],
                totalPrices: [
                  {
                    base: 0,
                    total: 14237,
                    currencyCode: "CAD",
                    totalTaxes: 14237,
                  },
                ],
                isRedemption: false,
                milesConversion: {
                  convertedMiles: {
                    base: 52200,
                    total: 66437,
                    totalTaxes: 14237,
                  },
                  remainingNonConverted: {
                    total: 0,
                    currencyCode: "CAD",
                    totalTaxes: 0,
                  },
                },
              },
              milesConversion: {
                convertedMiles: {
                  base: 52200,
                  total: 66437,
                  totalTaxes: 14237,
                },
                remainingNonConverted: {
                  total: 0,
                },
              },
            },
          },
          {
            airBoundId: "BC1-1-SLNR-12660106206640730629-14",
            fareFamilyCode: "LATITUDE",
            availabilityDetails: [
              {
                flightId: "SEG-AC201-YYCYVR-2024-10-01-0605",
                cabin: "eco",
                bookingClass: "X",
                statusCode: "HK",
                quota: 9,
                mileagePercentage: 6.72,
              },
              {
                flightId: "SEG-AC8842-YVRSFO-2024-10-01-0805",
                cabin: "eco",
                bookingClass: "G",
                statusCode: "HK",
                quota: 9,
                mileagePercentage: 12.58,
              },
              {
                flightId: "SEG-UA837-SFONRT-2024-10-01-1145",
                cabin: "eco",
                bookingClass: "X",
                statusCode: "HK",
                quota: 9,
                mileagePercentage: 80.7,
              },
            ],
            fareInfos: [
              {
                fareType: "unifares",
                fareClass: "XBP00ALT",
                pricedPassengerTypeCodes: ["ADT"],
                travelerIds: ["ADT-1"],
                ticketDesignator: "AE2",
                corporateCode: "169147",
                flightIds: [
                  "SEG-AC201-YYCYVR-2024-10-01-0605",
                  "SEG-UA837-SFONRT-2024-10-01-1145",
                  "SEG-AC8842-YVRSFO-2024-10-01-0805",
                ],
              },
            ],
            prices: {
              unitPrices: [
                {
                  travelerIds: ["ADT-1"],
                  prices: [
                    {
                      base: 0,
                      total: 14237,
                      currencyCode: "CAD",
                      totalTaxes: 14237,
                    },
                  ],
                  milesConversion: {
                    convertedMiles: {
                      base: 76200,
                      total: 90437,
                      totalTaxes: 14237,
                    },
                    remainingNonConverted: {
                      total: 0,
                      currencyCode: "CAD",
                      totalTaxes: 0,
                    },
                  },
                },
              ],
              totalPrices: [
                {
                  base: 0,
                  total: 14237,
                  currencyCode: "CAD",
                  totalTaxes: 14237,
                },
              ],
              isRedemption: false,
              milesConversion: {
                convertedMiles: {
                  base: 76200,
                  total: 90437,
                  totalTaxes: 14237,
                },
                remainingNonConverted: {
                  total: 0,
                  currencyCode: "CAD",
                  totalTaxes: 0,
                },
              },
            },
            airOffer: {
              totalPrice: {
                value: 14237,
              },
              prices: {
                unitPrices: [
                  {
                    travelerIds: ["ADT-1"],
                    prices: [
                      {
                        base: 0,
                        total: 14237,
                        currencyCode: "CAD",
                        totalTaxes: 14237,
                      },
                    ],
                    milesConversion: {
                      convertedMiles: {
                        base: 76200,
                        total: 90437,
                        totalTaxes: 14237,
                      },
                      remainingNonConverted: {
                        total: 0,
                        currencyCode: "CAD",
                        totalTaxes: 0,
                      },
                    },
                  },
                ],
                totalPrices: [
                  {
                    base: 0,
                    total: 14237,
                    currencyCode: "CAD",
                    totalTaxes: 14237,
                  },
                ],
                isRedemption: false,
                milesConversion: {
                  convertedMiles: {
                    base: 76200,
                    total: 90437,
                    totalTaxes: 14237,
                  },
                  remainingNonConverted: {
                    total: 0,
                    currencyCode: "CAD",
                    totalTaxes: 0,
                  },
                },
              },
              milesConversion: {
                convertedMiles: {
                  base: 76200,
                  total: 90437,
                  totalTaxes: 14237,
                },
                remainingNonConverted: {
                  total: 0,
                },
              },
            },
          },
          {
            airBoundId: "BC1-1-SLNR-12660106206640730629-61",
            fareFamilyCode: "EXECLOW",
            availabilityDetails: [
              {
                flightId: "SEG-AC201-YYCYVR-2024-10-01-0605",
                cabin: "business",
                bookingClass: "I",
                statusCode: "HK",
                quota: 2,
                mileagePercentage: 6.72,
              },
              {
                flightId: "SEG-AC8842-YVRSFO-2024-10-01-0805",
                cabin: "business",
                bookingClass: "P",
                statusCode: "HK",
                quota: 7,
                mileagePercentage: 12.58,
              },
              {
                flightId: "SEG-UA837-SFONRT-2024-10-01-1145",
                cabin: "eco",
                bookingClass: "X",
                statusCode: "HK",
                quota: 9,
                mileagePercentage: 80.7,
              },
            ],
            fareInfos: [
              {
                fareType: "unifares",
                fareClass: "IBP00AEL",
                pricedPassengerTypeCodes: ["ADT"],
                travelerIds: ["ADT-1"],
                ticketDesignator: "AE2",
                corporateCode: "169147",
                flightIds: [
                  "SEG-AC201-YYCYVR-2024-10-01-0605",
                  "SEG-AC8842-YVRSFO-2024-10-01-0805",
                  "SEG-UA837-SFONRT-2024-10-01-1145",
                ],
              },
            ],
            prices: {
              unitPrices: [
                {
                  travelerIds: ["ADT-1"],
                  prices: [
                    {
                      base: 0,
                      total: 14237,
                      currencyCode: "CAD",
                      totalTaxes: 14237,
                    },
                  ],
                  milesConversion: {
                    convertedMiles: {
                      base: 54300,
                      total: 68537,
                      totalTaxes: 14237,
                    },
                    remainingNonConverted: {
                      total: 0,
                      currencyCode: "CAD",
                      totalTaxes: 0,
                    },
                  },
                },
              ],
              totalPrices: [
                {
                  base: 0,
                  total: 14237,
                  currencyCode: "CAD",
                  totalTaxes: 14237,
                },
              ],
              isRedemption: false,
              milesConversion: {
                convertedMiles: {
                  base: 54300,
                  total: 68537,
                  totalTaxes: 14237,
                },
                remainingNonConverted: {
                  total: 0,
                  currencyCode: "CAD",
                  totalTaxes: 0,
                },
              },
            },
            airOffer: {
              totalPrice: {
                value: 14237,
              },
              prices: {
                unitPrices: [
                  {
                    travelerIds: ["ADT-1"],
                    prices: [
                      {
                        base: 0,
                        total: 14237,
                        currencyCode: "CAD",
                        totalTaxes: 14237,
                      },
                    ],
                    milesConversion: {
                      convertedMiles: {
                        base: 54300,
                        total: 68537,
                        totalTaxes: 14237,
                      },
                      remainingNonConverted: {
                        total: 0,
                        currencyCode: "CAD",
                        totalTaxes: 0,
                      },
                    },
                  },
                ],
                totalPrices: [
                  {
                    base: 0,
                    total: 14237,
                    currencyCode: "CAD",
                    totalTaxes: 14237,
                  },
                ],
                isRedemption: false,
                milesConversion: {
                  convertedMiles: {
                    base: 54300,
                    total: 68537,
                    totalTaxes: 14237,
                  },
                  remainingNonConverted: {
                    total: 0,
                    currencyCode: "CAD",
                    totalTaxes: 0,
                  },
                },
              },
              milesConversion: {
                convertedMiles: {
                  base: 54300,
                  total: 68537,
                  totalTaxes: 14237,
                },
                remainingNonConverted: {
                  total: 0,
                },
              },
            },
            isMixedCabin: true,
          },
          {
            airBoundId: "BC1-1-SLNR-12660106206640730629-62",
            fareFamilyCode: "EXECFLEX",
            availabilityDetails: [
              {
                flightId: "SEG-AC201-YYCYVR-2024-10-01-0605",
                cabin: "business",
                bookingClass: "I",
                statusCode: "HK",
                quota: 2,
                mileagePercentage: 6.72,
              },
              {
                flightId: "SEG-AC8842-YVRSFO-2024-10-01-0805",
                cabin: "business",
                bookingClass: "P",
                statusCode: "HK",
                quota: 7,
                mileagePercentage: 12.58,
              },
              {
                flightId: "SEG-UA837-SFONRT-2024-10-01-1145",
                cabin: "eco",
                bookingClass: "X",
                statusCode: "HK",
                quota: 9,
                mileagePercentage: 80.7,
              },
            ],
            fareInfos: [
              {
                fareType: "unifares",
                fareClass: "IBP00AEF",
                pricedPassengerTypeCodes: ["ADT"],
                travelerIds: ["ADT-1"],
                ticketDesignator: "AE2",
                corporateCode: "169147",
                flightIds: [
                  "SEG-UA837-SFONRT-2024-10-01-1145",
                  "SEG-AC8842-YVRSFO-2024-10-01-0805",
                  "SEG-AC201-YYCYVR-2024-10-01-0605",
                ],
              },
            ],
            prices: {
              unitPrices: [
                {
                  travelerIds: ["ADT-1"],
                  prices: [
                    {
                      base: 0,
                      total: 14237,
                      currencyCode: "CAD",
                      totalTaxes: 14237,
                    },
                  ],
                  milesConversion: {
                    convertedMiles: {
                      base: 68300,
                      total: 82537,
                      totalTaxes: 14237,
                    },
                    remainingNonConverted: {
                      total: 0,
                      currencyCode: "CAD",
                      totalTaxes: 0,
                    },
                  },
                },
              ],
              totalPrices: [
                {
                  base: 0,
                  total: 14237,
                  currencyCode: "CAD",
                  totalTaxes: 14237,
                },
              ],
              isRedemption: false,
              milesConversion: {
                convertedMiles: {
                  base: 68300,
                  total: 82537,
                  totalTaxes: 14237,
                },
                remainingNonConverted: {
                  total: 0,
                  currencyCode: "CAD",
                  totalTaxes: 0,
                },
              },
            },
            airOffer: {
              totalPrice: {
                value: 14237,
              },
              prices: {
                unitPrices: [
                  {
                    travelerIds: ["ADT-1"],
                    prices: [
                      {
                        base: 0,
                        total: 14237,
                        currencyCode: "CAD",
                        totalTaxes: 14237,
                      },
                    ],
                    milesConversion: {
                      convertedMiles: {
                        base: 68300,
                        total: 82537,
                        totalTaxes: 14237,
                      },
                      remainingNonConverted: {
                        total: 0,
                        currencyCode: "CAD",
                        totalTaxes: 0,
                      },
                    },
                  },
                ],
                totalPrices: [
                  {
                    base: 0,
                    total: 14237,
                    currencyCode: "CAD",
                    totalTaxes: 14237,
                  },
                ],
                isRedemption: false,
                milesConversion: {
                  convertedMiles: {
                    base: 68300,
                    total: 82537,
                    totalTaxes: 14237,
                  },
                  remainingNonConverted: {
                    total: 0,
                    currencyCode: "CAD",
                    totalTaxes: 0,
                  },
                },
              },
              milesConversion: {
                convertedMiles: {
                  base: 68300,
                  total: 82537,
                  totalTaxes: 14237,
                },
                remainingNonConverted: {
                  total: 0,
                },
              },
            },
            isMixedCabin: true,
          },
        ],
      },
    ];

    const flights = {
      "SEG-AC558-YVRLAX-2024-10-01-1835": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "558",
        departure: {
          locationCode: "YVR",
          dateTime: "2024-10-01T18:35:00.000-07:00",
          terminal: "M",
        },
        arrival: {
          locationCode: "LAX",
          dateTime: "2024-10-01T21:33:00.000-07:00",
          terminal: "6",
        },
        aircraftCode: "7M8",
        duration: 10680,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC128-YVRYYZ-2024-10-01-2320": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "128",
        departure: {
          locationCode: "YVR",
          dateTime: "2024-10-01T23:20:00.000-07:00",
          terminal: "M",
        },
        arrival: {
          locationCode: "YYZ",
          dateTime: "2024-10-02T06:51:00.000-04:00",
          terminal: "1",
        },
        aircraftCode: "7M8",
        duration: 16260,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC144-YYCYYZ-2024-10-01-1215": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "144",
        departure: {
          locationCode: "YYC",
          dateTime: "2024-10-01T12:15:00.000-06:00",
        },
        arrival: {
          locationCode: "YYZ",
          dateTime: "2024-10-01T18:05:00.000-04:00",
          terminal: "1",
        },
        aircraftCode: "7M8",
        duration: 13800,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC7958-YTZYUL-2024-10-02-1020": {
        marketingAirlineCode: "AC",
        operatingAirlineName: "AIR CANADA EXPRESS - JAZZ",
        marketingFlightNumber: "7958",
        departure: {
          locationCode: "YTZ",
          dateTime: "2024-10-02T10:20:00.000-04:00",
        },
        arrival: {
          locationCode: "YUL",
          dateTime: "2024-10-02T11:33:00.000-04:00",
        },
        aircraftCode: "DH4",
        duration: 4380,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-UA131-EWRHND-2024-10-02-1020": {
        marketingAirlineCode: "UA",
        operatingAirlineCode: "UA",
        marketingFlightNumber: "131",
        departure: {
          locationCode: "EWR",
          dateTime: "2024-10-02T10:20:00.000-04:00",
          terminal: "C",
        },
        arrival: {
          locationCode: "HND",
          dateTime: "2024-10-03T13:35:00.000+09:00",
          terminal: "3",
        },
        aircraftCode: "777",
        duration: 51300,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC3-YVRNRT-2024-10-01-1250": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "3",
        departure: {
          locationCode: "YVR",
          dateTime: "2024-10-01T12:50:00.000-07:00",
          terminal: "M",
        },
        arrival: {
          locationCode: "NRT",
          dateTime: "2024-10-02T14:55:00.000+09:00",
          terminal: "1",
        },
        aircraftCode: "77W",
        duration: 36300,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC109-YYZYVR-2024-10-01-0900": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "109",
        departure: {
          locationCode: "YYZ",
          dateTime: "2024-10-01T09:00:00.000-04:00",
          terminal: "1",
        },
        arrival: {
          locationCode: "YVR",
          dateTime: "2024-10-01T10:53:00.000-07:00",
          terminal: "M",
        },
        aircraftCode: "789",
        duration: 17580,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC3-YVRNRT-2024-10-02-1250": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "3",
        departure: {
          locationCode: "YVR",
          dateTime: "2024-10-02T12:50:00.000-07:00",
          terminal: "M",
        },
        arrival: {
          locationCode: "NRT",
          dateTime: "2024-10-03T14:55:00.000+09:00",
          terminal: "1",
        },
        aircraftCode: "77W",
        duration: 36300,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC8872-YYZEWR-2024-10-02-0630": {
        marketingAirlineCode: "AC",
        operatingAirlineName: "AIR CANADA EXPRESS - JAZZ",
        marketingFlightNumber: "8872",
        departure: {
          locationCode: "YYZ",
          dateTime: "2024-10-02T06:30:00.000-04:00",
          terminal: "1",
        },
        arrival: {
          locationCode: "EWR",
          dateTime: "2024-10-02T08:10:00.000-04:00",
          terminal: "A",
        },
        aircraftCode: "CR9",
        duration: 6000,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC105-YYZYVR-2024-10-01-0830": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "105",
        departure: {
          locationCode: "YYZ",
          dateTime: "2024-10-01T08:30:00.000-04:00",
          terminal: "1",
        },
        arrival: {
          locationCode: "YVR",
          dateTime: "2024-10-01T10:39:00.000-07:00",
          terminal: "M",
        },
        aircraftCode: "7M8",
        duration: 18540,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-UA837-SFONRT-2024-10-02-1145": {
        marketingAirlineCode: "UA",
        operatingAirlineCode: "UA",
        marketingFlightNumber: "837",
        departure: {
          locationCode: "SFO",
          dateTime: "2024-10-02T11:45:00.000-07:00",
          terminal: "I",
        },
        arrival: {
          locationCode: "NRT",
          dateTime: "2024-10-03T14:50:00.000+09:00",
          terminal: "1",
        },
        aircraftCode: "77W",
        duration: 39900,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC9-YYZNRT-2024-10-02-1325": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "9",
        departure: {
          locationCode: "YYZ",
          dateTime: "2024-10-02T13:25:00.000-04:00",
          terminal: "1",
        },
        arrival: {
          locationCode: "NRT",
          dateTime: "2024-10-03T15:45:00.000+09:00",
          terminal: "1",
        },
        aircraftCode: "77W",
        duration: 48000,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC111-YYZYVR-2024-10-01-0945": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "111",
        departure: {
          locationCode: "YYZ",
          dateTime: "2024-10-01T09:45:00.000-04:00",
          terminal: "1",
        },
        arrival: {
          locationCode: "YVR",
          dateTime: "2024-10-01T11:38:00.000-07:00",
          terminal: "M",
        },
        aircraftCode: "788",
        duration: 17580,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC158-YYCYYZ-2024-10-01-0125": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "158",
        departure: {
          locationCode: "YYC",
          dateTime: "2024-10-01T01:25:00.000-06:00",
        },
        arrival: {
          locationCode: "YYZ",
          dateTime: "2024-10-01T06:58:00.000-04:00",
          terminal: "1",
        },
        aircraftCode: "788",
        duration: 12780,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC8842-YVRSFO-2024-10-02-0805": {
        marketingAirlineCode: "AC",
        operatingAirlineName: "AIR CANADA EXPRESS - JAZZ",
        marketingFlightNumber: "8842",
        departure: {
          locationCode: "YVR",
          dateTime: "2024-10-02T08:05:00.000-07:00",
          terminal: "M",
        },
        arrival: {
          locationCode: "SFO",
          dateTime: "2024-10-02T10:34:00.000-07:00",
          terminal: "2",
        },
        aircraftCode: "CR9",
        duration: 8940,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC156-YYCYYZ-2024-10-01-0025": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "156",
        departure: {
          locationCode: "YYC",
          dateTime: "2024-10-01T00:25:00.000-06:00",
        },
        arrival: {
          locationCode: "YYZ",
          dateTime: "2024-10-01T06:15:00.000-04:00",
          terminal: "1",
        },
        aircraftCode: "7M8",
        duration: 13800,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC223-YYCYVR-2024-10-01-1845": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "223",
        departure: {
          locationCode: "YYC",
          dateTime: "2024-10-01T18:45:00.000-06:00",
        },
        arrival: {
          locationCode: "YVR",
          dateTime: "2024-10-01T19:21:00.000-07:00",
          terminal: "M",
        },
        aircraftCode: "321",
        duration: 5760,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC1-YYZHND-2024-10-01-1315": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "1",
        departure: {
          locationCode: "YYZ",
          dateTime: "2024-10-01T13:15:00.000-04:00",
          terminal: "1",
        },
        arrival: {
          locationCode: "HND",
          dateTime: "2024-10-02T15:40:00.000+09:00",
          terminal: "3",
        },
        aircraftCode: "789",
        duration: 48300,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC8391-YYCYLW-2024-10-01-1840": {
        marketingAirlineCode: "AC",
        operatingAirlineName: "AIR CANADA EXPRESS - JAZZ",
        marketingFlightNumber: "8391",
        departure: {
          locationCode: "YYC",
          dateTime: "2024-10-01T18:40:00.000-06:00",
        },
        arrival: {
          locationCode: "YLW",
          dateTime: "2024-10-01T18:52:00.000-07:00",
        },
        aircraftCode: "DH4",
        duration: 4320,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC201-YYCYVR-2024-10-01-0605": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "201",
        departure: {
          locationCode: "YYC",
          dateTime: "2024-10-01T06:05:00.000-06:00",
        },
        arrival: {
          locationCode: "YVR",
          dateTime: "2024-10-01T06:41:00.000-07:00",
          terminal: "M",
        },
        aircraftCode: "7M8",
        duration: 5760,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-UA79-EWRNRT-2024-10-02-1120": {
        marketingAirlineCode: "UA",
        operatingAirlineCode: "UA",
        marketingFlightNumber: "79",
        departure: {
          locationCode: "EWR",
          dateTime: "2024-10-02T11:20:00.000-04:00",
          terminal: "C",
        },
        arrival: {
          locationCode: "NRT",
          dateTime: "2024-10-03T14:25:00.000+09:00",
          terminal: "1",
        },
        aircraftCode: "789",
        duration: 50700,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC324-YYCYUL-2024-10-01-1230": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "324",
        departure: {
          locationCode: "YYC",
          dateTime: "2024-10-01T12:30:00.000-06:00",
        },
        arrival: {
          locationCode: "YUL",
          dateTime: "2024-10-01T18:24:00.000-04:00",
        },
        aircraftCode: "788",
        duration: 14040,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC203-YYCYVR-2024-10-01-0700": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "203",
        departure: {
          locationCode: "YYC",
          dateTime: "2024-10-01T07:00:00.000-06:00",
        },
        arrival: {
          locationCode: "YVR",
          dateTime: "2024-10-01T07:36:00.000-07:00",
          terminal: "M",
        },
        aircraftCode: "7M8",
        duration: 5760,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC8265-YLWYVR-2024-10-02-0555": {
        marketingAirlineCode: "AC",
        operatingAirlineName: "AIR CANADA EXPRESS - JAZZ",
        marketingFlightNumber: "8265",
        departure: {
          locationCode: "YLW",
          dateTime: "2024-10-02T05:55:00.000-07:00",
        },
        arrival: {
          locationCode: "YVR",
          dateTime: "2024-10-02T06:55:00.000-07:00",
          terminal: "M",
        },
        aircraftCode: "DH4",
        duration: 3600,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC5-YULNRT-2024-10-02-1250": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "5",
        departure: {
          locationCode: "YUL",
          dateTime: "2024-10-02T12:50:00.000-04:00",
        },
        arrival: {
          locationCode: "NRT",
          dateTime: "2024-10-03T15:25:00.000+09:00",
          terminal: "1",
        },
        aircraftCode: "77W",
        duration: 48900,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC233-YEGYVR-2024-10-02-0700": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "233",
        departure: {
          locationCode: "YEG",
          dateTime: "2024-10-02T07:00:00.000-06:00",
        },
        arrival: {
          locationCode: "YVR",
          dateTime: "2024-10-02T07:40:00.000-07:00",
          terminal: "M",
        },
        aircraftCode: "319",
        duration: 6000,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC8279-YLWYVR-2024-10-01-1930": {
        marketingAirlineCode: "AC",
        operatingAirlineName: "AIR CANADA EXPRESS - JAZZ",
        marketingFlightNumber: "8279",
        departure: {
          locationCode: "YLW",
          dateTime: "2024-10-01T19:30:00.000-07:00",
        },
        arrival: {
          locationCode: "YVR",
          dateTime: "2024-10-01T20:31:00.000-07:00",
          terminal: "M",
        },
        aircraftCode: "DH4",
        duration: 3660,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-UA837-SFONRT-2024-10-01-1145": {
        marketingAirlineCode: "UA",
        operatingAirlineCode: "UA",
        marketingFlightNumber: "837",
        departure: {
          locationCode: "SFO",
          dateTime: "2024-10-01T11:45:00.000-07:00",
          terminal: "I",
        },
        arrival: {
          locationCode: "NRT",
          dateTime: "2024-10-02T14:50:00.000+09:00",
          terminal: "1",
        },
        aircraftCode: "77W",
        duration: 39900,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC152-YYCYYZ-2024-10-01-1900": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "152",
        departure: {
          locationCode: "YYC",
          dateTime: "2024-10-01T19:00:00.000-06:00",
        },
        arrival: {
          locationCode: "YYZ",
          dateTime: "2024-10-02T00:50:00.000-04:00",
          terminal: "1",
        },
        aircraftCode: "320",
        duration: 13800,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC406-YYZYUL-2024-10-01-0955": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "406",
        departure: {
          locationCode: "YYZ",
          dateTime: "2024-10-01T09:55:00.000-04:00",
          terminal: "1",
        },
        arrival: {
          locationCode: "YUL",
          dateTime: "2024-10-01T11:11:00.000-04:00",
        },
        aircraftCode: "7M8",
        duration: 4560,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC560-YVRLAX-2024-10-01-2115": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "560",
        departure: {
          locationCode: "YVR",
          dateTime: "2024-10-01T21:15:00.000-07:00",
          terminal: "M",
        },
        arrival: {
          locationCode: "LAX",
          dateTime: "2024-10-02T00:13:00.000-07:00",
          terminal: "6",
        },
        aircraftCode: "7M8",
        duration: 10680,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC8144-YYCYEG-2024-10-01-1940": {
        marketingAirlineCode: "AC",
        operatingAirlineName: "AIR CANADA EXPRESS - JAZZ",
        marketingFlightNumber: "8144",
        departure: {
          locationCode: "YYC",
          dateTime: "2024-10-01T19:40:00.000-06:00",
        },
        arrival: {
          locationCode: "YEG",
          dateTime: "2024-10-01T20:34:00.000-06:00",
        },
        aircraftCode: "DH4",
        duration: 3240,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-UA39-LAXHND-2024-10-02-1130": {
        marketingAirlineCode: "UA",
        operatingAirlineCode: "UA",
        marketingFlightNumber: "39",
        departure: {
          locationCode: "LAX",
          dateTime: "2024-10-02T11:30:00.000-07:00",
          terminal: "7",
        },
        arrival: {
          locationCode: "HND",
          dateTime: "2024-10-03T15:15:00.000+09:00",
          terminal: "3",
        },
        aircraftCode: "781",
        duration: 42300,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC189-YYZYVR-2024-10-01-0805": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "189",
        departure: {
          locationCode: "YYZ",
          dateTime: "2024-10-01T08:05:00.000-04:00",
          terminal: "1",
        },
        arrival: {
          locationCode: "YVR",
          dateTime: "2024-10-01T10:04:00.000-07:00",
          terminal: "M",
        },
        aircraftCode: "77W",
        duration: 17940,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC7777-YEGYVR-2024-10-02-0930": {
        marketingAirlineCode: "AC",
        operatingAirlineName: "AIR CANADA EXPRESS - JAZZ",
        marketingFlightNumber: "7777",
        departure: {
          locationCode: "YEG",
          dateTime: "2024-10-02T09:30:00.000-06:00",
        },
        arrival: {
          locationCode: "YVR",
          dateTime: "2024-10-02T10:07:00.000-07:00",
          terminal: "M",
        },
        aircraftCode: "CR9",
        duration: 5820,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC326-YYCYUL-2024-10-01-1420": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "326",
        departure: {
          locationCode: "YYC",
          dateTime: "2024-10-01T14:20:00.000-06:00",
        },
        arrival: {
          locationCode: "YUL",
          dateTime: "2024-10-01T20:14:00.000-04:00",
        },
        aircraftCode: "789",
        duration: 14040,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC8281-YLWYVR-2024-10-01-2030": {
        marketingAirlineCode: "AC",
        operatingAirlineName: "AIR CANADA EXPRESS - JAZZ",
        marketingFlightNumber: "8281",
        departure: {
          locationCode: "YLW",
          dateTime: "2024-10-01T20:30:00.000-07:00",
        },
        arrival: {
          locationCode: "YVR",
          dateTime: "2024-10-01T21:31:00.000-07:00",
          terminal: "M",
        },
        aircraftCode: "DH4",
        duration: 3660,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC316-YYCYUL-2024-10-01-0105": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "316",
        departure: {
          locationCode: "YYC",
          dateTime: "2024-10-01T01:05:00.000-06:00",
        },
        arrival: {
          locationCode: "YUL",
          dateTime: "2024-10-01T07:10:00.000-04:00",
        },
        aircraftCode: "7M8",
        duration: 14700,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC231-YEGYVR-2024-10-02-0600": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "231",
        departure: {
          locationCode: "YEG",
          dateTime: "2024-10-02T06:00:00.000-06:00",
        },
        arrival: {
          locationCode: "YVR",
          dateTime: "2024-10-02T06:40:00.000-07:00",
          terminal: "M",
        },
        aircraftCode: "320",
        duration: 6000,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC130-YYCYYZ-2024-10-01-0600": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "130",
        departure: {
          locationCode: "YYC",
          dateTime: "2024-10-01T06:00:00.000-06:00",
        },
        arrival: {
          locationCode: "YYZ",
          dateTime: "2024-10-01T11:50:00.000-04:00",
          terminal: "1",
        },
        aircraftCode: "321",
        duration: 13800,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC205-YYCYVR-2024-10-01-0810": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "205",
        departure: {
          locationCode: "YYC",
          dateTime: "2024-10-01T08:10:00.000-06:00",
        },
        arrival: {
          locationCode: "YVR",
          dateTime: "2024-10-01T08:46:00.000-07:00",
          terminal: "M",
        },
        aircraftCode: "7M8",
        duration: 5760,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC221-YYCYVR-2024-10-01-1655": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "221",
        departure: {
          locationCode: "YYC",
          dateTime: "2024-10-01T16:55:00.000-06:00",
        },
        arrival: {
          locationCode: "YVR",
          dateTime: "2024-10-01T17:31:00.000-07:00",
          terminal: "M",
        },
        aircraftCode: "320",
        duration: 5760,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC9-YYZNRT-2024-10-01-1325": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "9",
        departure: {
          locationCode: "YYZ",
          dateTime: "2024-10-01T13:25:00.000-04:00",
          terminal: "1",
        },
        arrival: {
          locationCode: "NRT",
          dateTime: "2024-10-02T15:45:00.000+09:00",
          terminal: "1",
        },
        aircraftCode: "77W",
        duration: 48000,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC1-YYZHND-2024-10-02-1315": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "1",
        departure: {
          locationCode: "YYZ",
          dateTime: "2024-10-02T13:15:00.000-04:00",
          terminal: "1",
        },
        arrival: {
          locationCode: "HND",
          dateTime: "2024-10-03T15:40:00.000+09:00",
          terminal: "3",
        },
        aircraftCode: "789",
        duration: 48300,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC150-YYCYYZ-2024-10-01-1750": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "150",
        departure: {
          locationCode: "YYC",
          dateTime: "2024-10-01T17:50:00.000-06:00",
        },
        arrival: {
          locationCode: "YYZ",
          dateTime: "2024-10-01T23:40:00.000-04:00",
          terminal: "1",
        },
        aircraftCode: "321",
        duration: 13800,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC227-YYCYVR-2024-10-01-2000": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "227",
        departure: {
          locationCode: "YYC",
          dateTime: "2024-10-01T20:00:00.000-06:00",
        },
        arrival: {
          locationCode: "YVR",
          dateTime: "2024-10-01T20:36:00.000-07:00",
          terminal: "M",
        },
        aircraftCode: "320",
        duration: 5760,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC404-YYZYUL-2024-10-01-0900": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "404",
        departure: {
          locationCode: "YYZ",
          dateTime: "2024-10-01T09:00:00.000-04:00",
          terminal: "1",
        },
        arrival: {
          locationCode: "YUL",
          dateTime: "2024-10-01T10:16:00.000-04:00",
        },
        aircraftCode: "7M8",
        duration: 4560,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-UA211-YYCSFO-2024-10-01-1545": {
        marketingAirlineCode: "UA",
        operatingAirlineCode: "UA",
        marketingFlightNumber: "211",
        departure: {
          locationCode: "YYC",
          dateTime: "2024-10-01T15:45:00.000-06:00",
        },
        arrival: {
          locationCode: "SFO",
          dateTime: "2024-10-01T17:39:00.000-07:00",
          terminal: "3",
        },
        aircraftCode: "320",
        duration: 10440,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC8842-YVRSFO-2024-10-01-0805": {
        marketingAirlineCode: "AC",
        operatingAirlineName: "AIR CANADA EXPRESS - JAZZ",
        marketingFlightNumber: "8842",
        departure: {
          locationCode: "YVR",
          dateTime: "2024-10-01T08:05:00.000-07:00",
          terminal: "M",
        },
        arrival: {
          locationCode: "SFO",
          dateTime: "2024-10-01T10:34:00.000-07:00",
          terminal: "2",
        },
        aircraftCode: "CR9",
        duration: 8940,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC402-YYZYUL-2024-10-01-0800": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "402",
        departure: {
          locationCode: "YYZ",
          dateTime: "2024-10-01T08:00:00.000-04:00",
          terminal: "1",
        },
        arrival: {
          locationCode: "YUL",
          dateTime: "2024-10-01T09:16:00.000-04:00",
        },
        aircraftCode: "7M8",
        duration: 4560,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC126-YVRYYZ-2024-10-01-2250": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "126",
        departure: {
          locationCode: "YVR",
          dateTime: "2024-10-01T22:50:00.000-07:00",
          terminal: "M",
        },
        arrival: {
          locationCode: "YYZ",
          dateTime: "2024-10-02T06:21:00.000-04:00",
          terminal: "1",
        },
        aircraftCode: "321",
        duration: 16260,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC217-YYCYVR-2024-10-01-1435": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "217",
        departure: {
          locationCode: "YYC",
          dateTime: "2024-10-01T14:35:00.000-06:00",
        },
        arrival: {
          locationCode: "YVR",
          dateTime: "2024-10-01T15:11:00.000-07:00",
          terminal: "M",
        },
        aircraftCode: "7M8",
        duration: 5760,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC7952-YTZYUL-2024-10-02-0720": {
        marketingAirlineCode: "AC",
        operatingAirlineName: "AIR CANADA EXPRESS - JAZZ",
        marketingFlightNumber: "7952",
        departure: {
          locationCode: "YTZ",
          dateTime: "2024-10-02T07:20:00.000-04:00",
        },
        arrival: {
          locationCode: "YUL",
          dateTime: "2024-10-02T08:33:00.000-04:00",
        },
        aircraftCode: "DH4",
        duration: 4380,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC8269-YLWYVR-2024-10-02-1010": {
        marketingAirlineCode: "AC",
        operatingAirlineName: "AIR CANADA EXPRESS - JAZZ",
        marketingFlightNumber: "8269",
        departure: {
          locationCode: "YLW",
          dateTime: "2024-10-02T10:10:00.000-07:00",
        },
        arrival: {
          locationCode: "YVR",
          dateTime: "2024-10-02T11:11:00.000-07:00",
          terminal: "M",
        },
        aircraftCode: "DH4",
        duration: 3660,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC584-YYCEWR-2024-10-01-0715": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "584",
        departure: {
          locationCode: "YYC",
          dateTime: "2024-10-01T07:15:00.000-06:00",
        },
        arrival: {
          locationCode: "EWR",
          dateTime: "2024-10-01T13:52:00.000-04:00",
          terminal: "A",
        },
        aircraftCode: "320",
        duration: 16620,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC8846-YVRSFO-2024-10-01-2030": {
        marketingAirlineCode: "AC",
        operatingAirlineName: "AIR CANADA EXPRESS - JAZZ",
        marketingFlightNumber: "8846",
        departure: {
          locationCode: "YVR",
          dateTime: "2024-10-01T20:30:00.000-07:00",
          terminal: "M",
        },
        arrival: {
          locationCode: "SFO",
          dateTime: "2024-10-01T22:59:00.000-07:00",
          terminal: "2",
        },
        aircraftCode: "CR9",
        duration: 8940,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC7958-YTZYUL-2024-10-01-1020": {
        marketingAirlineCode: "AC",
        operatingAirlineName: "AIR CANADA EXPRESS - JAZZ",
        marketingFlightNumber: "7958",
        departure: {
          locationCode: "YTZ",
          dateTime: "2024-10-01T10:20:00.000-04:00",
        },
        arrival: {
          locationCode: "YUL",
          dateTime: "2024-10-01T11:33:00.000-04:00",
        },
        aircraftCode: "DH4",
        duration: 4380,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC5-YULNRT-2024-10-01-1250": {
        marketingAirlineCode: "AC",
        operatingAirlineCode: "AC",
        marketingFlightNumber: "5",
        departure: {
          locationCode: "YUL",
          dateTime: "2024-10-01T12:50:00.000-04:00",
        },
        arrival: {
          locationCode: "NRT",
          dateTime: "2024-10-02T15:25:00.000+09:00",
          terminal: "1",
        },
        aircraftCode: "77W",
        duration: 48900,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC8884-YYZEWR-2024-10-01-1920": {
        marketingAirlineCode: "AC",
        operatingAirlineName: "AIR CANADA EXPRESS - JAZZ",
        marketingFlightNumber: "8884",
        departure: {
          locationCode: "YYZ",
          dateTime: "2024-10-01T19:20:00.000-04:00",
          terminal: "1",
        },
        arrival: {
          locationCode: "EWR",
          dateTime: "2024-10-01T21:00:00.000-04:00",
          terminal: "A",
        },
        aircraftCode: "E75",
        duration: 6000,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-UA32-LAXNRT-2024-10-02-1110": {
        marketingAirlineCode: "UA",
        operatingAirlineCode: "UA",
        marketingFlightNumber: "32",
        departure: {
          locationCode: "LAX",
          dateTime: "2024-10-02T11:10:00.000-07:00",
          terminal: "7",
        },
        arrival: {
          locationCode: "NRT",
          dateTime: "2024-10-03T14:40:00.000+09:00",
          terminal: "1",
        },
        aircraftCode: "789",
        duration: 41400,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
      "SEG-AC7954-YTZYUL-2024-10-02-0820": {
        marketingAirlineCode: "AC",
        operatingAirlineName: "AIR CANADA EXPRESS - JAZZ",
        marketingFlightNumber: "7954",
        departure: {
          locationCode: "YTZ",
          dateTime: "2024-10-02T08:20:00.000-04:00",
        },
        arrival: {
          locationCode: "YUL",
          dateTime: "2024-10-02T09:33:00.000-04:00",
        },
        aircraftCode: "DH4",
        duration: 4380,
        isOpenSegment: false,
        secureFlightIndicator: false,
      },
    };

    const results = await storeTrips(groups, flights, db);
    console.log(results);

    expect(true);
  });
});
