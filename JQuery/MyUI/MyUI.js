$(".accordion").on("click",".title",e=>
      $(e.target).next(".content").toggleClass("in")
        .siblings(".content").removeClass("in")
);
    
jQuery.fn.accordion = function () {
  
}