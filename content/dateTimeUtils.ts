
export const getEventDate = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
export const getEventTime = (d: Date) => `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
export const getEventTZ = (d: Date) => {
  const o = d.getTimezoneOffset();
  const oa = Math.abs(o);
  return `${o > 0 ? '-' : '+'}${String(Math.floor(oa / 60)).padStart(2, '0')}:${String(oa % 60).padStart(2, '0')}`;
};
export const getEventFullDateTime = (d: Date) => `${getEventDate(d)}T${getEventTime(d)}${getEventTZ(d)}`;
