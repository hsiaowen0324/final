window.onscroll = function() {scrollFunction()};
 function scrollFunction() {
  if (document.body.scrollTop >700 || document.documentElement.scrollTop >700) {
  	document.getElementById("top-info-scroll").style.display = 'block';
		document.getElementById("top-info-before").style.display = 'none';


  } else {
   		document.getElementById("top-info-scroll").style.display = 'none';
		document.getElementById("top-info-before").style.display = 'block';

  }
}




 $(function () {
 $('#myTab a[href="#pills-new"]').tab('show')
$('#myTab a[href="#pills-hot"]').tab('show')
 $('#myTab a[href="#pills-discount"]').tab('show')
})
