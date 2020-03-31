var leapYear = function(year) {
  console.log(leapYear);
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    //return false;

    $(".year").text(year);

    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }
    console.log(result)
    $("#result").show();
    
  });
});