console.log("main.js!!");

//変数--------------------------------------------------
let click20230113 = 0;

// Ready
$(document).ready(()=>{
	console.log("Ready!!");

	console.log("何？！見つけましたか！このブログはところどころ隠し要素があるので、是非探してみてね！");

	$(".honbun2").css("visibility", "hidden");

	$("#cssbtn").click(()=>{
		$("#head").html(`<link rel="stylesheet" href="./css/custom.css">`);
		$(".honbun2").css("visibility", "visible");
	})

	$("#20230113").click(()=>{
		click20230113 += 1
		if(click20230113 <= 0){
			$(".20230113").css("visibility", "visible");
		}else{
			$(".20230113").css("visibility", "hidden");
			click20230113 = -1
		}
	})

});