function fotoGoster1(event) {
    let srcUserOne = URL.createObjectURL(event.target.files[0]);
    let preview = document.getElementById("output");
    preview.src = srcUserOne;
    $("#img1").attr('src', srcUserOne);
}

function fotoGoster2(event) {
    let srcUserTwo = URL.createObjectURL(event.target.files[0]);
    let preview = document.getElementById("output2");
    preview.src = srcUserTwo;
    $("#img2").attr('src', srcUserTwo);
}
function fotoGoster3(event) {
    let srcUserThree = URL.createObjectURL(event.target.files[0]);
    let preview = document.getElementById("output3");
    preview.src = srcUserThree;
    $("#img3").attr('src', srcUserThree);

}
function fotoGoster4(event) {
    let srcUserFour = URL.createObjectURL(event.target.files[0]);
    let preview = document.getElementById("output4");
    preview.src = srcUserFour;
    $("#img4").attr('src', srcUserFour);
}
function checkButton() {

}

function hideDiv() {
  let satirSayisi = $("#turSayi").val();

    if ($("#ad1").val() == "" || $("#ad2").val() == "" || $("#ad3").val() == "" || $("#ad4").val() == "") {
        swal.fire(
            'HOOPS',
            'TÜM OYUNCULARIN ADINI GİRİNİZ',
            'error')
    }
    else if (!($('input:checkbox').is(":checked"))) {
        Swal.fire("İLK OYUNCUYU SEÇİNİZ");

    }

    else {
        (satirSayisi != "yazi") 
        $("#startPage").hide();
        $("#gamePage").show();
        $("#name1").text($("#ad1").val());
        $("#name2").text($("#ad2").val());
        $("#name3").text($("#ad3").val());
        $("#name4").text($("#ad4").val());
    }

    satirYazdir(satirSayisi);
}
function satirYazdir(satirSayisi) {
    
    for (var i = 1; i <= satirSayisi; i++) {
        var asd = "<tr id=satir" + i + "></tr>";
        $("#tbody").append(asd);
        var icerik = ""
        for (var j = 1; j <= 4; j++) {
            icerik += `<td id="sutun${j}"><input type="number"></td>`
        }
        $("#satir" + i).append(icerik)
    }

}



