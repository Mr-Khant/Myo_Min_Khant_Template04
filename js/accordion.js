$(document).ready(function () {

    $('.default > .acc-text > .plus').hide();
    $('.default > .acc-text > .minus').show();

    $('.default > .p-content').show();

    $(".acc-text").on("click", function () {


        $(".acc-text")
            .siblings(".p-content")
            .slideUp(200);

        $(".acc-text").find('.plus').show();
        $(".acc-text").find('.minus').hide();

        $(this).find(".minus").show();
        $(this).find(".plus").hide();

        $(this)
            .siblings(".p-content")
            .slideDown(200);




    });


})