jQuery(document).ready(function($) {
    //
    $("input[name='recipe']").on('change', function (e) {
      if ($('input[name=recipe]:checked').length > 1) {
        $(this).prop('checked', false);
        alert("You Can Choose Only One ingrediants");
      }
    });
    //
    $("input[name='base']").on('change', function (e) {
      if ($('input[name=base]:checked').length > 2) {
        $(this).prop('checked', false);
        alert("You Can Choose Only Two ingrediants");
      }
    });
    //
    $("input[name='veggie']").on('change', function (e) {
      if ($('input[name=veggie]:checked').length > 2) {
        $(this).prop('checked', false);
        alert("You Can Choose Only Two ingrediants");
      }
    });
    //
    $("input[name='protein']").on('change', function (e) {
      if ($('input[name=protein]:checked').length > 1) {
        $(this).prop('checked', false);
        alert("You Can Choose Only One ingrediant");
      }
    });
    //
    $("input[name='dressing']").on('change', function (e) {
      if ($('input[name=dressing]:checked').length > 2) {
        $(this).prop('checked', false);
        alert("You Can Choose Only Two ingrediants");
      }
    });
    //
    $(".my-activity").click(function(event) {
      var total = 0;
      $(".my-activity:checked").each(function() {
        total += parseFloat($(this).val());
      });
  
      if (total == 0) {
        $('#amount').val('');
      } else {
        $('#amount').val(total);
      }
    });
  });