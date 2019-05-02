

function getSalesChart(){

  $.ajax({

    url: "fullDB.php",
    method:"GET",
    success: function(data){

      var sales = JSON.parse(data);

      var ctx = document.getElementById('salesChart').getContext('2d');
      var chart = new Chart(ctx, {

        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],
            datasets: [{
                label: 'Vendite',
                backgroundColor: 'rgba(232, 242, 255,0.5)',
                borderColor: 'rgba(0, 0, 0,0.7)',
                data: sales,

            }],
        }
      });

    }
  })
}

function init(){

  getSalesChart();
}

$(document).ready(init);
