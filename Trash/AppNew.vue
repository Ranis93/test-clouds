<template>
  <div class="main__carousels">
    <div
      id="owl-carousel2"
      class="main__carousel owl-carousel"
    >
      <div
        v-for="(slide, idx) in slides"
        :key="idx"
        :data-num="idx + 1"
        class="slide"
      >
        <div class="slide__img">
          <img src="../assets/img/racer.png" alt="racer">
        </div>
      </div>
    </div>
    <div
      id="owl-carousel1"
      class="main__carousel owl-carousel"
    >
      <div
        v-for="(slide, idx) in slides"
        :key="idx"
        :data-num="idx + 1"
        class="slide"
      >
        <div class="slide__text">
          {{ slide.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { syncSlidersOn } from '@/assets/js/sync.js'
export default {
  data () {
    return {
      slides: [
        {
          id: 1,
          text: '1 Для примера мы показали вам его лицо. В первой серии он прячется в подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите на паузу — ему не терпится отдать вам промокод.'
        },
        {
          id: 2,
          text: '2 Для примера мы показали вам его лицо. В первой серии он прячется в подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите на паузу — ему не терпится отдать вам промокод.'
        },
        {
          id: 3,
          text: '3 Для примера мы показали вам его лицо. В первой серии он прячется в подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите на паузу — ему не терпится отдать вам промокод.'
        }
      ],
      currentSlideNum: 1
    }
  },
  methods: {
    changed () {
      setTimeout(() => {
        const num = Number(document.querySelector('.main__carousel').querySelector('.owl-item.active').querySelector('[data-num]').getAttribute('data-num'))
        this.currentSlideNum = num
      }, 100)
    }
  },
  mounted () {
    syncSlidersOn()
  }
}
</script>
<style lang="scss">
.main__carousels {
  width: 60vw;
  max-width: 902px;
  height: 436px;
  margin: 17px auto 0 auto;
  position: relative;
  .owl-nav{
    margin: 0;
    position: absolute;
    top: 107px;
    right: 0;
    border: 0!important;
    .owl-prev{
      display: none!important;
    }
    .owl-next{
      width: 39.6px;
      height: 39.6px;
      margin: 0!important;
      padding: 0!important;
      background-position: center!important;
      background-size: contain!important;
      background-repeat: no-repeat!important;
      background: url('../assets/img/btn-next.svg')!important;
    }
  }
  .main__carousel{
    position: absolute;
    top: 0;
    left: 0;
    .slide {
    position: relative;
      height: 436px;
    .slide__img {
      width: 303px;
      margin: auto;
      position: relative;
      top: 0;
      left: 0;
      z-index: 0;
    }
    .slide__text {
      font-family: 'KinopoiskRegular';
      font-size: 20px;
      line-height: 32px;
      text-align: center;
      letter-spacing: 0.4px;
      color: #000000;
      position: absolute;
      top: 197px;
      left: 0;
      z-index: 5;
    }
  }
  }
}
</style>
