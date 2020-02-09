var generateLocation = function(name) {
  var states = [
    'AL',
    'AK',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY'
  ];

  var cities = {
    AL: ['Birmingham', 'Montgomery', 'Huntsville'],
    AK: ['Anchorage', 'Juneau', 'Fairbanks'],
    AZ: ['Phoenix', 'Tucson', 'Mesa'],
    AR: ['Little Rock', 'Forst Smith', 'Fayetteville'],
    CA: ['Los Angeles', 'San Diego', 'San Jose'],
    CO: ['Denver', 'Colorado Springs', 'Aurora'],
    CT: ['Bridgeport', 'New Haven', 'Stamford'],
    DE: ['Wilmington', 'Dover', 'Newark'],
    FL: ['Jacksonville', 'Miami', 'Tampa'],
    GA: ['Atlanta', 'Augusta', 'Columbus'],
    HI: ['Honolulu', 'East Honolulu', 'Pearl City'],
    ID: ['Boise', 'Meridian', 'Nampa'],
    IL: ['Chicago', 'Aurora', 'Naperville'],
    IN: ['Indianapolis', 'Fort Wayne', 'Evansville'],
    IA: ['Des Moines', 'Cedar Rapids', 'Davenport'],
    KS: ['Wichita', 'Overland Park', 'Kansas City'],
    KY: ['Louisville', 'Lexington', 'Bowling Green'],
    LA: ['New Orleans', 'Baton Rouge', 'Shreveport'],
    ME: ['Portland', 'Lewiston', 'Bangor'],
    MD: ['Baltimore', 'Frederick', 'Gaithersburg'],
    MA: ['Boston', 'Worcester', 'Springfield'],
    MI: ['Detroit', 'Grand Rapids', 'Warren'],
    MN: ['Minneapolis', 'Saint Paul', 'Rochester'],
    MS: ['Jackson', 'Gulfport', 'Southraven'],
    MO: ['Kansas City', 'Saint Lousi', 'Springfield'],
    MT: ['Billings', 'Missoula', 'Great Falls'],
    NE: ['Omaha', 'Lincoln', 'Bellevue'],
    NV: ['Las Vegas', 'Henderson', 'Reno'],
    NH: ['Manchester', 'Nashua', 'Concord'],
    NJ: ['Newark', 'Jersey City', 'Paterson'],
    NM: ['Albuquerque', 'Las Cruces', 'Rio Rancho'],
    NY: ['New York City', 'Buffalo', 'Rochester'],
    NC: ['Charlotte', 'Raleigh', 'Greensboro'],
    ND: ['Fargo', 'Bismark', 'Grand Forks'],
    OH: ['Columbus', 'Cleveland', 'Cincinnati'],
    OK: ['Oklahoma City', 'Tulsa', 'Norman'],
    OR: ['Portland', 'Salem', 'Eugene'],
    PA: ['Philadelphia', 'Pittsburgh', 'Allentown'],
    RI: ['Providence', 'Cranston', 'Warwick'],
    SC: ['Charleston', 'Columbia', 'North Charleston'],
    SD: ['Sioux Falls', 'Rapid City', 'Aberdeen'],
    TN: ['Nashville', 'Memphis', 'Knoxville'],
    TX: ['Houston', 'San Antonio', 'Dallas'],
    UT: ['Salt Lake City', 'West Valley City', 'Provo'],
    VT: ['Burlington', 'South Burlington', 'Rutland'],
    VA: ['Virginia Beach', 'Norfolk', 'Chesapeake'],
    WA: ['Seattle', 'Spokane', 'Tacoma'],
    WV: ['Charleston', 'Huntington', 'Morgantown'],
    WI: ['Milwaukee', 'Madison', 'Green Bay'],
    WY: ['Cheyenne', 'Casper', 'Laramie']
  };

  var lTF = function(letter) {
    var cap = letter.toUpperCase();
    var number = cap.charCodeAt(0) - 65;
    return number;
  };

  var stateNum = Math.floor(
    (lTF(name.first[0]) * lTF(name.first[1])) / (lTF(name.last) + 1)
  );
  if (stateNum > 49) {
    stateNum = 23;
  }
  var cityNum = lTF(name.last) % 3;

  var state = states[stateNum];
  if (state === undefined) {
    console.log('Wut?');
    console.log('stateNum = ', stateNum);
  }
  var city = cities[state][cityNum];

  var location = `${city}, ${state}`;
  return location;
};

module.exports = generateLocation;
