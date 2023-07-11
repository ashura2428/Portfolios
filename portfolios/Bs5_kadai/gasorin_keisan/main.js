console.log("main.js!!");

$("#zei_num").css("visibility", "hidden");
let ryoukin = 0;

//計算ボタンが押された時の処理
$("#keisan").click(()=>{
  let gasorin = $("#gasorin").val();
  let soukou = $("#soukou").val();
  let nenpi = $("#nenpi").val();

  if(!$("#gasorin").val() || !$("#soukou").val() || !$("#nenpi").val()){
    alert("ガソリン価格・走行距離・車の燃費に数値を入れてください");
  }else{
    if(Math.sign(gasorin) == -1 || Math.sign(soukou) == -1){
      alert("ガソリン価格・走行距離・車の燃費には正の数を入れてください");
    }else{
      ryoukin = Math.floor(gasorin * soukou / nenpi);

    $("#ryoukin").text("ガソリン代は" + ryoukin + "円");
    };
  };
});
