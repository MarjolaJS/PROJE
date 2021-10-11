var satirid=1;

function kisiekle() {
    var ad = $('#ad').val();
    var soyad = $('#soyad').val();
    var email = $('#email').val();
    var no = $('#no').val();
    var markup = "<tr id=satir"+satirid+"><td id='isim"+satirid+"'> " + ad + "</td><td>" + soyad + "</td><td>" + email + "</td><td>" + no + "</td><td><button  onclick='duzenBtn("+satirid+")' class='btn btn-warning btn-sm' ><i class='fas fa-edit' >Düzenle</i></button> <button onclick='silBtn("+satirid+")'class='btn btn-danger btn-sm'< i class='fas fa-times'> Sil</i></button ></td ></tr > ";
    $("table tbody").append(markup);
    satirid++;
}


function duzenBtn(dsa){
    $("#exampleModal").modal("show");
    $("#ad").val($("#isim"+dsa).text());

}
function silBtn(asd){
$("#satir"+asd).remove();

}

