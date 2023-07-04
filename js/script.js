let el = document.getElementById('tbody__name_list');
let names = [];

showAll();
close();

function showAll() {
	let data = '';
	if (names.length > 0) {
		for (i = 0; i < names.length; i++) {
			data += '<tr>';
			data += '<td>' + names[i] + '</td>';
			data += '<td colspan="2"><center><button class="btn btn-warning" onclick="edit(' + i + ')"><span class="glyphicon glyphicon-edit"></span> Edit</button> | <button class="btn btn-danger" onclick="deleteFromList(' + i + ')"><span class="glyphicon glyphicon-trash"></span> Delete</button></center></td>';
			data += '</tr>';
		}
	}	
	el.innerHTML = data;
};


function add() {
    let el = document.getElementById('form__name')
	let name = el.value;
	if (name) {
		names.push(name.trim());
		el.value = '';
		// showAll();
	}
	showAll();
};

function deleteFromList(listIndex) {
	names.splice(listIndex, 1);
	showAll();
	
};

function edit(listIndex) {
	let el = document.getElementById('form__edit_name');
	el.value = names[listIndex];
	document.getElementById('edit').style.display = 'block';	
	
	document.getElementById('update').onsubmit = function() {
	let name = el.value;
		if (name) {
			names.splice(listIndex, 1, name.trim());
			showAll();
			close();
		}
	}
};


function close() {
	document.getElementById('edit').style.display = 'none';
}
	
	