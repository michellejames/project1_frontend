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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xuXG5mdW5jdGlvbiBoYW5kbGVEYXRhIChyZXN1bHQpIHtcblx0dmFyIGRhdGEgPSByZXN1bHQ7XG5cdGNvbnNvbGUubG9nKGRhdGFbMF0uY29tcGxldGVkKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdG9Eb0xpc3RVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9Eb0l0ZW1zXCIpXG5cblx0XHR2YXIgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRcdCQodGFzaykuaHRtbCgnPGlucHV0IGlkPVwiY2hlY2tCb3hcIiB0eXBlPVwiY2hlY2tib3hcIj4nICsgZGF0YVtpXS50YXNrKS5hZGRDbGFzcyhcInRhc2tcIik7XG5cdFx0XHR0b0RvTGlzdFVsLmFwcGVuZENoaWxkKHRhc2spO1xuXG5cdFx0Ly8gdmFyIGlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdC8vIFx0JChpZCkuaHRtbChkYXRhW2ldLmlkKS5hZGRDbGFzcyhcImlkXCIpO1xuXHRcdC8vIFx0dG9Eb0xpc3RVbC5hcHBlbmRDaGlsZChpZCk7XG5cblx0XHQvLyB2YXIgY29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdC8vIFx0JChjb21wbGV0ZWQpLmh0bWwoZGF0YVtpXS5jb21wbGV0ZWQpLmFkZENsYXNzKFwiY29tcGxldGVkXCIpO1xuXHRcdC8vIFx0dG9Eb0xpc3RVbC5hcHBlbmRDaGlsZChjb21wbGV0ZWQpO1xuXHRcblx0XHR2YXIgY2hlY2tCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NoZWNrQm94XCIpO1xuXHRcdHZhciB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrXCIpO1xuXG5cdFx0Y2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lciAoIFwiY2xpY2tcIiwgY2hlY2tpbmdPZmZJdGVtcyApO1xuXG5cdFx0ZnVuY3Rpb24gY2hlY2tpbmdPZmZJdGVtcyAoKSB7XG5cblx0XHRcdGlmICggY2hlY2tCb3guY2hlY2tlZCApIHtcblx0XHRcdFx0dGFzay5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XG5cdFx0XHRcdGNoZWNrQm94LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCAoIFwiZG9uZVwiICk7XG5cblxuXHRcdFx0fSBlbHNlIGlmICggIWNoZWNrQm94LmNoZWNrZWQgKSB7XG5cblx0XHRcdFx0dGFzay5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xuXHRcdFx0XHRjaGVja0JveC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUgKCBcImRvbmVcIiApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cbn1cblxuJC5hamF4KHtcbiAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwNS9pdGVtXCIsXG4gIG1ldGhvZDogXCJHRVRcIixcbiAgZGF0YVR5cGU6ICdqc29uJyxcbn0pLmRvbmUoZnVuY3Rpb24ocmVzdWx0KSB7XG5cdGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdGhhbmRsZURhdGEocmVzdWx0KTtcbn0pO1xuXG5cdFxuW1wiMFwiXS50YXNrIl19
