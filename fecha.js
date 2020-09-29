var fecha_actual=new Date();

var dia=fecha_actual.getDate();
var mes=fecha_actual.getMonth()+1;
var anio=fecha_actual.getFullYear();

var hora=fecha_actual.getHours();
var minuto=fecha_actual.getMinutes();


document.write(dia+' / '+mes+' / '+anio+'   '+hora+':'+minuto);