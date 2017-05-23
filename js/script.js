$(function ($) {
  console.log(100500);

  $("header nav > ul > li").hover(
    function () {
      var subnav = $(this).children('.sub_nav');
      var position = $(this).children('a').position();
      subnav.css('left', position.left - 25);

      subnav.find('.sepor').hide();

      $(this).addClass('select');
      subnav.stop();
      subnav.slideDown('fast', function () {
        subnav.find('.sepor').height(subnav.height());
        subnav.find('.sepor').fadeIn('fast');
      });


    },
    function () {
      var subnav = $(this).children('.sub_nav');

      $(this).removeClass('select');
      subnav.hide();
    }
  );

  $('.copyright .open_popup_box').click(function () {
    $(this).closest('.copyright').find('.popup_info_box').fadeIn();
    return false;
  });
  $('.copyright .popup_info_box').click(function () {
    $(this).fadeOut();
    return false;
  });

  $("input").each(function (i, el) {
    var inp = $(this);
    if (inp.attr('data-inputmask-regex') != void 0) {
      inp.inputmask('Regex');
    }
  });

  $('.valMinus').on('click', function () {
    var valCell = $(this).closest('.valCell'),
      inp = valCell.find('input'),
      val = parseInt(inp.val()),
      min_val = 1 * inp.attr('data-min'),
      max_val = 1 * inp.attr('data-max'),
      new_val = val - (1 * inp.attr('data-step'));

    inp.val(new_val >= min_val ? (new_val <= max_val ? new_val : max_val) : min_val).trigger('change');

    return false;
  });

  $('.valPlus').on('click', function () {
    var valCell = $(this).closest('.valCell'),
      inp = valCell.find('input'),
      val = parseInt(inp.val()),
      min_val = 1 * inp.attr('data-min'),
      max_val = 1 * inp.attr('data-max'),
      new_val = val + (1 * inp.attr('data-step'));

    inp.val(new_val <= max_val ? (new_val >= min_val ? new_val : min_val) : max_val).trigger('change');

    return false;
  });

});
