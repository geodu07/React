
function format (secs){
  const minutes = parseInt(secs/60,10);
  const seconds = parseInt(secs % 60,10);
  return `${leftPad(minutes.toString())} : ${leftPad(seconds.toString())}`
  
}

function leftPad(number){
  const pad='00'
  return pad.substring(0, pad.length - number.length)+number
}

module.exports={
  format,
  leftPad,
}