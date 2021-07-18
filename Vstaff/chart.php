<?php

$pageName = "chart";
require_once("inc/header.php");
if(!rankPermission($_SESSION['staffId:fort'],5,true)){
	exit('? ._. May i help you');
}

$conn = Database::getInstance();

$allorder = $conn->query("SELECT status, count(*) as number FROM payments GROUP BY status ")->fetchAll();
$allcards = $conn->query("SELECT type,count(*) as number FROM cardsPayments WHERE status = 1 GROUP BY type")->fetchAll();
 ?>


           <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>  


    <script type="text/javascript">

      // Load Charts and the corechart and barchart packages.
      google.charts.load('current', {'packages':['corechart']});

      // Draw the pie chart and bar chart when Charts is loaded.
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'الحالة');
        data.addColumn('number', 'العدد');
        data.addRows([
                          <?php  
                          foreach($allorder as $row)  
                          {  
	switch($row['status']){
		case 1:
			$status = "مكتمل";
		break;
		case 2:
			$status = "بطاقة خاطئة";
		break;
		case 3:
			$status = "جاري التنفيذ";
		break;
		case 4:
			$status = "في الإنتظار";
		break;
		case 5:
			$status = "ملغي‬‎";
		break;
	}



                               echo "['".$status."', ".$row["number"]."],";  
                          }  
                          ?>  
        ]);


        var piechart_options = {backgroundColor: 'transparent', is3D:true,   

                       width:400,
                       height:300};
        var piechart = new google.visualization.PieChart(document.getElementById('piechart_div'));
        piechart.draw(data, piechart_options);

		
		        var data2 = new google.visualization.DataTable();
        data2.addColumn('string', 'النوع');
        data2.addColumn('number', 'العدد');
        data2.addRows([
                          <?php  
                          foreach($allcards as $row)  
                          {  
                               echo "['".$row['type']."', ".$row['number']."],";  
                          }  
                          ?>  
        ]);

		
		
		
		
        var barchart_options = {backgroundColor: 'transparent',
                       width:400,
                       height:300,
                       legend: 'none'};
        var barchart = new google.visualization.BarChart(document.getElementById('barchart_div'));
        barchart.draw(data2, barchart_options);
      }
</script>

<main id="main-container">

                <!-- Page Content -->
                <div class="content">
                    <h2 class="content-heading">إحصائيات الموقع &mdash; الطلبات</h2>

    <!--Table and divs that hold the pie charts-->



                                <div class="col-md-12" dir="rtl" align="middle">
                                    <div class="block">
                                        <div class="block-content">
                                            <div class="table-responsive">
                                                <table class="table table-bordered table-striped table-vcenter js-dataTable-simple text-center" id="tablePayments">
                                                    <tbody>
                                                        <tr class='text-center'>
        <td><div id="piechart_div" style="border: 1px solid #ccc"></div></td>
        <td><div id="barchart_div" style="border: 1px solid #ccc"></div></td>
                                                        </tr>        
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                  
                </div>


                <!-- END Page Content -->

            </main>
<?php require_once("inc/footer.php"); ?>