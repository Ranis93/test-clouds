<template>
  <div class="app">
    <div class="app__inner">
      <section class="main">
        <div class="main__site">
          <img src="../assets/img/kinopoisk.png" alt="kinopoisk">
        </div>
        <div class="main__title">
          ОНИ ДОЛЖНЫ ЧТО-ТО ЗНАТЬ
        </div>
        <div class="main__counter">
          {{ currentSlideNum }} /{{ slidesLength }}
        </div>
        <div class="main__carousels">
          <div id="owl-carousel2" class="main__carousel owl-carousel">
            <div class="slide">
              <div class="slide__img">
                <img src="../assets/img/racer.png" alt="racer">
              </div>
            </div>
            <div class="slide">
              <div class="slide__img">
                <img src="../assets/img/racer.png" alt="racer">
              </div>
            </div>
            <div class="slide">
              <div class="slide__img">
                <img src="../assets/img/racer.png" alt="racer">
              </div>
            </div>
            <div class="slide">
              <div class="slide__img">
                <img src="../assets/img/racer.png" alt="racer">
              </div>
            </div>
            <div class="slide">
              <div class="slide__img">
                <img src="../assets/img/racer.png" alt="racer">
              </div>
            </div>
            <div class="slide">
              <div class="slide__img">
                <img src="../assets/img/racer.png" alt="racer">
              </div>
            </div>
            <div class="slide">
              <div class="slide__img">
                <img src="../assets/img/racer.png" alt="racer">
              </div>
            </div>
          </div>
          <div id="owl-carousel1" class="main__carousel owl-carousel">
            <div class="slide">
              <div class="slide__text">
                1 Для примера мы показали вам его лицо. В первой серии он прячется в подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите на паузу — ему не терпится отдать вам промокод.
              </div>
            </div>
            <div class="slide">
              <div class="slide__text">
                2 Для примера мы показали вам его лицо. В первой серии он прячется в подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите на паузу — ему не терпится отдать вам промокод.
              </div>
            </div>
            <div class="slide">
              <div class="slide__text">
                3 Для примера мы показали вам его лицо. В первой серии он прячется в подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите на паузу — ему не терпится отдать вам промокод.
              </div>
            </div>
            <div class="slide">
              <div class="slide__text">
                4 Для примера мы показали вам его лицо. В первой серии он прячется в подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите на паузу — ему не терпится отдать вам промокод.
              </div>
            </div>
            <div class="slide">
              <div class="slide__text">
                5 Для примера мы показали вам его лицо. В первой серии он прячется в подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите на паузу — ему не терпится отдать вам промокод.
              </div>
            </div>
            <div class="slide">
              <div class="slide__text">
                6 Для примера мы показали вам его лицо. В первой серии он прячется в подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите на паузу — ему не терпится отдать вам промокод.
              </div>
            </div>
            <div class="slide">
              <div class="slide__text">
                7 Для примера мы показали вам его лицо. В первой серии он прячется в подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите на паузу — ему не терпится отдать вам промокод.
              </div>
            </div>
          </div>
        </div>
        <div class="main__btn">
          Искать промокод
        </div>
      </section>
    </div>
    <div class="nav">
      <div class="nav__burger">
        <img src="../assets/img/burger.svg" alt="burger">
      </div>
      <carousel1
        class="myslider"
        :mouse-drag="true"
        :loop="true"
        items="1"
        gutter="0"
        axis="vertical"
        :controls="true"
        controlsPosition="bottom"
        :controlsText="['', 'Скрольте вниз']"
        :autoplay="true"
      >
        <div class="myslider__items">
          <div class="myslider__text">
            01
          </div>
          <div class="myslider__text">
            У Бога новый проект
          </div>
        </div>
        <div class="myslider__items">
          <div class="myslider__text">
            02
          </div>
          <div class="myslider__text">
            Новый проект 2
          </div>
        </div>
        <div class="myslider__items">
          <div class="myslider__text">
            03
          </div>
          <div class="myslider__text">
            Подсказки
          </div>
        </div>
        <div class="myslider__items">
          <div class="myslider__text">
            04
          </div>
          <div class="myslider__text">
            Вопросы и ответы
          </div>
        </div>
      </carousel1>
    </div>
    <aside class="aside">
      hd.kinopoisk.ru
    </aside>
  </div>
</template>

<script>
import { sliderOn } from '~/assets/js/syncSlider'
export default {
  data () {
    return {
      slidesLength: 7,
      currentSlideNum: 1
    }
  },
  mounted () {
    sliderOn(this)
  }
}
</script>

<style lang="scss">
.nav {
  position: absolute;
  width: 186px;
  height: 95%;
  top: 21px;
  left: 35px;
  z-index: 1;

  .tns-outer {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    button[data-action='start'],
    button[data-action='stop'] {
      display: none;
    }
  }
  .tns-liveregion,
  .tns-nav {
    display: none;
  }
  .tns-ovh {
    padding: 50px 0;
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      top: 99px;
      left: 0;
      z-index: 0;
      background-color: #333333;
      width: 119px;
      height: 1px;
    }
  }

  .tns-controls {
    &>button:first-child {
      display: none;
    }
    &>button:last-child {
      width: 190px;
      height: 22px;
      font-family: 'KinopoiskRegular';
      font-size: 14px;
      line-height: 15px;
      color: #333333;
      text-align: right;
      transform: rotate(-90deg) translateX(-150%);
      -webkit-transform-origin: top left;
      position: absolute;
      bottom: 0;
      left: 0;
      border: 0;
      background: none;
      background-image: url('../assets/img/arr-down.svg');
      background-repeat: no-repeat;
      background-position: 0 50%;
      cursor: pointer;
    }
  }

  .myslider {
    .tns-item {
      position: relative;
      height: 50px;
      cursor: grabbing;
      touch-action: manipulation;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      column-gap: 19px;
      visibility: hidden;
      -ms-user-select: none;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      &::selection {
        background: transparent;
      }
      &::-moz-selection {
        background: transparent;
      }
      &.tns-slide-active {
        visibility: visible;
      }
      .myslider__text {
        font-family: 'KinopoiskRegular';
        font-size: 14px;
        line-height: 15px;
        color: #333333;
        &:first-child {
          font-size: 16px;
        }
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 8px;
        height: 1px;
        background: #333333;
        visibility: visible;
      }
    }
  }
}

#__layout {
  width: 100vw;
  height: 100vh;
  background: #FFFFFF;
}

.app {
  position: relative;
  background-image: url('../assets/img/sky.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    background: url('../assets/img/222.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;
    z-index: 0;
  }

  .app__inner {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 21px 29px 17px 35px;
  }
}

.main {
  position: relative;
  margin: 0 60px 0 221px;
  .main__site {
    width: 182px;
    height: 25px;
    margin: auto;
    position: relative;
    z-index: 1;
  }
  .main__title {
    font-family: 'Futura';
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 72px;
    text-align: center;
    letter-spacing: -0.692308px;
    text-transform: uppercase;
    margin: 24px 0 34px 0;
    color: #FFCC64;
    position: relative;
    z-index: 1;
  }
  .main__counter {
    box-shadow: 0px 5px 26px rgba(0, 0, 0, 0.1);
    background-color: #FFFFFF;
    width: fit-content;
    margin: auto;
    border-radius: 50%;
    padding: 19.5px 16px 16.5px 16px;
    font-family: 'KinopoiskBold';
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #000000;
  }
  .main__carousels {
    width: 60vw;
    max-width: 902px;
    height: 436px;
    margin: 17px auto 0 auto;
    position: relative;
    .owl-nav {
      margin: 0;
      position: absolute;
      top: 107px;
      right: 0;
      border: 0 !important;
      .owl-prev {
        display: none !important;
      }
      .owl-next {
        width: 39.6px;
        height: 39.6px;
        margin: 0 !important;
        padding: 0 !important;
        background-position: center !important;
        background-size: contain !important;
        background-repeat: no-repeat !important;
        background: url('../assets/img/btn-next.svg') !important;
      }
    }
    .main__carousel {
      &#owl-carousel2 {
        z-index: 0;
      }
      position: absolute;
      top: 0;
      left: 0;

      .slide {
        position: relative;
        height: 436px;

        .slide__img {
          width: 303px;
          margin: auto;
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
  .main__btn {
    width: 229px;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'KinopoiskRegular';
    font-size: 15px;
    line-height: 18px;
    color: #333333;
    padding: 19px 62px 19px 30px;
    z-index: 2;
    margin: 0 auto;

    &::after {
      content: url('../assets/img/arr-next.svg');
      position: absolute;
      top: 50%;
      right: 32px;
      transform: translateY(-50%);
    }

    &:hover {
      cursor: pointer;
    }
  }
}

.aside {
  font-family: 'KinopoiskRegular';
  font-size: 14px;
  line-height: 15px;
  text-align: center;
  color: #333333;
  writing-mode: vertical-rl;
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateX(-50%);
}
</style>
