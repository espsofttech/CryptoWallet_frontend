var options={chart:{height:265,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{columnWidth:"50%",dataLabels:{position:"top"}}},series:[{name:"Overall sales",data:[52,73,34,66,82,49]}],xaxis:{categories:["USA","India","Canada","Brazil","Turkey","UK"],axisBorder:{show:!1},tooltip:{enabled:!0},labels:{show:!0,rotate:-45,rotateAlways:!0}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1}},grid:{borderColor:"#e0e6ed",strokeDashArray:5,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}},padding:{top:0,right:0,bottom:0}},tooltip:{y:{formatter:function(o){return o+" thousands"}}},colors:["#435EEF","#999999"]},chart=new ApexCharts(document.querySelector("#graph7"),options);chart.render();