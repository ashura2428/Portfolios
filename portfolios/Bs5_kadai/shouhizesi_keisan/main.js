console.log("main.js!!");

let sonota;
let zei = Math.floor(kingaku * 0.1);

$("#zei_num").css("visibility", "hidden");

//計算ボタンが押された時の処理
$("#keisan").click(()=>{
  let kingaku = $("#kingaku").val();
  sonota = $("#zeiritu").val();
  console.log(sonota);

  if ($("#rbn10").is(":checked")){
    zei = Math.floor(kingaku * 0.1);
    kingaku = Number(kingaku) + zei;
    $("#zei").text("税金" + zei + "円");
    $("#zeikomi").text("税込み価格" + kingaku + "円");

  }else if($("#rbn8").is(":checked")){
    zei = Math.floor(kingaku * 0.08);
    kingaku = Number(kingaku) + zei;
    $("#zei").text("税金" + zei + "円");
    $("#zeikomi").text("税込み価格" + kingaku + "円");
    
  }else if($("#rbnsonota").is(":checked")){
    zei = Math.floor(kingaku * Number(sonota * 0.01));
    kingaku = Number(kingaku) + zei;
    $("#zei").text("税金" + zei + "円");
    $("#zeikomi").text("税込み価格" + kingaku + "円");
  
  };
});


//ラジオボタンがその他に切り替わったとき
$('input[name="radio1"]').change(function() {
  if ($('#rbn10').is(':checked')) {
    $("#zei_num").css("visibility", "hidden");

  } else if ($('#rbn8').is(':checked')) {
    $("#zei_num").css("visibility", "hidden");

  } else if ($('#rbnsonota').is(':checked')) {
    $("#zei_num").css("visibility", "visible");
  }
});

