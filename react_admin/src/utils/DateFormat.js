export default function DateFormat() {
  const time = Date.now()
  const date = new Date(time)
  const yy = padZerod(date.getFullYear())
  const mm = padZerod(date.getMonth()+1)
  const dd = padZerod(date.getDate())

  const hou = padZerod(date.getHours())
  const min = padZerod(date.getMinutes())
  const sec = padZerod(date.getSeconds())

  return `${yy}-${mm}-${dd} ${hou}:${min}:${sec}`
}

function padZerod(m) {
  return m < 10 ? '0' + m : m
}
