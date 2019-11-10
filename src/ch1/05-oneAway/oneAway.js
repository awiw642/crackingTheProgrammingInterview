export function oneAway(stringOne, stringTwo) {
  let indexOne = 0;
  let indexTwo = 0;
  let edited = false;

  if (Math.abs(stringOne.length - stringTwo.length) > 1) {
    return false;
  }

  while (indexOne !== stringOne.length && indexTwo !== stringTwo.length) {
    if (stringOne[indexOne] !== stringTwo[indexTwo]) {
      if (edited) {
        return false;
      }

      if (stringOne.length > stringTwo.length) {
        indexOne++;
      } else if (stringOne.length < stringTwo.length) {
        indexTwo++;
      } else {
        indexOne++;
        indexTwo++;
      }
      edited = true;
    } else {
      indexOne++;
      indexTwo++;
    }
  }
  return true;
}

export function xoneAway(stringOne, stringTwo) {
  if (stringOne.length === stringTwo.length) {
    return oneAwayReplace(stringOne, stringTwo);
  }
  if (stringOne < stringTwo) {
    return oneAwayInsert(stringOne, stringTwo);
  }
  if (stringOne > stringTwo) {
    return oneAwayInsert(stringTwo, stringOne);
  }
}

function oneAwayInsert(stringOne, stringTwo) {
  let indexOne = 0;
  let indexTwo = 0;
  let status = true;

  while (indexOne !== stringOne.length && indexTwo !== stringTwo.length) {
    if (indexOne !== indexTwo && stringOne[indexOne] !== stringTwo[indexTwo]) {
      status = false;      
      break;
    } else if (stringOne[indexOne] !== stringTwo[indexTwo]) {
      indexOne++;
    } else {
      indexOne++;
      indexTwo++;
    }
  }
  return status;
}

function oneAwayReplace(stringOne, stringTwo) {
  let replaceCount = 0;
  for (let y = 0; y < stringOne.length; y++) {
    if (stringOne[y] !== stringTwo[y]) {
      replaceCount++;
      if (replaceCount > 1) {
        return false;
      }
    }
  }
  return true;
}
