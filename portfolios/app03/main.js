console.log("main.js!!");

// Ready
$(document).ready(()=>{
	console.log("Ready!!");

//主人公の変数--------------------------
let lv = 1;
let exp = 0;
let exp_kakutoku = 0;
let exp_hituyou = 0;
let exp_tugi = 0;
let str = 2;
let def = 1;
let maxhp = 100;
let hp = 100;
let kougeki;
//敵の変数--------------------------------
let str_teki = 0;
let def_teki = 0;
let hp_teki = 0
let kougeki_teki;
let teki_name
//戦闘の変数--------------------------------
let teki = 1 //敵の種類
let sentou = 0 //戦闘中は1
let turn = 0 //戦闘のターン


//初期計算---------------------------------------------
kougeki = Math.round(5*(str-=def_teki)*(lv / 2.542));
kougeki_teki = Math.round(5*(str_teki-=def)*(lv / 2.542));
exp_tugi = Math.round(12 * (lv * 1.75 * lv / 1.71456));
exp_hituyou += Math.round(exp_tugi);  //Math.roundは四捨五入
$("#exp").text(exp_hituyou+" / "+exp);
//レベルの処理---------------------------------------------
setInterval(()=>{
	console.log(exp_tugi);
	
	if (exp >= exp_hituyou){ // レベルアップ処理
		lv += 1
		exp_tugi *= 2
		exp_tugi = 12 * (lv * 1.75 * lv / 1.71456);
			if (exp_tugi >= 60000){
				exp_tugi = 60000;
			};	
		exp_hituyou += Math.round(exp_tugi);
		$("#exp").text(exp_hituyou+"/"+exp);
		$("#lv").text("lv " + lv);
		if(lv <=10){
			maxhp += Math.round(25*(lv/2.845));
			str += 1*(lv/3.14);
			def += 1*(lv/3.14);
		}
		hp = maxhp;
		$("#hp").text(Math.round(maxhp)+" / "+Math.round(hp));
		$("#str").text(Math.round(str));
		$("#def").text(Math.round(def));
	};
},700);

//探索ボタン---------------------------------------------------
	$("#btn1").click(()=>{
		let rnd =Math.floor(Math.random() * (teki + 1 - 1)) +1;
		console.log(rnd);
		console.log(sentou);
		if(sentou <= 0){
		if(rnd >= teki){
			$("#text1").text("スライムが現れた");
			sentou = 1
			str_teki = 2
			def_teki = 1
			hp_teki = 10
			exp_kakutoku = 10
			kougeki_teki = Math.round(5*(str_teki-=def)*(lv / 2.542));
			if(kougeki_teki <= 0){kougeki_teki = 0};
			teki_name = "スライム"
			$("#hp_teki").text("HP "+10+" / "+hp_teki);
			$("#teki").text(teki_name);

		}else if(rnd >= teki -1){
			$("#text1").text("ゴブリンが現れた");
			sentou = 1

		}else if(rnd >= teki -2){
			$("#text1").text("こうもりが現れた");
			sentou = 1

		}
	}else if(sentou >= 1){
		$("#text1").text("戦闘中は探索ができない！");
	};
	});

//攻撃ボタン-------------------------------------------------
	$("#btn2").click(()=>{
		str = $("#str").text();
		kougeki = Math.round(5*(str-=def_teki)*(lv / 2.542));
		if(sentou >= 1){
			if(kougeki <= 0){kougeki= 0};
			turn+=1
			if(turn <= 1){
			$("#text1").text(teki_name+`に`+kougeki+"ダメージ！");
			$("#btn2").text("進む");
			hp_teki -= Math.round(kougeki);
			$("#hp_teki").text("HP "+10+" / "+hp_teki);
		}else if(turn <= 2){
			$("#text1").text(teki_name+"の攻撃"+kougeki_teki+"ダメージ！");
			hp -= Math.round(kougeki_teki);
			$("#hp").text(maxhp+" / "+hp);
			$("#btn2").text("攻撃");
			turn = 0
			if(hp_teki <= 0){
				hp_teki = 0;
				$("#text1").text(teki_name+"に勝利した！経験値を"+exp_kakutoku+"手に入れた！");
				exp += exp_kakutoku;
				$("#exp").text(exp_hituyou+"/"+exp);
				$("#teki").text("");
				$("#hp_teki").text("");
				sentou = 0
			};
		};
		};
	});
});
