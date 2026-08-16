import { defineComponent, type PropType } from 'vue';
import { withBase } from 'vitepress';

const groups = ['01', '02', '03', '04', '05', '06', '07', '08'] as const;
type OAUGroup = (typeof groups)[number];

export const OAUIcons = defineComponent({
  name: 'OAUIcons',
  props: {
    group: {
      type: String as PropType<OAUGroup>,
      required: true,
      validator: (group: string) => groups.includes(group as OAUGroup),
    },
  },
  setup(props) {
    return () => {
      const assetUrl = withBase(`/assets/oau${props.group}.svg`);

      return (
        <span style="display:inline-flex;vertical-align:bottom">
          <span
            role="img"
            aria-label={props.group}
            style={{
              width: '1.2em',
              height: '1.2em',
              backgroundColor: 'currentColor',
              mask: `url(${assetUrl}) center / contain no-repeat`,
            }}
          />
          <span>&#8203;</span>
        </span>
      );
    };
  },
});
