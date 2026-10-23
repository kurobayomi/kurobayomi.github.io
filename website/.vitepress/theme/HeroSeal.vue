<script setup lang="ts">
// The home page's hero graphic: the app's 黒箱 seal in front of two black cards, a manga page and a video, that float
// out from behind it and back.
</script>

<template>
  <div class="hero-seal" role="img" aria-label="The Kurobayomi seal in front of a manga page and a video">
    <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
      <!-- a manga page: panels -->
      <g class="card left">
        <rect x="40" y="70" width="130" height="180" rx="14" class="card-bg" />
        <rect x="56" y="86" width="98" height="62" rx="4" class="line" />
        <rect x="56" y="156" width="45" height="78" rx="4" class="line" />
        <rect x="109" y="156" width="45" height="78" rx="4" class="line" />
      </g>
      <!-- a video: a play button over a time bar -->
      <g class="card right">
        <rect x="150" y="70" width="130" height="180" rx="14" class="card-bg" />
        <path d="M200 132L238 160L200 188Z" class="play" />
        <path d="M168 226H262" class="line" />
        <path d="M168 226H206" class="bar" />
      </g>
      <image href="/logo.svg" x="88" y="88" width="144" height="144" class="seal" />
    </svg>
  </div>
</template>

<style scoped>
/* placed and sized like the theme's own hero image (.image-src): 192, 256 and 320 px wide, centred in its frame */
.hero-seal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 192px;
  transform: translate(-50%, -50%);
}
@media (min-width: 640px) {
  .hero-seal {
    width: 256px;
  }
}
@media (min-width: 960px) {
  .hero-seal {
    width: 320px;
  }
}
svg {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
}
.card-bg {
  fill: #1c1c1f;
  stroke: #ffffff;
  stroke-opacity: 0.35;
  stroke-width: 2;
}
.line {
  fill: none;
  stroke: #ffffff;
  stroke-opacity: 0.6;
  stroke-width: 3;
  stroke-linecap: round;
}
.bar {
  stroke: #ffffff;
  stroke-width: 3;
  stroke-linecap: round;
}
.play {
  fill: #ffffff;
  stroke: #ffffff;
  stroke-width: 6;
  stroke-linejoin: round;
}
.seal {
  filter: drop-shadow(0 10px 24px rgba(0, 0, 0, 0.35));
}
.card {
  transform-box: view-box;
  transform-origin: 160px 250px;
  animation: 6s ease-in-out infinite;
}
.card.left {
  animation-name: fan-left;
}
.card.right {
  animation-name: fan-right;
}
@keyframes fan-left {
  0%,
  100% {
    transform: translateX(-6px) rotate(-12deg);
  }
  50% {
    transform: translateX(-18px) rotate(-18deg);
  }
}
@keyframes fan-right {
  0%,
  100% {
    transform: translateX(6px) rotate(12deg);
  }
  50% {
    transform: translateX(18px) rotate(18deg);
  }
}
@media (prefers-reduced-motion: reduce) {
  .card {
    animation: none;
  }
  .card.left {
    transform: translateX(-12px) rotate(-15deg);
  }
  .card.right {
    transform: translateX(12px) rotate(15deg);
  }
}
</style>
