
var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    var res=data.filter(function (e){
         return e.population < 10000
    })
    console.log(res.map((e)=>e.name),e.population)

            
 
    
}