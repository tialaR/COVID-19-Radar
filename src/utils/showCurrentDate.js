export default function showCurrentDate() {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  return `${year}-${month}-${day}`;
}
