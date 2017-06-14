
$("#form-register").on("submit", function(){
	// console.log("form submit");
	//validate name
	var isValid = true;
	if($("#name").val().trim() == ""){
		// console.log("Name is empty");
		$("#name").next("span").text("Name is empty");
		 isValid = false;
	} else{
		$("#name").next("span").text("");
	}

	//validate email
	if($("#email").val().trim() == ""){
		// console.log("Name is empty");
		$("#email").next("span").text("Email is empty");
		 isValid = false;
	} else if($("#email").val().match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) == null){
		// console.log("Name is empty");
		$("#email").next("span").text("Email is invalid");
		 isValid = false;
	}else{
		$("#email").next("span").text("");
	}

	

	//validate phone number
	if($("#phoneNumber").val().trim() == ""){
		// console.log("Name is empty");
		$("#phoneNumber").next("span").text("Phonenumber is empty");
		 isValid = false;
	} else if($("#phoneNumber").val().match(/[0-9]/) == null){
		// console.log("Name is empty");
		$("#phoneNumber").next("span").text("Phonenumber is invalid");
		 isValid = false;
	}else{
		$("#phoneNumber").next("span").text("");
	}

	//validate address

	if($("#address").val().trim() == ""){
		// console.log("Name is empty");
		$("#address").next("span").text("Address is empty");
		 isValid = false;
	} else{
		$("#address").next("span").text("");
	}

	//validate password
	if($("#password").val().trim() == ""){
		// console.log("Name is empty");
		$("#password").next("span").text("Password is empty");
		 isValid = false;
	} else{
		$("#password").next("span").text("");
	}

	//validate date of birth
	if($("#dateOfBirth").val().trim() == ""){
		// console.log("Name is empty");
		$("#dateOfBirth").next("span").text("Date is empty");
		 isValid = false;
	// }else if($("#dateOfBirth").val().match(/^\d{1,2}\/\d{1,2}\/\d{4}$/) == null){
	// 	// console.log("Name is empty");
	// 	$("#dateOfBirth").next("span").text("Date is invalid");
	// 	 isValid = false; 
	}else{
		$("#dateOfBirth").next("span").text("");
	}

	//validate facebook page
	if($("#facebook").val().trim() == ""){
		// console.log("Name is empty");
		$("#facebook").next("span").text("Facebook page is empty");
		 isValid = false;
	} else if($("#facebook").val().match(/facebook.com|fb.com/) == null){
		 $("#facebook").next("span").text("The link is invalid");
		 isValid = false;
	}else{
		$("#facebook").next("span").text("");
	}

	//check input gender
	if(!($(".Gender").is(":checked"))){
		$(".gender_msg").text("Plz chose your gender");
		 isValid = false;
	} else{
		$(".gender_msg").text("");
	}

	return isValid;
});