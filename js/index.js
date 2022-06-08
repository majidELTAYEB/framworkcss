

$(document).ready(function(){

    $(":button.popin-dismiss").click(function(){
        $("#myModal").removeClass('show'); 
    })

    $(":button[data-target]").click(function(){
        $("#myModal").addClass('show'); 
    })

    $("body").keydown(function(e) {
        if (e.key=== "Escape") {
            $("#myModal").removeClass("show")
        }
      });
   
      $("#myModal").click(function(){
        $(this).removeClass('show'); 
    })

});