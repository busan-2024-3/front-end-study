const getInputNum = message => {
	const input = prompt(message);
	const number = parseFloat(input);

	if (Number.isNaN(number)) {
		alert('숫자가 아닙니다. 새로고침 ㄱㄱ');
		return null;
	}
	return number;
};

export const alertResult = function (result) {
	if (result !== null) {
		alert(`계산 결과: ${result}`);
	}
};

const calculate = (num1, num2, operator) => {
	// 연산의 결과를 저장하기 위한 변수를 준비한다.
	// 입력받은 연산자에 따라 처리하기 위해 switch문을 사용한다.
	switch (operator) {
		case '+':
			return `${num1} ${operator} ${num2} = ${num1 + num2}`;
		case '-':
			return `${num1} ${operator} ${num2} = ${num1 - num2}`;
		case '*':
			return `${num1} ${operator} ${num2} = ${num1 * num2}`;
		case '/':
			return `${num1} ${operator} ${num2} = ${num1 / num2}`;
		// (defalut '잘못된 연산자입니다.')
		default:
			alert('잘못된 연산자 입니다! 새로고침 ㄱㄱ');
			return null;
	}
};

function calculator() {
	const num1 = getInputNum('첫 번째 숫자를 입력하세요:');
	if (num1 === null) return; // 유효하지 않은 입력일 경우 종료

	const num2 = getInputNum('두 번째 숫자를 입력하세요:');
	if (num2 === null) return; // 유효하지 않은 입력일 경우 종료

	// 연산자 입력 받기 operator
	const operator = prompt(
		'연산자를 입력하세요(+, -, *, /):',
	);

	const result = calculate(num1, num2, operator);

	alertResult(result);
}
export default calculator;
