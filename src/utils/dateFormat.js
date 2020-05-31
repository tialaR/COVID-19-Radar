export default function dateFormat(date) {
  if(date){
    var dateFormated=new Date(date)
    var day=dateFormated.getDate() + 1;
    var month=dateFormated.getMonth() + 1;
    var year=dateFormated.getFullYear();
    return `${day}/${month}/${year}`;
  }else {
    return date;
  }
}
