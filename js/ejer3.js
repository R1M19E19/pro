function tabla(){
    var i;
    var j;
    var tablas_html="";

    for(i=1;i<=10;i++){
        tablas_html+="<div classs='row'>"+"<div class='col-1'>"+"tablas"+"</div>"+"<div class='col-1'>"+i+"</div>";
        for (j=1;j<=10;j++){
            tablas_html+="<div class= 'col-1'>"+(i*j)+"</div>";

        }
        tablas_html+="</div>";
        } 
    document.getElementById("tabla").innerHTML = tablas_html;
    }