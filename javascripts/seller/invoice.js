$(document).ready(function() {

  $('#select_company').on('change', function() {
    var inputDisabled = $(this).val() == 8 ? false : true;
      $(this).siblings('input').attr("disabled",inputDisabled);
  });

});
