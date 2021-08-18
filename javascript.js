
function fontSizeSet()
{
	var font = document.getElementById('optn').value;
    document.getElementById('textInput').style.fontSize=font;
}

function Download()
{
	
	var userInput = document.getElementById('textInput').value;
    var dname = document.getElementById('docName').value;
	var blob = new Blob([userInput], {type: "text/plain:charset=utf-8"});
	var url = window.URL.createObjectURL(blob);
	var anchor = document.createElement("a");
	anchor.href = url;
	if(dname=="")
	{
		anchor.download = "Online Notepad File.txt";
	}
	else
	{
	  	anchor.download = dname+".txt";
    }
	anchor.click();
	window.URL.revokeObjectURL(url);
	document.removeChild(anchor);
}
