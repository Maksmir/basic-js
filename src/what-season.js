module.exports = function getSeason(data) {
  
  if (!data) {
    return 'Unable to determine the time of year!';
  }
  if(!data.getUTCMilliseconds()){
    return Error
  }
  if (data.getMonth() >= 0 && data.getMonth() < 12) {
    if (data.getMonth() < 2 || data.getMonth() == 11) {
      return ("winter")
    }
    else if (data.getMonth() < 5 && data.getMonth() > 1) {
      return ("spring")
    }
    else if (data.getMonth() < 8 && data.getMonth() > 4) {
      return ("summer")
    }
    else if (data.getMonth() < 11 && data.getMonth() > 7) {
      return ("autumn")
    }
  }
  return Error
};
