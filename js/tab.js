$(document).ready(function () {
    $('.story-tag li:first-child').find('a').addClass('story-active');
    $('.list-tab').hide();
    $('.list-tab:first').show();

    $('.story-tag li').click(function () {
        $('.story-tag li').find('a').removeClass('story-active');
        $(this).find('a').addClass('story-active');
        $('.list-tab').hide();

        var activestory = $(this).find('a').attr('href');
        $(activestory).show();
        return false;
    });
})