
function getCharts() {

  $.ajax({

    url: "fulldb.php",
    method:"GET",
    success: function(data){

      var dbData = JSON.parse(data);
      console.log(dbData);
      var dataChart = dbData["fatturato"];
      console.log(dataChart);


      var ctx = document.getElementById(salesChart).getContext('2d');
      var chart = new Chart(ctx, dataChart);
    }
  })
}

function init(){

  getCharts();

}

$(document).ready(init);
