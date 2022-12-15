console.log("main.js!!");

$(document).ready(()=>{
	console.log("Ready!!");
	
let ninzuu 
let kingaku

	$("#siken").click(()=>{
		/* const ninzuu = document.getElementById("ninzuu").value;
		const kingaku = document.getElementById("kingaku").value; */
		ninzuu = $("#ninzuu").val();
		kingaku = $("#kingaku").val();
		console.log(ninzuu);
		console.log(kingaku);
		$("#goukei").text("一人当たりの金額 = "+kingaku / ninzuu);
	});

//電卓--------------------------------------------------------
	let siki1 = 0; //足す式
	let keisan = 1; // 1 or 2  2だとsiki2に格納
	let siki2 = 0;
	let enzan = 0; // 1..+  2..-  3..*  4../ 


	 $("#ac").click(()=>{
		$("#kekka").text("");
	});
	 $("#1").click(()=>{
		$("#kekka").text($("#kekka").text() +"1");
		if (keisan <= 1){
			siki1 = Number($("#kekka").text());
		}else if(keisan >= 2){
			siki2 = Number($("#kekka").text());
		}
	});	
	$("#2").click(()=>{
		$("#kekka").text($("#kekka").text() +"2");
		if (keisan <= 1){
			siki1 = Number($("#kekka").text());
		}else if(keisan >= 2){
			siki2 = Number($("#kekka").text());
		}
	});	
	$("#3").click(()=>{
		$("#kekka").text($("#kekka").text() +"3");
		if (keisan <= 1){
			siki1 = Number($("#kekka").text());
		}else if(keisan >= 2){
			siki2 = Number($("#kekka").text());
		}
	});	
	$("#4").click(()=>{
		$("#kekka").text($("#kekka").text() +"4");
		if (keisan <= 1){
			siki1 = Number($("#kekka").text());
		}else if(keisan >= 2){
			siki2 = Number($("#kekka").text());
		}
	});	
	$("#5").click(()=>{
		$("#kekka").text($("#kekka").text() +"5");
		if (keisan <= 1){
			siki1 = Number($("#kekka").text());
		}else if(keisan >= 2){
			siki2 = Number($("#kekka").text());
		}
	});	
	$("#6").click(()=>{
		$("#kekka").text($("#kekka").text() +"6");
		if (keisan <= 1){
			siki1 = Number($("#kekka").text());
		}else if(keisan >= 2){
			siki2 = Number($("#kekka").text());
		}
	});	
	$("#7").click(()=>{
		$("#kekka").text($("#kekka").text() +"7");
		if (keisan <= 1){
			siki1 = Number($("#kekka").text());
		}else if(keisan >= 2){
			siki2 = Number($("#kekka").text());
		}
	});	
	$("#8").click(()=>{
		$("#kekka").text($("#kekka").text() +"8");
		if (keisan <= 1){
			siki1 = Number($("#kekka").text());
		}else if(keisan >= 2){
			siki2 = Number($("#kekka").text());
		}
	});	
	$("#9").click(()=>{
		$("#kekka").text($("#kekka").text() +"9");
		if(keisan <= 1){
			siki1 = Number($("#kekka").text());
		}else if(keisan>=2){
			siki2 = Number($("#kekka").text());
		}
	});	
	$("#zero").click(()=>{
		$("#kekka").text($("#kekka").text() +"0");
		if(keisan <= 1){
			siki1 = Number($("#kekka").text());
		}else if(keisan >= 2){
			siki2 = Number($("#kekka").text());
		}
	})
	$("#ten").click(()=>{
		$("#kekka").text($("#kekka").text() +".");
		if(keisan <= 1){
			siki1 = Number($("#kekka").text());
		}else if(keisan >= 2){
			siki2 = Number($("#kekka").text());
		}
	})
	$("#puramai").click(()=>{
		if(keisan <= 1){
			siki1 *= Number(-1);
			$("#kekka").text(siki1);
		}else if(keisan >= 2){
			siki2 *= Number(-1);
			$("#kekka").text(siki2);
		}
	})


	$("#purasu").click(()=>{
		$("#kekka").text("");
		enzan = 1;
		keisan = 2;
		console.log(keisan);	
	});
	$("#mainasu").click(()=>{
		$("#kekka").text("");
		enzan = 2;
		keisan = 2;
		
	});
	$("#kakeru").click(()=>{
		$("#kekka").text("");
		naibu = (siki1 * siki2);
		enzan = 3;
		keisan = 2;
		console.log(enzan);
		
	});
	$("#waru").click(()=>{
		$("#kekka").text("");
		naibu = (siki1 / siki2);
		enzan = 4
		keisan = 2
		
	});
	$("#ikoru").click(()=>{
		if(enzan<=1){
			siki1+=siki2
		}else if(enzan>=4){
			siki1/=siki2
		}else if(enzan>=3){
			siki1*=siki2
		}else if(enzan>=2){
			siki1-=siki2
		}
		$("#kekka").text(siki1);
		keisan = 1;
		console.log(keisan);
	});

	$("#percent").click(()=>{
		siki2 = $("#kekka").text();
		siki2/=100;
		$("#kekka").text(siki2);
	})
});