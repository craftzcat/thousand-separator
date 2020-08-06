function thousandSeparator(num) {
  var strOfNum = String(num);
  var len = strOfNum.length;
  if (len > 3) {
    return thousandSeparator(strOfNum.substring(0, len-3))+','+strOfNum.substring(len-3);
  } else {
    return strOfNum;
  }
}