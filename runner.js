const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImI3Y2JkNzJlLTRjYmItNGU2ZS04MDFjLTBhYTRkMTIzNDA0My0xNjc3MTk1ODI0MjMzIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiODhhYzhlYTItYjdkYi00YThlLWIzZjItODdiOTE5NGE1YmIyIiwidHlwZSI6InQifQ.pXINK9sv4UvezUTRmuSk98frddSCwte_FfmOMnslVRU'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
