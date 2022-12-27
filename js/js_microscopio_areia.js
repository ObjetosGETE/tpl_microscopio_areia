$(".botao1").on("click", function () {
    $(this).prop("disabled", true);
    $("#seta").addClass("movimento");
    $("#seta").addClass("seta2");
    $(".botao2").prop("disabled", false);
});

$(".botao2").on("click", function () {
    $(this).prop("disabled", true);
    $("#seta").removeClass("movimento");
    $("#seta").removeClass("seta2");
    $(".botao1").prop("disabled", false);
});