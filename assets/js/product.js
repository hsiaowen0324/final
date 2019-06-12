$(function() {
$('.qtyplus').click(function(e) {
e.preventDefault();
fieldName = $(this).attr('field');
var currentVal = parseInt($('input[name=' + fieldName + ']').val());
if (!isNaN(currentVal)) {
$('input[name=' + fieldName + ']').val(currentVal + 1);
} else {
$('input[name=' + fieldName + ']').val(0);
}
});
$(".qtyminus").click(function(e) {
e.preventDefault();
fieldName = $(this).attr('field');
var currentVal = parseInt($('input[name=' + fieldName + ']').val());
if (!isNaN(currentVal) && currentVal > 0) {
$('input[name=' + fieldName + ']').val(currentVal - 1);
} else {
$('input[name=' + fieldName + ']').val(0);
}
});
$('.w-button').click(function () {
$('html,body').animate({scrollTop:$('#comment').offset().top}, 800);
});
});
function boardsubmit(){
alert("成功送出留言!!感謝您的回饋")
}

