import { defineComponent } from 'vue';

const oauicons = {
  "01": <svg width="1.2em" height="1.2em" aria-label="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m10 10.5l2-2v8"/><path d="m19 8.71l-5.333-4.148a2.666 2.666 0 0 0-3.274 0L5.059 8.71a2.67 2.67 0 0 0-1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.2c0-.823-.38-1.6-1.03-2.105"/></g></svg>,
  "02": <svg width="1.2em" height="1.2em" aria-label="2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m12 22l5.5-5.5a7.778 7.778 0 1 0-11 0z" /><path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3"/></g></svg>,
  "03": <svg width="1.2em" height="1.2em" aria-label="3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M10.75 13a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-1.5h1.5a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1"/><path d="M18 21h-8a4 4 0 0 1-4-4a7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3" /><path d="M20 8.54V4a2 2 0 1 0-4 0v3m-8.388 5.524a3 3 0 1 0-1.6 4.3" /><path d="M18 12h.01" /></g></svg>,
  "04": <svg width="1.2em" height="1.2em" aria-label="4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M7 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"/><path d="M17 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"/><path d="M15 14V6l-4 6h5"/></g></svg>,
  "05": <svg width="1.2em" height="1.2em" aria-label="5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M10 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3V8h4"/><path stroke-linecap="round" d="M5.5 10 5.5 19 18.5 19 18.5 10"/><path stroke-linecap="round" d="M16 11.5 22 8 12 3 2 8 8 11.5"/></g></svg>,
  "06": <svg width="1.2em" height="1.2em" aria-label="6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M5 7.2A2.2 2.2 0 0 1 7.2 5h1a2.2 2.2 0 0 0 1.55-.64l.7-.7a2.2 2.2 0 0 1 3.12 0l.7.7c.412.41.97.64 1.55.64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58.23 1.138.64 1.55l.7.7a2.2 2.2 0 0 1 0 3.12l-.7.7a2.2 2.2 0 0 0-.64 1.55v1a2.2 2.2 0 0 1-2.2 2.2h-1a2.2 2.2 0 0 0-1.55.64l-.7.7a2.2 2.2 0 0 1-3.12 0l-.7-.7a2.2 2.2 0 0 0-1.55-.64h-1a2.2 2.2 0 0 1-2.2-2.2v-1a2.2 2.2 0 0 0-.64-1.55l-.7-.7a2.2 2.2 0 0 1 0-3.12l.7-.7A2.2 2.2 0 0 0 5 8.2z"/><path d="M14 9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3"/></g></svg>,
  "07": <svg width="1.2em" height="1.2em" aria-label="7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M20.51 9.54a1.9 1.9 0 0 1-1 1.09A7 7 0 0 0 15.37 17q.002.707.14 1.4a2.16 2.16 0 0 1-.31 1.65a1.8 1.8 0 0 1-1.21.8q-.804.15-1.62.15a9 9 0 0 1-9-9.28A9.05 9.05 0 0 1 11.85 3h.51a9 9 0 0 1 8.06 5a2 2 0 0 1 .09 1.52z" /><path stroke-linecap="round" stroke-linejoin="round" d="m8 16.01l.01-.011M6 12.01l.01-.011M8 8.01l.01-.011M12 6.01l.01-.011M16 8.01l.01-.011" /><path d="M10 9.5h4l-2 8" /></g></svg>,
  "08": <svg
   width="24"
   height="24"
   viewBox="0 0 24 24"
   version="1.1"
   id="svg3"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <g
     transform="matrix(1.2840441,0,0,1.2840441,3.0238265,2.6388234)"
     id="g2">
    <path
       d="M 0,0 H 14 V 14 H 0 Z"
       fill="none"
       id="path1" />
    <path
       fill="currentColor"
       fill-rule="evenodd"
       d="m 7.488,0.235 a 0.625,0.625 0 0 0 -0.976,0 C 5.788,1.139 5.059,1.312 4.49,1.264 3.868,1.211 3.364,0.887 3.192,0.714 a 0.625,0.625 0 0 0 -0.884,0 C 2.027,0.996 1.439,1.584 0.929,2.604 0.42,3.622 0,5.046 0,7 c 0,2.37 1.199,4 2.64,5.082 1.425,1.068 3.11,1.625 4.208,1.9 a 0.65,0.65 0 0 0 0.304,0 C 8.249,13.707 9.935,13.15 11.359,12.082 12.801,11.001 14,9.371 14,7 14,5.047 13.58,3.623 13.07,2.603 a 6.9,6.9 0 0 0 -1.377,-1.889 0.625,0.625 0 0 0 -0.884,0 C 10.637,0.887 10.133,1.211 9.511,1.264 8.941,1.312 8.213,1.139 7.489,0.234 M 2.049,3.161 C 2.307,2.643 2.587,2.264 2.823,1.991 3.225,2.237 3.768,2.456 4.385,2.508 5.22,2.579 6.148,2.34 7.001,1.544 7.854,2.34 8.782,2.579 9.617,2.508 A 3.6,3.6 0 0 0 11.18,1.991 c 0.235,0.273 0.515,0.652 0.774,1.17 0.42,0.84 0.797,2.072 0.797,3.838 0,1.88 -0.926,3.171 -2.14,4.082 -1.173,0.88 -2.59,1.38 -3.61,1.648 C 5.981,12.461 4.564,11.961 3.391,11.081 2.177,10.172 1.25,8.879 1.25,7 1.25,5.234 1.627,4.002 2.047,3.162"
       clip-rule="evenodd"
       id="path2" />
  </g>
  <g
     fill="none"
     stroke="currentColor"
     stroke-linecap="round"
     stroke-linejoin="round"
     stroke-width="1.5"
     id="g3">
    <path
       d="M12 12h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
       id="path3" />
  </g>
</svg>,
}

export const OAUIcons = defineComponent({
  name: 'OAUIcons',
  props: {
    group: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <span style="display:inline-flex;vertical-align:bottom">
        <span style="height:1.2em;display:flex">{oauicons[props.group]}</span>
	<span>&#8203;</span>
      </span>
    );
  },
});
