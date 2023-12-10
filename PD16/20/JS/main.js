function LongestCountryName(countries) {
  let longestCountry = countries[0];
  for (let country of countries) {
      if (country.length > longestCountry.length) {
          longestCountry = country;
      }
  }
  return longestCountry;
}

const countryList = [
  "United States of America",
  "United Arab Emirates",
  "Australia",
  "Brazil",
  "Canada",
  "India",
  "China",
  "Russian Federation",
];

const longestCountryName = LongestCountryName(countryList);
console.log("Longest Country Name:", longestCountryName);
