module.exports = function main(number) {
    var str=number.toString();
	var s1=["._.","...","._.","._.","...","._.","._.","._.","._.","._."];
	var s2=["|.|","..|","._|","._|","|_|","|_.","|_.","..|","|_|","|_|"];
	var s3=["|_|","..|","|_.","._|","..|","._|","|_|","..|","|_|","..|"];
	var l=str.length;
	var num=new Array();
	var ss1="",ss2="",ss3="";
	for(var i=0;i<l;i++)
	{
		ss1+=s1[str[i]];
		ss2+=s2[str[i]];
		ss3+=s3[str[i]];
	}
	num.push(ss1);
	num.push(ss2);
	num.push(ss3);
	var sk=num.join('\n');
	console.log(sk); 
};