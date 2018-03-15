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

	
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcInRlc3RcIik7XG5cbmZ1bmN0aW9uIGhhbmRsZURhdGEgKHJlc3VsdCkge1xuXHR2YXIgZGF0YSA9IHJlc3VsdDtcblx0Ly9jb25zb2xlLmxvZyhkYXRhWzBdLmNvbXBsZXRlZCk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHRvRG9MaXN0VWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvRG9JdGVtc1wiKVxuXG5cdFx0dmFyIGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuXHRcdGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveFwiKTtcblxuXHRcdHZhciB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdFx0JCh0YXNrKS5odG1sKGRhdGFbaV0udGFzaykuYWRkQ2xhc3MoXCJ0YXNrXCIpO1xuXHRcdFx0dGFzay5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGRhdGFbaV0uaWQpO1xuXHRcdFx0dG9Eb0xpc3RVbC5hcHBlbmRDaGlsZCh0YXNrKTtcblxuXHRcdHRhc2suYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuXG5cdFx0dmFyIGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0XHQkKGRlbGV0ZUJ1dHRvbikuaHRtbCgnRGVsZXRlJykuYWRkQ2xhc3MoXCJkZWxldGVcIik7XG5cdFx0XHR0YXNrLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cdH1cbn1cblxudmFyIGNoZWNrQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NoZWNrQm94XCIpO1xuY29uc29sZS5sb2coY2hlY2tCb3hlcyArIFwiY2hlY2tcIik7XG5cbiQuYWpheCh7XG4gIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjQwMDUvaXRlbVwiLFxuICBtZXRob2Q6IFwiR0VUXCIsXG4gIGRhdGFUeXBlOiAnanNvbicsXG59KS5kb25lKGZ1bmN0aW9uKHJlc3VsdCkge1xuXHRjb25zb2xlLmxvZyhyZXN1bHQpO1xuXHRoYW5kbGVEYXRhKHJlc3VsdCk7XG59KTtcblxuJChcIiNuZXctdGFzay1mb3JtXCIpLm9uKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XG5cdGNvbnNvbGUubG9nKFwiZm9ybSBzdWJtaXR0ZWRcIik7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblxuXHQkLmFqYXgoXCJodHRwOi8vbG9jYWxob3N0OjQwMDUvXCIgKyBcIml0ZW1cIiwge1xuXHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0ZGF0YToge1xuXHRcdFx0dGFzazogJCgnW25hbWU9XCJ0YXNrXCJdJykudmFsKClcblx0XHR9XG5cdH0pLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuXHRcdGhhbmRsZURhdGEoW2RhdGFdKTsgXG5cdH0pXG59KVxuXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmRlbGV0ZVwiLCBmdW5jdGlvbiAoZSkge1xuXHRjb25zb2xlLmxvZyhlLCBcImRlbGV0ZSBidXR0b25cIik7XG5cblx0Ly8gREVMRVRFIGl0ZW0vMVxuXHR2YXIgJGxpID0gJCh0aGlzKS5wYXJlbnRzKFwibGlcIilcblxuXHR2YXIgaWQgPSAkbGkuYXR0cihcImRhdGEtaWRcIik7XHRcdC8vdGhpcyBpcyBidXR0b24gaGVyZS5cblxuXHQkLmFqYXgoXCJodHRwOi8vbG9jYWxob3N0OjQwMDUvXCIgKyBcIml0ZW0vXCIgKyBpZCwge1xuXHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0fSkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG5cdFx0aWYgKGRhdGEuZGVsZXRlZCkge1xuXHRcdFx0JGxpLnJlbW92ZSgpO1xuXHRcdH1cblx0fSlcbn0pXG5cblxuJCgnYm9keScpLm9uKCdjbGljaycsICcuY2hlY2tib3gnLCBmdW5jdGlvbigpIHtcblx0Y29uc29sZS5sb2coJ2NsaWNrJyk7XG5cblx0dmFyICRsaSA9ICQodGhpcykucGFyZW50cygnbGknKTtcblx0dmFyIGlkID0gICRsaS5hdHRyKFwiZGF0YS1pZFwiKTtcblxuXHQkLmFqYXgoXCJodHRwOi8vbG9jYWxob3N0OjQwMDUvXCIgKyBcIml0ZW0vXCIgKyBpZCwge1xuXHRcdG1ldGhvZDogXCJQT1NUXCJcblx0fSkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0aWYoISRsaS5oYXNDbGFzcygnLmRvbmUnKSkge1xuXHRcdFx0JGxpLnRvZ2dsZUNsYXNzKCdkb25lJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRsaS50b2dnbGVDbGFzcygnZG9uZScpO1xuXHRcdH1cblx0fSlcbn0pXG5cblx0Il19
