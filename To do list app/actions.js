var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul")
var firstbutton = document.getElementById("firstbutton")

function inputLength()
{
	return input.value.length;
}

function checkIfThere()
{
	for(var i=0; i< ul.children.length; i++)
	{
		 if (input.value === (ul.children[i].textContent))
		 {
		 	
		 	input.value= ""
		 	alert("already there")
		 	return
		 }
	}

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value ="";	
}


function createListElement()
{			
			checkIfThere();
}

function addListClick()
{
	if(inputLength()>0)
	{
			createListElement();
	}
}

function addListEnter(event)
{
	var which= event.which
	if(inputLength() >0 && which === 13)
	{
			createListElement();
	}
}




button.addEventListener("click", addListClick);

input.addEventListener("keydown", addListEnter); 

	

