var satirid = 1, secilenId;
function clear() {
    $("#ad").val('');
    $("#soyad").val('');
    $("#email").val('');
    $("#no").val('');
}
function openModel() {
    $("#edit").hide();
    $("#add").show();
    //clear();
    $("#no").inputmask({ "mask": "(999) 999-9999" });


}
function kisiekle() {

    var ad = $('#ad').val();
    var soyad = $('#soyad').val();
    var email = $('#email').val();
    var no = $('#no').val();
    if (ad == "" || soyad == "") {

    }
    else {
        clear();
        var markup = "<tr id=satir" + satirid + "><td id='isim" + satirid + "'> " + ad + "</td><td id='soyadi" + satirid + "'>" + soyad + "</td> <td id='mail" + satirid + "'>" + email + "</td><td id='tNO" + satirid + "'>" + no + "</td><td><button id= 'dznle' onclick='duzenBtn(" + satirid + ")' class='btn btn-warning btn-sm' ><i class='fas fa-edit' >Düzenle</i></button> <button onclick='silBtn(" + satirid + ")'class='btn btn-danger btn-sm'< i class='fas fa-times'> Sil</i></button ></td ></tr > ";
        $("table tbody").append(markup);
        satirid++;
        $("#exampleModal").modal('hide');


    }
}


function duzenBtn(dsa) {
    $("#exampleModal").modal("show");
    $("#add").hide();
    $("#edit").show();
    $("#ad").val($("#isim" + dsa).text());
    $("#soyad").val($("#soyadi" + dsa).text());
    $("#email").val($("#mail" + dsa).text());
    $("#no").val($("#tNO" + dsa).text());

    secilenId = dsa;

}
function kisiGuncelle() {
    var yeniAd = $("#ad").val();
    console.log(yeniAd);
    $("#isim" + secilenId).text(yeniAd);

    var yeniSoyad = $("#soyad").val();
    $("#soyadi" + secilenId).text(yeniSoyad);

    var yeniMail = $("#email").val();
    $("#mail" + secilenId).text(yeniMail);

    var yeniNo = $("#no").val();
    $("#tNO" + secilenId).text(yeniNo);
    clear();

}
//telefon no 
document.addEventListener('DOMContentLoaded', () => {
    for (const el of document.querySelectorAll("[placeholder][data-slots]")) {
        const pattern = el.getAttribute("placeholder"),
            slots = new Set(el.dataset.slots || "_"),
            prev = (j => Array.from(pattern, (c, i) => slots.has(c) ? j = i + 1 : j))(0),
            first = [...pattern].findIndex(c => slots.has(c)),
            accept = new RegExp(el.dataset.accept || "\\d", "g"),
            clean = input => {
                input = input.match(accept) || [];
                return Array.from(pattern, c =>
                    input[0] === c || slots.has(c) ? input.shift() || c : c
                );
            },
            format = () => {
                const [i, j] = [el.selectionStart, el.selectionEnd].map(i => {
                    i = clean(el.value.slice(0, i)).findIndex(c => slots.has(c));
                    return i < 0 ? prev[prev.length - 1] : back ? prev[i - 1] || first : i;
                });
                el.value = clean(el.value).join``;
                el.setSelectionRange(i, j);
                back = false;
            };
        let back = false;
        el.addEventListener("keydown", (e) => back = e.key === "Backspace");
        el.addEventListener("input", format);
        el.addEventListener("focus", format);
        el.addEventListener("blur", () => el.value === pattern && (el.value = ""));
    }
});


function silBtn(asd) {
    $("#satir" + asd).remove();
}


// $('#add').click(function()
// {
//     if( !$('#myMessage').val() ) {
//        alert('warning');
//     }
// });