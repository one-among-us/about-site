import { defineComponent, ref, computed } from 'vue';

export const MailTo = defineComponent({
  name: 'MailTo',
  props: {
    template: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const addr = ref('');
    const tooltip = ref('Click to copy');

    const displayedText = computed(() => addr.value || props.template);

    const materialize = () => {
      const rendered = props.template
        .replace(/\s+/g, '')
        .replace(/\[at\]/g, '@')
        .replace(/\[dot\]/g, '.');
      addr.value = rendered;
      return rendered;
    };

    const handleClick = (event: MouseEvent) => {
      const rendered = materialize();
      navigator.clipboard.writeText(rendered);
    };

    return () => (
      <code
        title={tooltip.value}
        onClick={handleClick}
      >
        {displayedText.value}
      </code>
    );
  },
});