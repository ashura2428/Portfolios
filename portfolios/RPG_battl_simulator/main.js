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
let strmoto = 2
let str = 2;
let def = 1;
let maxhp = 100;
let hp = 100;
let g = 0;
let g_kakutoku = 0;
let kougeki = 1;
//敵の変数--------------------------------
let encount1 = 100;     //最初のステージのエンカウント確立　敵の数 / encount で出す
let str_teki = 0;
let def_teki = 0;
let maqxhp_teki = 1;
let hp_teki = 1;
let kougeki_teki = 1;
let teki_name = "";
let teki_number = 1;
//戦闘の変数--------------------------------
let rnd; //エンカウントに使用のランダム
let sentou = 0; //戦闘中は1
let turn = 0; //戦闘のターン
//アニメーションの変数
function doAnimation(id, type){
	const elem = $(id);
	elem.addClass("animate__animated");
	elem.addClass(type);
	elem.on("animationend", ()=>{
		elem.off("animationend");
		elem.removeAttr("class");
	});
};


//初期計算 & 初期化---------------------------------------------
exp_tugi = Math.round(12 * (lv * 1.75 * lv / 1.71456));
exp_hituyou += Math.round(exp_tugi);  //Math.roundは四捨五入
$("#exp").text(exp+" / "+exp_hituyou);
$("#str").text(str);
$("#def").text(def);


//探索ボタン---------------------------------------------------
	$("#btn1").click(()=>{
		$("#text2").text("");
		rnd = Math.floor(Math.random() * (encount1 + 1 - 1)) +1;
		console.log(rnd);
		if(sentou <= 0){

		if(rnd < 50){
			teki_name = "スライム";
			teki_number = 1; 	
			str_teki = 2;
			def_teki = 1;
			maxhp_teki = 10;
			hp_teki = maxhp_teki;
			exp_kakutoku = 10;
			g_kakutoku = 2;
			if(kougeki_teki <= 0){kougeki_teki = 1};

		}else if(rnd < 87){
			teki_name = "コウモリ";
			teki_number = 3; 
			str_teki = 4;
			def_teki = 2;
			maxhp_teki = 15;
			hp_teki = maxhp_teki;
			exp_kakutoku = 14;
			g_kakutoku = 3;
			if(kougeki_teki <= 0){kougeki_teki = 1};

		}else if(rnd >= 87){
			teki_name = "ゴブリン";
			teki_number = 2; 
			str_teki = 6;
			def_teki = 3;
			maxhp_teki = 20;
			hp_teki = maxhp_teki;
			exp_kakutoku = 23;
			g_kakutoku = 5
			if(kougeki_teki <= 0){kougeki_teki = 1};
			
		};
		sentou = 2
		$("#text1").text(teki_name+"が現れた");
		$("#hp_teki").text("HP "+hp_teki+" / "+maxhp_teki);
		$("#teki").html(`<img id="teki_image" src="./images/`+teki_number+`.png">`);
		kougeki_teki = Math.round(5*(str_teki-=def)*(lv / 2.542));

	}else if(sentou >= 1){
		$("#text1").text("戦闘中は探索ができない！");
	};
	});

//攻撃ボタン-------------------------------------------------
	$("#btn2").click(()=>{
		str = strmoto
		kougeki = Math.round(5*(str-=def_teki)*(lv/2.542));
		if(sentou >= 2){
			if(kougeki <= 0){kougeki = 1};
			turn += 1
			if(turn <= 1){
				doAnimation("#teki_image", "animate__headShake");
				$("#text1").text(teki_name+`に`+kougeki+"ダメージ！");
				$("#btn2").text("進む");
				hp_teki -= Math.round(kougeki);
				$("#hp_teki").text("HP "+hp_teki+" / "+maxhp_teki);
				if(hp_teki <= 0){
					hp_teki = 0;
					$("#hp_teki").text("HP "+hp_teki+" / "+maxhp_teki);
				}
			// 敵の攻撃---------------------------------------------------------------
			}else if(turn <= 2){
				doAnimation("#hp", "animate__headShake");
				$("#text1").text(teki_name+"の攻撃"+kougeki_teki+"ダメージ！");
				hp -= Math.round(kougeki_teki);
				$("#hp").text(hp+" / "+maxhp);
				$("#btn2").text("攻撃");
				turn = 0		
			};
		};
		// 敵を倒した処理-----------------------------------------------------
		if(hp_teki <= 0){
			if(sentou >= 1){turn += 1};
			sentou = 1
			if(turn >= 3){
				$("#btn2").text("攻撃");
				str = strmoto;
				hp_teki = 1;
				$("#text1").text(teki_name+"に勝利した！ 経験値を "+exp_kakutoku+" 手に入れた！");
				$("#text2").text("お金を "+g_kakutoku+" 手に入れた！");
				g += g_kakutoku;
				exp += exp_kakutoku;
				doAnimation("#exp", "animate__pulse");
				$("#exp").text(exp+" / "+exp_hituyou);
				$("#g").text(g);
				$("#teki").text("");
				$("#hp_teki").html("");
				sentou = 0
				turn = 0
			};
			// レベルの処理-----------------------------------------------------------
			if (exp >= exp_hituyou){
				lv += 1
				doAnimation("#lv", "animate__heartBeat");
				exp_tugi *= 2
				exp_tugi = 12 * (lv * 1.75 * lv / 1.71456);
					if (exp_tugi >= 60000){
						exp_tugi = 60000;
					};	
				exp_hituyou += Math.round(exp_tugi);
				$("#exp").text(exp+" / "+exp_hituyou);
				$("#lv").text("Lv " + lv);
				if(lv <=50){
					maxhp += Math.round(25*(lv/2.845));
					strmoto += 1*(lv/4.14);
					str = strmoto;
					def += 1*(lv/4.84);
				}
				hp = maxhp;
				$("#hp").text(Math.round(hp)+" / "+Math.round(maxhp));
				$("#str").text(Math.round(str));
				$("#def").text(Math.round(def));
				console.log(str)
			}};	
	});

	// セーブデータ機能----------------------------------------------------
	// 保存
	function save() {
        var mydata = document.getElementById("mydata_in").value;
        console.log(`mydata_in = ${mydata_in}`);
        localStorage.setItem('mydata', mydata);
      };
});