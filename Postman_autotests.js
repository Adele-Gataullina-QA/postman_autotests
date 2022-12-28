// autotests for method https://swapi.dev/api/people/10

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("Obi-Wan Kenobi");
});
pm.test("Your test name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.birth_year).to.eql("57BBY");
});

// autotests for method https://swapi.dev/api/planets/7

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("Endor");
});
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Date");
});

// autotests for method https://swapi.dev/api/starships/5

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("passengers");
});
pm.test("Your test name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.length).to.eql("38");
});
pm.test("Test data type of the response", function () {
    var jsonData = pm.response.json();
  pm.expect(jsonData).to.be.an("object");
  pm.expect(jsonData.name).to.be.a("string");
  pm.expect(jsonData.pilots).to.be.an("array");
  pm.expect(jsonData.films).to.be.an("array");
  pm.expect(jsonData.url).to.be.a("string");
});