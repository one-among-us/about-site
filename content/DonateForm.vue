<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

interface TurnstileApi {
  render: (element: HTMLElement, options: Record<string, unknown>) => string;
  remove: (widgetId: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const props = defineProps<{ locale: 'en' | 'zh-Hans' }>();
const labels = computed(() => props.locale === 'zh-Hans'
  ? {
      amount: '捐赠金额',
      email: '电子邮箱（可选）',
      donate: '使用银行卡捐款',
      loading: '正在加载安全验证……',
      unavailable: '捐赠功能暂时不可用，请稍后再试。',
      note: '点击后将通过我们的验证后端进入 Stripe Checkout。',
    }
  : {
      amount: 'Donation amount',
      email: 'Email (optional)',
      donate: 'Donate by credit card',
      loading: 'Loading security verification…',
      unavailable: 'Donations are temporarily unavailable. Please try again later.',
      note: 'You will continue to Stripe Checkout through our verification backend.',
    });

const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;
const turnstileElement = ref<HTMLElement>();
const turnstileToken = ref('');
const loadFailed = ref(false);
let widgetId: string | undefined;

const loadTurnstile = () => new Promise<void>((resolve, reject) => {
  if (window.turnstile) return resolve();
  const existing = document.querySelector<HTMLScriptElement>('script[data-oau-turnstile]');
  if (existing) {
    existing.addEventListener('load', () => resolve(), { once: true });
    existing.addEventListener('error', () => reject(new Error('Turnstile failed to load')), { once: true });
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
  script.async = true;
  script.defer = true;
  script.dataset.oauTurnstile = '';
  script.addEventListener('load', () => resolve(), { once: true });
  script.addEventListener('error', () => reject(new Error('Turnstile failed to load')), { once: true });
  document.head.append(script);
});

onMounted(async () => {
  if (!siteKey || !turnstileElement.value) {
    loadFailed.value = true;
    return;
  }

  try {
    await loadTurnstile();
    if (!window.turnstile || !turnstileElement.value) throw new Error('Turnstile unavailable');
    widgetId = window.turnstile.render(turnstileElement.value, {
      sitekey: siteKey,
      action: 'donate',
      callback: (token: string) => { turnstileToken.value = token; },
      'expired-callback': () => { turnstileToken.value = ''; },
      'error-callback': () => { turnstileToken.value = ''; },
    });
  } catch {
    loadFailed.value = true;
  }
});

onBeforeUnmount(() => {
  if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
});
</script>

<template>
  <form class="donate-form" method="post" action="https://donate.oau.app/session">
    <input type="hidden" name="locale" :value="locale" />
    <input type="hidden" name="cf-turnstile-response" :value="turnstileToken" />

    <label>
      <span>{{ labels.amount }}</span>
      <span class="amount-input">
        <span>CAD $</span>
        <input
          name="amount"
          type="number"
          inputmode="decimal"
          min="5"
          max="200"
          step="0.01"
          value="10.00"
          required
        />
      </span>
    </label>

    <label>
      <span>{{ labels.email }}</span>
      <input name="email" type="email" autocomplete="email" maxlength="254" />
    </label>

    <div ref="turnstileElement" class="turnstile"></div>
    <p v-if="!turnstileToken && !loadFailed" class="status">{{ labels.loading }}</p>
    <p v-if="loadFailed" class="error" role="alert">{{ labels.unavailable }}</p>
    <button type="submit" :disabled="!turnstileToken">{{ labels.donate }}</button>
    <p class="note">{{ labels.note }}</p>
  </form>
</template>

<style scoped>
.donate-form {
  display: grid;
  gap: 1rem;
  max-width: 520px;
  margin: 1rem 0 2rem;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

label { display: grid; gap: 0.4rem; font-weight: 600; }

input,
button {
  min-height: 42px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font: inherit;
}

.amount-input {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.amount-input input {
  flex: 1;
  min-width: 0;
}

button {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white);
  cursor: pointer;
  font-weight: 600;
}

button:hover:not(:disabled) { background: var(--vp-c-brand-2); }
button:disabled { cursor: not-allowed; opacity: 0.55; }
.status, .error, .note { margin: 0; }
.status, .note { color: var(--vp-c-text-2); font-size: 0.9rem; }
.error { color: var(--vp-c-danger-1); }
</style>
