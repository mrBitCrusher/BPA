$('.nav a').click(function (e) {
    var tab = $(this);
    if(tab.parent('li').hasClass('active')) {
        setTimeout(function(){
            $(".tab-pane").removeClass('active');
            tab.parent('li').removeClass('active');
        });
    } else {
        tab.tab('show');
    }
});

/*
$(document).ready(function(){
       var highest = null;

       $(".nav-tabs a").each(function(){  //find the height of your highest link
           var h = $(this).height();
           if(h > highest){
              highest = $(this).height();  
           }    
        });

       $(".nav-tabs a").height(highest);  //set all your links to that height.
});
*/