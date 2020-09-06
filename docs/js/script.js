$(document).ready(function() {
    $(".flex").click(function() {
      if ($(this).next().hasClass('open')) {
        $(this).next().toggle();
        $(this).next().removeClass('open');
      }
      else {
        $('.open').toggle();
        $('.dropDownMenu').removeClass('open');
        $(this).next().addClass('open');
        $('.open').toggle();
      }
    });
  
    //Selector Function 
    $(".block").click(function() {
      $(".block").css("background-color", "#FABF2B");
    });
      //on click, add or remove class
      $('.block').click(function() {
        //if clicked element has 'navSel', then reset
        if ($(this).hasClass('navSel')) {
          reset();
        }
        //if clicked element does not have 'navSel', then reset and set the color
        else {
          reset();
          $(this).addClass('navSel');
          setColor($(this));
        }
      });
    
      //reset the block's element
      function reset() {
        $('.block').removeClass('navSel');
        $('.block').css('background-color', '');
      }
    
      //set the clicked color
      function setColor(obj) {
        if (obj.hasClass('navSel')) {
          obj.css('background-color', '#FABF2B');
        }
      }
  });
  
  
  
  