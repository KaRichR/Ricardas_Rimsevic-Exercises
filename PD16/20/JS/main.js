function LongestCountryName(countryName){
  return countryName.reduce(function(lname, country) {
    return lname.length > country.length ? lname : country;
  }, "");
}
console.log(LongestCountryName(["Australia", "Germany", "United States of America"]));
