<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const props = defineProps<{ locale: 'en' | 'zh-Hans' }>();
const state = ref<'loading' | 'paid' | 'unpaid' | 'error'>('loading');
const amountTotal = ref(0);
const currency = ref('cad');

const labels = computed(() => props.locale === 'zh-Hans'
  ? {
      loading: '正在向 Stripe 确认付款状态……',
      paid: '付款成功，感谢您的捐赠！',
      unpaid: '这笔付款尚未完成。如有疑问，请检查 Stripe 发送的邮件或联系我们。',
      error: '暂时无法确认付款状态。请检查 Stripe 发送的邮件或稍后再试。',
      amount: '捐赠金额',
    }
  : {
      loading: 'Confirming the payment with Stripe…',
      paid: 'Payment successful. Thank you for your donation!',
      unpaid: 'This payment has not completed. Check your email from Stripe or contact us if needed.',
      error: 'We cannot confirm the payment right now. Check your email from Stripe or try again later.',
      amount: 'Donation amount',
    });

const formattedAmount = computed(() => new Intl.NumberFormat(
  props.locale === 'zh-Hans' ? 'zh-Hans-CA' : 'en-CA',
  { style: 'currency', currency: currency.value.toUpperCase() },
).format(amountTotal.value / 100));

onMounted(async () => {
  const sessionId = new URLSearchParams(window.location.search).get('session_id');
  if (!sessionId) {
    state.value = 'error';
    return;
  }

  try {
    const response = await fetch(
      `https://donate.oau.app/session-status?id=${encodeURIComponent(sessionId)}`,
      { headers: { Accept: 'application/json' } },
    );
    if (!response.ok) throw new Error('Status request failed');
    const result = await response.json();
    amountTotal.value = Number(result.amountTotal) || 0;
    currency.value = typeof result.currency === 'string' ? result.currency : 'cad';
    state.value = result.paymentStatus === 'paid' ? 'paid' : 'unpaid';
  } catch {
    state.value = 'error';
  }
});
</script>

<template>
  <div class="donation-status" :class="state" role="status" aria-live="polite">
    <p v-if="state === 'loading'">{{ labels.loading }}</p>
    <template v-else-if="state === 'paid'">
      <p>{{ labels.paid }}</p>
      <p><strong>{{ labels.amount }}:</strong> {{ formattedAmount }}</p>
    </template>
    <p v-else-if="state === 'unpaid'">{{ labels.unpaid }}</p>
    <p v-else>{{ labels.error }}</p>
  </div>
</template>

<style scoped>
.donation-status {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.donation-status.paid { border-color: var(--vp-c-green-1); }
.donation-status.unpaid, .donation-status.error { border-color: var(--vp-c-warning-1); }
.donation-status p { margin: 0; }
.donation-status p + p { margin-top: 0.5rem; }
</style>
