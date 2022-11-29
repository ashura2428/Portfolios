console.log("main.js!!");

const URL = "https://www.jma.go.jp/bosai/forecast/data/forecast/210000.json";


// Ready
$(document).ready(()=>{
	console.log("Ready!!");
	// Axiosを使ってみる!!
	const option = {responseType: "blob"};
//------------------------------------------------ メモ＆変数
let weathercodes
let weathercodes2

	// 210000 岐阜
	axios.get("https://www.jma.go.jp/bosai/forecast/data/forecast/210000.json", option).then(res=>{
		// 通信が成功した場合
		console.log("通信成功!!");
//------------------------------------------------ データ
		console.log(res);// データそのもの
		res.data.text().then(str=>{
			let arr = JSON.parse(str);
			console.log(arr);// データ確認
			
//------------------------------------------------ text
			$("#basho1").text(arr[0]["timeSeries"][0]["areas"][0]["area"]["name"] + "の天気"); // 地名の表示
			$("#mino_saikou").text("最高気温: " + arr[0]["timeSeries"][2]["areas"][0]["temps"][1]); // 最高気温
			

			$("#basho2").text(arr[0]["timeSeries"][0]["areas"][1]["area"]["name"] + "の天気"); // 地名の表示
			$("#hida_saikou").text("最高気温: " + arr[0]["timeSeries"][2]["areas"][1]["temps"][1]); // 最高気温
			
			axios.get("./data.json", option).then(res=>{
				res.data.text().then(str2=>{
					let arr2 = JSON.parse(str2);
	
					weathercodes = (arr[0]["timeSeries"][0]["areas"][0]["weatherCodes"][0]); 
				$("#basho1").after(`<img src="./svg/` + arr2[arr[0]["timeSeries"][0]["areas"][0]["weatherCodes"][0]][0] + `">`); // 天気予報の画像表示
	
				weathercodes2 = (arr[0]["timeSeries"][0]["areas"][1]["weatherCodes"][0]);
				$("#basho2").after(`<img src="./svg/` + arr2[arr[0]["timeSeries"][0]["areas"][1]["weatherCodes"][0]][0] + `">`); // 天気予報の画像表示
				});
			});
		});
		

	}).catch(err=>{
		// 通信が失敗した場合
		console.log("通信失敗...");
		console.log(err);// エラー内容
	});
});