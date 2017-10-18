console.log("test");

function handleData (result) {
	var data = result;
	console.log(data[0].completed);

	for (var i = 0; i < data.length; i++) {
		var toDoListUl = document.querySelector(".toDoItems")

		var task = document.createElement("li");
			$(task).html('<input id="checkBox" type="checkbox">' + data[i].task).addClass("task");
			toDoListUl.appendChild(task);

		// var id = document.createElement("li");
		// 	$(id).html(data[i].id).addClass("id");
		// 	toDoListUl.appendChild(id);

		// var completed = document.createElement("li");
		// 	$(completed).html(data[i].completed).addClass("completed");
		// 	toDoListUl.appendChild(completed);
	
		var checkBox = document.querySelector("#checkBox");
		var task = document.querySelector(".task");

		checkBox.addEventListener ( "click", checkingOffItems );

		function checkingOffItems () {

			if ( checkBox.checked ) {
				task.style.textDecoration = "line-through";
				checkBox.parentNode.classList.add ( "done" );


			} else if ( !checkBox.checked ) {

				task.style.textDecoration = "none";
				checkBox.parentNode.classList.remove ( "done" );
			}
		}
	}


}

$.ajax({
  url: "http://localhost:4005/item",
  method: "GET",
  dataType: 'json',
}).done(function(result) {
	console.log(result);
	handleData(result);
});

	
["0"].task