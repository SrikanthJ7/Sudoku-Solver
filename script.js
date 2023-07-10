var arr = [[], [], [], [], [], [], [], [], []]

for (var i = 0; i < 9; i++) {
	for (var j = 0; j < 9; j++) {
		arr[i][j] = document.getElementById(i * 9 + j);

	}
}


var board = [[], [], [], [], [], [], [], [], []]

board[0][0] = 5; board[0][1] = 3; board[0][2] = 0; board[0][3] = 0; board[0][4] = 7; board[0][5] = 0; board[0][6] = 0; board[0][7] = 0; board[0][8] = 0;
board[1][0] = 6; board[1][1] = 0; board[1][2] = 0; board[1][3] = 1; board[1][4] = 9; board[1][5] = 5; board[1][6] = 0; board[1][7] = 0; board[1][8] = 0;
board[2][0] = 0; board[2][1] = 9; board[2][2] = 8; board[2][3] = 0; board[2][4] = 0; board[2][5] = 0; board[2][6] = 0; board[2][7] = 6; board[2][8] = 0;
board[3][0] = 8; board[3][1] = 0; board[3][2] = 0; board[3][3] = 0; board[3][4] = 6; board[3][5] = 0; board[3][6] = 0; board[3][7] = 0; board[3][8] = 3;
board[4][0] = 4; board[4][1] = 0; board[4][2] = 0; board[4][3] = 8; board[4][4] = 0; board[4][5] = 3; board[4][6] = 0; board[4][7] = 0; board[4][8] = 1;
board[5][0] = 7; board[5][1] = 0; board[5][2] = 0; board[5][3] = 0; board[5][4] = 2; board[5][5] = 0; board[5][6] = 0; board[5][7] = 0; board[5][8] = 6;
board[6][0] = 0; board[6][1] = 6; board[6][2] = 0; board[6][3] = 0; board[6][4] = 0; board[6][5] = 0; board[6][6] = 2; board[6][7] = 8; board[6][8] = 0;
board[7][0] = 0; board[7][1] = 0; board[7][2] = 0; board[7][3] = 4; board[7][4] = 1; board[7][5] = 9; board[7][6] = 0; board[7][7] = 0; board[7][8] = 5;
board[8][0] = 0; board[8][1] = 0; board[8][2] = 0; board[8][3] = 0; board[8][4] = 8; board[8][5] = 0; board[8][6] = 0; board[8][7] = 7; board[8][8] = 9;

function FillBoard(board) {
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {
			if (board[i][j] != 0) {
				arr[i][j].innerText = board[i][j]
			}

			else {
				arr[i][j].innerText = '';
			}
		}
	}
}

arr[0][0].innerText = "5"; arr[0][1].innerText = "3"; arr[0][2].innerText = " "; arr[0][3].innerText = " "; arr[0][4].innerText = "7"; arr[0][5].innerText = " "; arr[0][6].innerText = " "; arr[0][7].innerText = " "; arr[0][8].innerText = " ";
arr[1][0].innerText = "6"; arr[1][1].innerText = " "; arr[1][2].innerText = " "; arr[1][3].innerText = "1"; arr[1][4].innerText = "9"; arr[1][5].innerText = "5"; arr[1][6].innerText = " "; arr[1][7].innerText = " "; arr[1][8].innerText = " ";
arr[2][0].innerText = " "; arr[2][1].innerText = "9"; arr[2][2].innerText = "8"; arr[2][3].innerText = " "; arr[2][4].innerText = " "; arr[2][5].innerText = " "; arr[2][6].innerText = " "; arr[2][7].innerText = "6"; arr[2][8].innerText = " ";
arr[3][0].innerText = "8"; arr[3][1].innerText = " "; arr[3][2].innerText = " "; arr[3][3].innerText = " "; arr[3][4].innerText = "6"; arr[3][5].innerText = " "; arr[3][6].innerText = " "; arr[3][7].innerText = " "; arr[3][8].innerText = "3";
arr[4][0].innerText = "4"; arr[4][1].innerText = " "; arr[4][2].innerText = " "; arr[4][3].innerText = "8"; arr[4][4].innerText = " "; arr[4][5].innerText = "3"; arr[4][6].innerText = " "; arr[4][7].innerText = " "; arr[4][8].innerText = "1";
arr[5][0].innerText = "7"; arr[5][1].innerText = " "; arr[5][2].innerText = " "; arr[5][3].innerText = " "; arr[5][4].innerText = "2"; arr[5][5].innerText = " "; arr[5][6].innerText = " "; arr[5][7].innerText = " "; arr[5][8].innerText = "6";
arr[6][0].innerText = " "; arr[6][1].innerText = "6"; arr[6][2].innerText = " "; arr[6][3].innerText = " "; arr[6][4].innerText = " "; arr[6][5].innerText = " "; arr[6][6].innerText = "2"; arr[6][7].innerText = "8"; arr[6][8].innerText = " ";
arr[7][0].innerText = " "; arr[7][1].innerText = " "; arr[7][2].innerText = " "; arr[7][3].innerText = "4"; arr[7][4].innerText = "1"; arr[7][5].innerText = "9"; arr[7][6].innerText = " "; arr[7][7].innerText = " "; arr[7][8].innerText = "5";
arr[8][0].innerText = " "; arr[8][1].innerText = " "; arr[8][2].innerText = " "; arr[8][3].innerText = " "; arr[8][4].innerText = "8"; arr[8][5].innerText = " "; arr[8][6].innerText = " "; arr[8][7].innerText = "7"; arr[8][8].innerText = "9";

let ChangePuzzle = document.getElementById('ChangePuzzle')
let SolvePuzzle = document.getElementById('SolvePuzzle')

ChangePuzzle.onclick = function () {
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {
			var inp = prompt("Enter arr[" + i + "][" + j + "]");
			if (inp == " ") {
				board[i][j] = 0;
			} else {
				board[i][j] = parseInt(inp);
			}
			arr[i][j].innerText = inp;
		}
	}
}

SolvePuzzle.onclick = function () {
	SudokuSolver(board, 0, 0, 9);
	FillBoard(board)
};

function isValid(board, i, j, num, n) {
	for (let x = 0; x < n; x++) {
		if (board[i][x] == num || board[x][j] == num) {
			return false;
		}
	}

	let rn = Math.sqrt(n);
	let si = i - i % rn;
	let sj = j - j % rn;

	for (let x = si; x < si + rn; x++) {
		for (let y = sj; y < sj + rn; y++) {
			if (board[x][y] == num) {
				return false;
			}
		}
	}

	return true;

}

function SudokuSolver(board, i, j, n) {
	if (i == n) {
		
		return true;
	}

	if (j == n) {
		return SudokuSolver(board,i+1,0,n);
	}

	if (board[i][j] != 0) {
		return SudokuSolver(board,i,j+1,n);
	}

	for (let num = 1; num <= 9; num++) {
		if (isValid(board, i, j, num, n)) {
			board[i][j] = num;
			let subAns = SudokuSolver(board, i, j+1, n);
			if (subAns) {
				return true;
			}
			// back tracking
			board[i][j] = 0;
		}
	}

	return false;

}
