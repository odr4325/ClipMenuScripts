return getNowDateTime();

// 現在日時取得
function getNowDateTime() {
    var date = new Date();

    var year = date.getFullYear();
    var month  = date.getMonth() + 1;
    var day    = date.getDate();
 
    if (month < 10) { month = '0' + month; }
    if (day < 10) { day = '0' + day; }
 
    return year +'/'+ month +'/'+ day;
 }