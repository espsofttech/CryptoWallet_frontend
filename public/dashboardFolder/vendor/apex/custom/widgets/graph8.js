var options={chart:{height:365,type:"radialBar"},labels:["Current Customers","New Customers","Targeted Customers"],series:[75,50,25],plotOptions:{radialBar:{dataLabels:{name:{show:!0},value:{show:!0,formatter:function(e){return e+"%"}},total:{show:!0,label:"Total"}}}},colors:["#435EEF","#149865","#EB3333"]},chart=new ApexCharts(document.querySelector("#graph8"),options);chart.render();