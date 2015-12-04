// Will target all a tags except href=#carousel-example-generic

// $('a:not([href=#carousel-example-generic])').click(function(){
//     $('html, body').animate({
//         scrollTop:$( $(this).attr('href') ).offset().top -50
//     }, 1000);
//     return false;
// });


$('li a').click(function(){
    $('html, body').animate({
        scrollTop:$( $(this).attr('href') ).offset().top -50
    }, 1000);
    return false;
});


$('#floor1').on('click', function() {
  $('.floor-heading').html('Floor 1')
  if ($('#floor-plan1').hasClass('hide')) {
    // alert('hidden')
    $('#floor-plan2').addClass('hide')
    $('#floor-plan3').addClass('hide')
    $('#floor-plan1').removeClass('hide')

  } else {
    alert('Do nothing. Already Showing')
  }

})

$('#floor2').on('click', function() {
  $('.floor-heading').html('Floor 2')
  if ($('#floor-plan2').hasClass('hide')) {
    // alert('hidden')
    $('#floor-plan1').addClass('hide')
    $('#floor-plan3').addClass('hide')
    $('#floor-plan2').removeClass('hide')

  } else {
    alert('Do nothing. Already Showing')
  }
})

$('#floor3').on('click', function() {
  $('.floor-heading').html('Floor 3')
  if ($('#floor-plan3').hasClass('hide')) {
    // alert('hidden')
    $('#floor-plan1').addClass('hide')
    $('#floor-plan2').addClass('hide')
    $('#floor-plan3').removeClass('hide')

  } else {
    alert('Do nothing. Already Showing')
  }
})
