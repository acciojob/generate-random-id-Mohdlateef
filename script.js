const Charecters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function makeid(l) {
  // write your code here
	let result=' ';
	const charlength=Charecters.length;
	for(let i=0;i<l;i++)
		{
			result+=Charecters.charAt(Math.floor(Math.random()*charlength));
		}
	return result;
	
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
