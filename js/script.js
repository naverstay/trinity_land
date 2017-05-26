var callback_popup;

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

  $('.select2').each(function (ind) {
    var slct = $(this);

    slct.select2({
      minimumResultsForSearch: Infinity,
      dropdownParent: slct.parent(),
      allowClear: false,
      placeholder: slct.attr('data-placeholder'),
      width: '100%'
    });
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


  callback_popup = $('#callback_popup').dialog({
    autoOpen: false,
    modal: true,
    closeOnEscape: true,
    closeText: '',
    dialogClass: 'dialog_close_butt_mod_1 dialog_g_size_1',
    //appendTo: '.wrapper',
    width: 490,
    draggable: true,
    collision: "fit",
    position: {my: "top center", at: "top center", of: window},
    open: function (event, ui) {

    },
    close: function (event, ui) {

    }
  });

  $('.openPopup').on('click', function () {

    callback_popup.dialog('open');

    return false;
  });

  all_dialog_close();

});


function all_dialog_close() {
  $('body').on('click', '.ui-widget-overlay, .popupClose', all_dialog_close_gl);
}

function all_dialog_close_gl() {
  $(".ui-dialog-content").each(function () {
    var $this = $(this);
    if (!$this.parent().hasClass('always_open')) {
      $this.dialog("close");
    }
  });
}