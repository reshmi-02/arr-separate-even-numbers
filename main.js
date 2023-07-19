var arr=[11,12,45,56,45,34];
document.write("arr=[11,12,45,56,45,34]"+"<br>"+"<br>");
document.write("Even numbers are"+"<br>"+"<br>");
for (let i=0;i<arr.length;i++){
	if(arr[i]%2==0){
		document.write(arr[i]+"<br>");
	}
}