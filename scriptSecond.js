function randomString() {
	var fullString = prompt('Введите любую строку', '');
	if (fullString == null) {
		alert('Не нажимайте отмена, напишите строку)');
		return randomString();
	}
	var separator = ' ';
	var stringArray = fullString.split(separator);
	var partString = prompt('Введите подстроку', '');
	if (partString == null) {
		alert('Не нажимайте отмена, напишите строку)');
		return randomString();
	}
	var compare = stringArray.indexOf(partString);
	var finalString;
	var again;
	var actionString;
	var changeString;
	console.log(stringArray);
	console.log(compare);
	if (compare == -1) {
		again = confirm('Такой подстроки нет во фразе, попробовать еще раз?');
		if (again == true) {
			return randomString();
		}
	}
	if (compare >= 0) {
		actionString = prompt('Чтобы сложить строки нажмите 1, заменить подстроку на новую нажмите 2, вырезать нажмите 3.', '');
		if (actionString == 1) {
			finalString = fullString + partString;
			console.log(finalString);
		} else if (actionString == 2) {
			changeString = prompt('На какое слово (фразу) вы хотите заменить выбранную подстроку?', '');
			finalString = fullString.replace(partString, changeString);
			console.log(finalString);
		} else if (actionString == 3) {
			finalString = fullString.replace(partString, '');
			console.log(finalString);
		} else {
			alert('Вы ввели цифру, которая не соответствует ни одному из предложенных действий. До встречи.');
		}
	}
}

randomString();