function guessRandomNumber() {
  var x = Math.round(Math.random() * 10);
  var y = Math.round(Math.random() * 10);
  var guess = +prompt('Попробуйте угадать число в диапазоне от 0 до 10', '');

  if (isNaN(guess)) {
  	alert('Введите число, а не буквы разные!');
  	return guessRandomNumber();
  }

  if (x >= y && guess >= 0 && guess <= 10) {
  	if (x >= guess && guess >= y) {
  		console.log('Диапазон загаданных чисел от ' + y + ' до ' + x +'');
  		console.log('Вы угадали!, Ваше число ' + guess + '');
  	} else {
  		console.log('Диапазон загаданных чисел от ' + y + ' до ' + x +'');
  		console.log('Вы промазали!, Ваше число ' + guess + '');
  	}

  } else if (x < y && guess >= 0 && guess <= 10) {
  	if (x <= guess && guess <= y) {
  		console.log('Диапазон загаданных чисел от ' + x + ' до ' + y +'');
  		console.log('Вы угадали!, Ваше число ' + guess + '');
  	} else {
  		console.log('Диапазон загаданных чисел от ' + x + ' до ' + y +'');
  		console.log('Вы промазали!, Ваше число ' + guess + '');
  	}

  } else {
    	alert('Вы ввели цифру, которая не входит в диапазон от 0 до 10. Попробуйте повторить.');
    	return guessRandomNumber();
  }
}

guessRandomNumber()