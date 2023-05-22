// Test 1
const returnFirstTwoDrivers = arr => [arr[0], arr[1]];

// Test 2
const returnLastTwoDrivers = arr => [arr[arr.length-2], arr[arr.length-1]];

// Test 3 - 5
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// Test 6 - 7
function createFareMultiplier(num) {
    return function(fare){return fare*num};
}

// Test 8 - 9
const fareDoubler = createFareMultiplier(2);

// Test 10 - 11
const fareTripler = createFareMultiplier(3);

// Test 12 - 13
const selectDifferentDrivers = (drivers, returnDrivers) => returnDrivers(drivers);