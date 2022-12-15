console.log("main.js!!");

let snd0 = null // サウンド1
let snd1 = null
let snd2 = null
let snd3 = null
let snd4 = null
let snd5 = null
let snd6 = null
let snd7 = null
let snd8 = null
let snd9 = null

// Ready
$(document).ready(()=>{
	console.log("Ready!!");

	//サウンド1
	snd0 = new Howl({
		src:["./sounds/sample01.mp3"],
		loop: false,
		volume: 1.0
	});
	console.log(snd1)
	snd1 = new Howl({
		src:["./sounds/和太鼓でドドン.mp3"],
		loop: false,
		volume: 1.0
	});
	snd2 = new Howl({
		src:["./sounds/落ち込む.mp3"],
		loop: false,
		volume: 1.0
	});
	snd3 = new Howl({
		src:["./sounds/自主規制ピー音.mp3"],
		loop: false,
		volume: 1.0
	});
	snd4 = new Howl({
		src:["./sounds/ラッパのファンファーレ.mp3"],
		loop: false,
		volume: 1.0
	});
	snd5 = new Howl({
		src:["./sounds/ちゃんちゃん♪3.mp3"],
		loop: false,
		volume: 1.0
	});
	snd6 = new Howl({
		src:["./sounds/チーン1.mp3"],
		loop: false,
		volume: 1.0
	});
	snd7 = new Howl({
		src:["./sounds/クイズ出題1.mp3"],
		loop: false,
		volume: 1.0
	});
	snd8 = new Howl({
		src:["./sounds/クイズ正解1.mp3"],
		loop: false,
		volume: 1.0
	});
	snd9 = new Howl({
		src:["./sounds/.mp3"],
		loop: false,
		volume: 1.0
	});
	
	// サウンド再生
	$("#snd0").click(()=>{
		snd0.play(); //　サウンド再生
	});

	$("#snd1").click(()=>{
		snd1.play();
	});
	$("#snd2").click(()=>{
		snd2.play();
	});
	$("#snd3").click(()=>{
		snd3.play();
	});
	$("#snd4").click(()=>{
		snd4.play();
	});
	$("#snd5").click(()=>{
		snd5.play();
	});
	$("#snd6").click(()=>{
		snd6.play();
	});
	$("#snd7").click(()=>{
		snd7.play();
	});
	$("#snd8").click(()=>{
		snd8.play();
	});
	$("#snd9").click(()=>{
		snd9.play();
	});
});