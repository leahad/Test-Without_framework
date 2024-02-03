function fetchArr () {
  return []
}

const mockFetchArr = {// mock renvoie valeur et comportement
  called: false,
  count: 0,
  data: [1, 2, 3],
  fetch: function () {
    this.called = true
    this.count++
    return this.data
  }
}

const databaseSQL = { // fake se rapproche beaucoup de la véracité d'un élement du système avec beaucoup plus d'info qu'un mock
  count: function () {
    return this.length;
  },
  data: [1, 2, 3], /// numbers
  fetchData: function () {
    return this.data
  }
}

function double () {
  // return all number multiplied by 2
  const arr = fetchArr() // Fais un calcul complexe et long

  if (!arr) return []
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2)
  }
  return result
}

// const testCases = [
//   {arr: null, expectedResult: []},
//   {arr:  [1, 2, 3], expectedResult: [2, 4, 6]},
//   {arr: [1], expectedResult: [2]},
//   {arr: [1,2,3, 11, 4], expectedResult: [2, 4, 6, 13, 8 ]}, // if > 10 +2 not *2
// ];

try {
  // for (test of testCases) {
  const expectedResult = [2, 4, 6]
  fetchArr = mockFetchArr.fetch.bind(mockFetchArr) // Un mock renvoie une valeur et d'autres infos telle que le count et si elle à été appelée ou non

  //fetchArr = () => [1,2,3]; // Un stub ne renvoie qu'une valeur prédéfinie et c'est tout
  
  const result = double()
  if (!mockFetchArr.called) {
    throw {
      message: "La fonction n'a pas été appelée"
    }
  }
  if (expectedResult.toString() !== result.toString()) {
    throw {
      message: 'Mauvais résultat',
      actual: result,
      expected: expectedResult
    }
  }
// }
  console.log('Tests réussis yahoooo')
} catch (err) {
  console.log('err:', err)
} finally {
  process.exit(0)
}
