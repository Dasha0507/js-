const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
               'Augest', 'September', 'October', 'November', 'December'];
 
const dataFormatter = {
    myDate: 
    function myDate(mydate) {
        let year = mydate.getFullYear();
        let month = months[mydate.getMonth()];
        if(month < 10) {
            month = '0' + month;
        }
        let day = mydate.getDate();
        if(day < 10) {
            day = '0' + day;
        }
    
        console.log(year, month, day);
    },
 
    myDateWith: 
    function myDateWith(mydate) {
        let year = mydate.getFullYear();
        let month = mydate.getMonth() + 1;
        if(month < 10) {
            month = '0' + month;
        }
        let day = mydate.getDate();
        if(day < 10) {
            day = '0' + day;
        }
    
        console.log(year + "-" + month + "-" + day);
    },
 
    myDateWithSlesh:
    function myDateWithSlesh(mydate) {
        let year = mydate.getFullYear();
        let month = mydate.getMonth() + 1;
        if(month < 10) {
            month = '0' + month;
        }
        let day = mydate.getDate();
        if(day < 10) {
            day = '0' + day;
        }
     
        console.log(year + "/" + month + "/" + day);
    },
 
    myDateReverse:
    function myDateReverse(mydate) {
        let year = mydate.getFullYear();
        let month = months[mydate.getMonth()];
        if(month < 10) {
            month = '0' + month;
        }
        let day = mydate.getDate();
        if(day < 10) {
            day = '0' + day;
        }
     
        console.log(day, month, year);
    }, 
 
    myDateWithReverse:
    function myDateWithReverse(mydate){
        let year = mydate.getFullYear();
        let month = mydate.getMonth() + 1;
        if(month < 10) {
            month = '0' + month;
        }
        let day = mydate.getDate();
        if(day < 10) {
            day = '0' + day;
        }
     
        console.log(day + "-" + month + "-" + year);
    },
 
    myDateWithSleshReverse:
    function myDateWithSleshReverse(mydate) {
        let year = mydate.getFullYear();
        let month = mydate.getMonth() + 1;
        if(month < 10) {
            month = '0' + month;
        }
        let day = mydate.getDate();
        if(day < 10) {
            day = '0' + day;
        }
     
        console.log(day + "/" + month + "/" + year);
    },
 
    myDateMonthIsTheFirstReverse:
    function myDateMonthIsTheFirstReverse(mydate) {
        let year = mydate.getFullYear();
        let month = mydate.getMonth() + 1;
        if(month < 10) {
            month = '0' + month;
        }
        let day = mydate.getDate();
        if(day < 10) {
            day = '0' + day;
        }
     
        console.log(month + "-" + day + "-" + year);
    },
 
    myDateFromNow:
    function myDateFromNow(mydate) {
        let today = new Date();
        let todayparse = Date.parse(today);
        let year = new Date(todayparse).getFullYear();
        let month = new Date(todayparse).getMonth() + 1;
        if(month < 10) {
            month = '0' + month;
        }
        let day = new Date(todayparse).getDate();
        if(day < 10) {
            day = '0' + day;
        }
        
        let enteryear = mydate.getFullYear();
        let entermonth = mydate.getMonth() + 1;
        if(entermonth < 10) {
            entermonth = '0' + entermonth;
        }
        let enterday = mydate.getDate();
        if(enterday < 10) {
            enterday = '0' + enterday;
        }
 
        let diffyear = Math.abs(year - enteryear);
        let diffmonths = Math.abs(month - entermonth);
        let diffday = Math.abs(day - enterday);
 
        console.log("Разница между датой сегодняшней и введенной в  " + diffyear + "  год/а  " + diffmonths + "  месяца  " + diffday + "  дня");
 
    }
 
}
 
let str = prompt("Введите дату в формате MM DD YYYY", "09 06 2021");
let userd = Date.parse(str);
 
dataFormatter.myDate(new Date(userd));
dataFormatter.myDateWith(new Date(userd));
dataFormatter.myDateWithSlesh(new Date(userd));
dataFormatter.myDateReverse(new Date(userd));
dataFormatter.myDateWithReverse(new Date(userd));
dataFormatter.myDateWithSleshReverse(new Date(userd));
dataFormatter.myDateMonthIsTheFirstReverse(new Date(userd));
dataFormatter.myDateFromNow(new Date(userd)); 