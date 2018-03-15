console.log("test");

function handleData (result) {
	var data = result;
	//console.log(data[0].completed);

	for (var i = 0; i < data.length; i++) {
		var toDoListUl = document.querySelector(".toDoItems")

		var checkBox = document.createElement("input");
		checkBox.setAttribute('type', 'checkbox');
		checkBox.classList.add("checkbox");

		var task = document.createElement("li");
			$(task).html(data[i].task).addClass("task");
			task.setAttribute("data-id", data[i].id);
			toDoListUl.appendChild(task);

		task.appendChild(checkBox);

		var deleteButton = document.createElement("button");
			$(deleteButton).html('Delete').addClass("delete");
			task.appendChild(deleteButton);
	}
}

var checkBoxes = document.querySelectorAll("#checkBox");
console.log(checkBoxes + "check");

$.ajax({
  url: "http://localhost:4005/item",
  method: "GET",
  dataType: 'json',
}).done(function(result) {
	console.log(result);
	handleData(result);
});

$("#new-task-form").on("submit", function (e) {
	console.log("form submitted");
	e.preventDefault();

	$.ajax("http://localhost:4005/" + "item", {
		method: "POST",
		data: {
			task: $('[name="task"]').val()
		}
	}).done(function(data) {
		handleData([data]); 
	})
})

$("body").on("click", ".delete", function (e) {
	console.log(e, "delete button");

	// DELETE item/1
	var $li = $(this).parents("li")

	var id = $li.attr("data-id");		//this is button here.

	$.ajax("http://localhost:4005/" + "item/" + id, {
		method: "DELETE",
	}).done(function(data) {
		if (data.deleted) {
			$li.remove();
		}
	})
})


$('body').on('click', '.checkbox', function() {
	console.log('click');

	var $li = $(this).parents('li');
	var id =  $li.attr("data-id");

	$.ajax("http://localhost:4005/" + "item/" + id, {
		method: "POST"
	}).done(function(data) {
		console.log(data);
		if(!$li.hasClass('.done')) {
			$li.toggleClass('done');
		} else {
			$li.toggleClass('done');
		}
	})
})

	