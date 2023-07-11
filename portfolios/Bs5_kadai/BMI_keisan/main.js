console.log("main.js!!");
let bmi = 0;
let tekisei = 0;

//計算ボタンが押された時の処理
$("#keisan").click(()=>{
  let sinchou = $("#sinchou").val();
  let taijuu = $("#taijuu").val();
  sinchou = sinchou / 100 //身長をmに直す
  console.log(sinchou, taijuu);

  if(!$("#sinchou").val() || !$("#taijuu").val()){
    alert("身長・体重に数値を入れてください");
  }else{
    if(Math.sign(sinchou) == -1 || Math.sign(taijuu) == -1){
      alert("身長・体重には正の数を入れてください");

    }else{
    bmi = Math.floor((taijuu / (sinchou ** 2)) * 10);
    console.log(bmi);
    bmi = bmi / 10;
    tekisei = (sinchou ** 2) * 22;

    $("#bmi").text("あなたのBMIは" + bmi + "です。");
    $("#tekisei").text("身長" + sinchou * 100 + "cmの適正体重は" + Math.floor(tekisei) + "kgです。");
    };
  };
});
