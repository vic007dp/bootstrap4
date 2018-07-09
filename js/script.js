$(function(){

  //effect bounce

  $("#btn1").on("click", function(){
  	$(".div1").effect("bounce",{
  		times: 7,
  		distance: 100,
  		direction: "left"
  	}, 1000);
  });

  //effect explode

  $("#btn2").on("click", function(){
  	$(".div2").effect("explode",{
  		pieces: 9
  		
  	}, 2000, function(){
  		$(".div2").effect("explode", {
  			pieces: 9,
  			mode: 'show'
  		}, 2000);
  	});
  });

  //pulsate effect

  $("#btn3").on("click", function(){
  	$(".div3").effect("pulsate",{
  		times: 7,
  		mode: 'hide'
  	}, 1000, function(){
  		$(".div3").css({
  			backgroundColor: "white",
  			display: "block",
  			border: "none"
  		});
  	});
  });

  //show/hide
  
  $("#btnshow").on("click", function(){
  	$(".divshow").show("explode", 2000);
  });
  $("#btnhide").on("click", function(){
  	$(".divhide").hide("explode", 2000);
  });
  
  //add/remove class
  
  $("#btnadd").on("click", function(){
  	 $("#pic1").addClass("imgcircle",1000);
  });
  $("#btnremove").on("click", function(){
  	 $("#pic2").removeClass("imgcircle",1000);
  });
  
  //switch class
  
  $("#switchbtn").on("click", function(){
  	$(".divtext p").switchClass("abzac","newabzac",2000);
  });
  
  //color animate
  
  $("#animbtn").on("click", function(){
  	$(".anim").animate({
  		"backgroundColor": "yellow",
  		"width": "400",
  		"height": "400",
  		"color": "red"
  	},2000);
  });

  //widget accordion

  $("#accordeon").accordion({
    active: false,
    collapsible: true,
    heightStyle: 'content',
    icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
  });
  
  //widget tabs
  
  $("#tabs").tabs({
    collapsible: true,
    heightStyle: 'auto',
    active: 1 
  });
  
  //menu
  
  $("ul.menu").menu();
  //datepicker
  $("#calendar").datepicker({
    changeYear: true,
    changeMonth: true,
    yearRange: '1940:2018',
    showWeek: true,
    showOn: 'both',
    showButtonPanel: true,
    showAnim: 'explode',
    numberOfMonths: [1,1],
    duration: 'slow',
    buttonText: 'Выбрать дату',
    //buttonImage: 'img/Desert.jpg'
  });
  
  //widget button
  
  $("#btn4, #link").button();
  
  //dialog
  
  $("#btn5").on("click", function(){
    $("#dialog").dialog({
      modal: true,
      buttons: {
        Cancel: function(){
          $(this).dialog("close");
        }
      },
      show: {effect: 'explode', duration: 800},
      hide: {effect: 'explode', duration: 800}
    });
  });
  
  //slider  widget
  
  $("#slider").slider({
    max: 200,
    range: true,
    values: [10,50],
    step: 5,
    animate: true,
    slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider" ).slider( "values", 0 ) +
      " - $" + $( "#slider" ).slider( "values", 1 ) );

  //draggable
  
  $("#kart1, #kart2, #kart3").draggable({
    revert: true,
    helper: 'clone',
    opacity: 0.5,
    zIndex: 100,
    cursor: 'pointer',
    revertDuration: 1000
  });
  
  //droppable
  
  $(".pics img").draggable({
    revert: "invalid",
    start: function(event, ui) {
      ui.helper.css('transform', 'rotate(5deg) scale(1.2)');
    },
    stop: function(event, ui) {
      ui.helper.css('transform', 'rotate(0deg) scale(1)');
    },
    zIndex: 100
  });
  $("#trash").droppable({
    activeClass: 'highlight',
    drop: function(event, ui) {
    ui.helper.hide('explode');
    $(this).attr('src', 'img/trashcan-full-icon.png');
  }
 });
  
  //sortable
  
  $(".spisok1").sortable({
    connectWith: '.spisok2',
    change: function(event, ui){
      ui.helper.css("backgroundColor","red");
    },
    stop: function(event, ui) {
      ui.item.css("backgroundColor", "grey");
    }
  });
  $(".spisok2").sortable({
    connectWith: '.spisok1',
    change: function(event, ui){
      ui.helper.css("backgroundColor","red");
    },
    stop: function(event, ui) {
      ui.item.css("backgroundColor", "grey");
    }
  });
  
  // resizable
  
  $("#resize").resizable();

  //Superfish меню
  
  $("#menu1, #menu2, #menu3").superfish({
  delay: 1000,//задержка
  animation:{opacity: 'show'},// наченается анимация
  animationOut:  {opacity:'hide'},// выключает анимация
  speed: 'slow'// скорость анимации
  });
  
  // GALLERY COLORBOX
  
  $(".gal").colorbox({
  rel: "gal",//стрелки
  transition: 'fade',//эфект перехода
  speed: 500,
  width: 500, // ширена окна без кнопок
  height: 500,
  innerWidth: 300,//устанавливается ширена картинки c границами и кнопками
  innerHeight: 300, //устанавливается ширена картинки c границами и кнопками
  // opacity: 0.7,// прозрачность
  slideshow: true,
  slideshowSpeed: 1500,
  slideshowAuto: true,
  current: "фото {current} из {total}",//перевод на русский
  slideshowStart: "Запуск",//перевод на русский
  slideshowStop: "Стоп", // перевод на русский
  });
  $(".youtube").colorbox({
    iframe: true,
    width: 500, // ширена окна без кнопок
    height: 500,
  });
  $(".inline").colorbox({
    inline: true,// будет показывать скрытый текст
    width: "50%", // 
  });

  //bxSlider

  $(".slider").bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 600,
  mode: 'horizontal',
  speed: 700,
  minSlides: 2,
  maxSlides: 2,
  slidesWidth: 200, 
  moveslide: 1,
  slideMargin: 20,
  captions: true,
  video: true,
  adaptiveHeight: true,
  });
  var json = {brand : 'Menu UI',
        menu: [
          {
            id: 'home',
            value: 'Home',
            icon: 'glyphicon glyphicon-home',
            action: 'click'
          },{
            id: 'profile',
            value: 'Profile',
            icon: 'glyphicon glyphicon-user',
            action: 'click',
            disable: true
          },{
            id: 'message',
            value: 'Message',
            icon: 'glyphicon glyphicon-envelope',
            show: true,
            action: 'click',
            disable: true
          },{
            id: 'setting',
            value: 'Setting',
            icon: 'glyphicon glyphicon-cog',
            show: true,
            submenu: [
              { id: 'preference', value: 'Preference', action: 'click' },
              { id: 'theme', value: 'Theme', show: true, action: 'click' },
              { id: 'help', value: 'Help', show: true, action: 'click' }
            ]
          }
        ]
      };

    var clickAction = function(id){
      console.log("clickAction: ", id);
    }

    $( "#menuUI" ).menuUI(json, clickAction);

});
// wow

let wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
  //   mobile:       true,       // trigger animations on mobile devices (default is true)
  //   live:         true,       // act on asynchronously loaded content (default is true)
  //   callback:     function(box) {
  //     // the callback is fired every time an animation is started
  //     // the argument that is passed in is the DOM node being animated
  //   },
  //   scrollContainer: null // optional scroll container selector, otherwise use window
  // }
});
wow.init();
