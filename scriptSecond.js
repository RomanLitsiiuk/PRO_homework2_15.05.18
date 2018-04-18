function randomString() {
	var fullString = prompt('Введите любую строку', '');
	var repeat;

	if (fullString == false) {
		repeat = confirm('Вы ввели пустую строку. Не желаете повторить?');
		if (repeat == true) {
			return randomString();
		}
	}

	var stringArray = fullString.split(/[ ,.!?;:()]/);
	console.log(stringArray);
	var partString = prompt('Введите слово из ранее введеной строки', '');
	if (partString == false) {
		repeat = confirm('Вы ввели пустую строку. Не желаете повторить?');
		if (repeat == true) {
			return randomString();
		}
	}

	var compare = stringArray.indexOf(partString);
	var finalString;
	var actionString;
	var changeString;
	console.log(compare);

	if (compare == -1) {
		repeat = confirm('Такой слова нет во фразе, попробовать еще раз?');
		if (repeat == true) {
			return randomString();
		}
	}

	if (compare >= 0) {
		actionString = prompt('Чтобы сложить строки нажмите 1, заменить слово на новое нажмите 2, вырезать нажмите 3.', '');
		if (actionString == 1) {
			finalString = fullString + ' ' + partString;
			console.log(finalString);
		} else if (actionString == 2) {
			changeString = prompt('На какое слово (фразу) вы хотите заменить выбранную слово?', '');
			finalString = fullString.replace(partString, changeString);
			console.log(finalString);
		} else if (actionString == 3) {
			finalString = fullString.replace(partString, '');
			console.log(finalString);
		} else {
			repeat = confirm('Вы ввели цифру, которая не соответствует ни одному из предложенных действий. Начать все заново?');
			if (repeat == true) {
				return randomString();
			}
		}
	}
}

randomString();
