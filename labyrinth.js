function isBombPresent(position, bombPosition) {
  let currentBombPos = '';

  for (let index = 0; index < bombPosition.length; index++) {
    if (bombPosition[index] === ' ') {
      currentBombPos = '';
    }

    currentBombPos += bombPosition[index];

    if (+currentBombPos === position) {
      return true;
    }
  }

  return false;
}

console.log(isBombPresent(20, '20 90 30 10'));
