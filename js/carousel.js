
// room selection function 
$('.room-picture').click(function() {

var id = ($(this).attr('id'));
var res = id.replace("room", "");
    var iRes = parseInt(res);
// activate class for the current choice
for (var i = 0; i < 6; i++) {
        $("#room" + i).removeClass('active');

                    if (i == iRes) {

                continue;
            }
            $("#room" + iRes).addClass('active');
            var el= ($("#room" + iRes).parent().get( 0 ).className);

            if(el==="wrap"){
                $("#room" + iRes).unwrap();
            }

}
$( ".room-picture.active" ).wrap( "<div class='wrap'></div>" );

});

// carousel menu function 
// change item class to match the corresponding slide
    $('li').mouseenter(function() {
        var n = $( 'li' ).length;
        $('.carousel.slide').carousel('pause');

        var id = ($(this).attr('id'));
        var selector = "#item" + ($(this).attr('id'));

        for (var i = 0; i <= n+1; i++) {
            $("#item" + i).removeClass('active');
            $("#" + i).removeClass('act');
            $("#" + i).removeClass('active');
            
            if (id == i) {
                continue;
            }

            $("#" + id).addClass('act');
            $(selector).addClass('active');
        }
    });

    $('li').mouseout(function() {
        $('.carousel.slide').carousel('cycle');
    });