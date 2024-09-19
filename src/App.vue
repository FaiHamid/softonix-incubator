<template>
  <header>
    <div class="max-w-[1440px] px-[135px] mx-auto py-6 flex items-center justify-between">
      <div class="flex space-x-[72px] items-center ">
        <div class="flex items-center space-x-1.5">
          <img src="/img/logo.svg" alt="logo">
          <p class="font-sen font-bold text-[20px]">Salty</p>
        </div>

        <nav>
          <ul class="flex space-x-9">
            <li>
              <a href="#home" class="font-poppins">Home</a>
            </li>

            <li>
              <a href="#aboutus" class="font-poppins">About us</a>
            </li>

            <li>
              <a href="#destinations" class="font-poppins">Destinations</a>
            </li>

            <li>
              <a href="#tours" class="font-poppins">Tours</a>
            </li>

            <li>
              <a href="#blog" class="font-poppins">Blog</a>
            </li>
          </ul>
        </nav>
      </div>

      <button class="flex items-center justify-center border-[1.4px] border-orange rounded-full w-[170px] h-[54px]">
        <div class="flex">
          <span class="font-poppins font-medium text-orange">Book now</span>
          <img src="/img/book.svg" alt="book" class="ml-1.5">
        </div>
      </button>
    </div>
  </header>

  <main>
    <div class="max-w-[1440px] px-[135px] mx-auto pt-[10px] mb-[132px] flex items-center justify-between">
      <div class="mr-[67px]">
        <h1 class="font-sen font-bold text-[84px] leading-[86px] text-first-text-color mb-[26px]">
          Discover the Best Lovely Places
        </h1>

        <p class="text-[18px] text-second-text-color mb-[44px]">
          Plan and book your perfect trip with expert advice, travel tips,
          destination information and inspiration from us.
        </p>

        <div class="inline-flex bg-white rounded-full px-5 py-[11px] items-center">
          <div class="pr-[34px]">
            <h3 class="font-medium text-[18px] leading-[17px] text-first-text-color mb-2">Where</h3>

            <span class="flex space-x-[26px] truncate">
              <p class="text-[12px] leading-[12px]  text-third-text-color truncate">Center Point, Lo...</p>
              <img src="/img/where.svg" alt="where">
            </span>
          </div>

          <div class="border-l border-first-element-bg pl-[34px] mr-[57px]">
            <h3 class="font-medium text-[18px] leading-[17px] text-first-text-color mb-2">Date</h3>

            <span class="flex space-x-[26px]">
              <p class="text-[12px] leading-[12px]  text-third-text-color">09th March,2021</p>
              <img src="/img/date.svg" alt="where">
            </span>
          </div>

          <span class="flex items-center justify-center bg-orange rounded-full w-[54px] h-[54px]">
            <Search class="w-[27px] h-[27px] text-white " />
          </span>
        </div>
      </div>

      <img src="/img/homepage.png" alt="">
    </div>

    <div class="max-w-[1440px] px-[135px] mx-auto pt-[18px] pb-8 mb-58px">
      <div class="flex items-center justify-between mb-6">
        <h2 class="font-semibold text-[56px] text-first-text-color leading-[56px] block">Categories</h2>

        <div class="flex justify-between">
          <button class="flex items-center justify-center border border-first-text-color w-[54px] h-[54px] rounded-full mr-4">
            <img src="/img/arrowleft.svg" alt="arrow left">
          </button>

          <button class="flex items-center justify-center border border-first-text-color w-[54px] h-[54px] rounded-full bg-first-text-color">
            <img src="/img/arrowright.svg" alt="arrow right">
          </button>
        </div>
      </div>

      <p class="leading-[26px] text-second-text-color w-[370px] mb-[60px]">
        Here are lots of interesting destinations to visit, but don’t
        be confused—they’re already grouped by category.
      </p>

      <div class="grid-slider">
        <div class="flex flex-col items-center">
          <img src="/img/beach.png" alt="" class="mb-[18px]">
          <p class="font-medium text-[26px] leading-[26px] text-first-text-color">Beach</p>
        </div>

        <div class="flex flex-col items-center">
          <img src="/img/desert.png" alt="" class="mb-[18px]">
          <p class="font-medium text-[26px] leading-[26px] text-first-text-color">Desert</p>
        </div>

        <div class="flex flex-col items-center">
          <img src="/img/mountain.png" alt="" class="mb-[18px]">
          <p class="font-medium text-[26px] leading-[26px] text-first-text-color">Mountain</p>
        </div>

        <div class="flex flex-col items-center">
          <img src="/img/temple.png" alt="" class="mb-[18px]">
          <p class="font-medium text-[26px] leading-[26px] text-first-text-color">Temple</p>
        </div>

        <div class="flex flex-col items-center">
          <img src="/img/tower.png" alt="" class="mb-[18px]">
          <p class="font-medium text-[26px] leading-[26px] text-first-text-color">Tower</p>
        </div>

        <div class="flex flex-col items-center">
          <img src="/img/pyramid.png" alt="" class="mb-[18px]">
          <p class="font-medium text-[26px] leading-[26px] text-first-text-color">Pyramid</p>
        </div>
      </div>
    </div>

    <div class="max-w-[1517px] pl-[70px] pr-[135px] py-[50px] pb-8 mb-8 flex">
      <img src="/img/ourstories.png" alt="" class="w-[541px] h-[582px] mr-[156px]">

      <div class="flex flex-col justify-center">
        <p class="font-semibold text-orange text-[20px] leading-5 space-between-letters mb-5">Our Experience</p>
        <h2 class="font-semibold text-first-text-color text-[56px] leading-[66px] mb-5">Our Stories Have Adventures</h2>
        <p class="leading-[26px] text-second-text-color mb-10">
          We are experienced in bringing adventures to stay their journey, with all outdoor
          destinations in the world as our specialties. Start your adventure now! Nature has already called you!
        </p>

        <div class="flex space-x-5">
          <div class="flex flex-col justify-center bg-white rounded-lg pt-[30px] pb-[26px] w-[166px] h-[178px] pl-[26px]">
            <p class="font-semibold text-orange text-[46px] mb-[18px] leading-[46px]">12K+</p>
            <p class="text-[21px] leading-[29px] text-semi-gray-text">Success Journey</p>
          </div>
          <div class="flex flex-col justify-center bg-white rounded-lg pt-[30px] pb-[26px] w-[166px] h-[178px] pl-[35px]">
            <p class="font-semibold text-orange text-[46px] mb-[18px]">16+</p>
            <p class="text-[21px] leading-[29px] text-semi-gray-text">Awards Winning</p>
          </div>
          <div class="flex flex-col justify-center bg-white rounded-lg pt-[30px] pb-[26px] w-[166px] h-[178px] pl-[28px]">
            <p class="font-semibold text-orange text-[46px] mb-[18px]">20+</p>
            <p class="text-[21px] leading-[29px] text-semi-gray-text">Years Of Experience</p>
          </div>
        </div>
      </div>
    </div>

    <div class="py-[50px]">
      <div class="max-w-[1440px] px-[135px] mx-auto flex items-center justify-between mb-6 ">
        <h2 class="font-semibold text-[56px] text-first-text-color leading-[66px] block w-[400px]">Find Popular Destination</h2>

        <div class="flex justify-between">
          <button class="flex items-center justify-center border border-first-text-color w-[54px] h-[54px] rounded-full mr-4">
            <img src="/img/arrowleft.svg" alt="arrow left">
          </button>

          <button class="flex items-center justify-center border border-first-text-color w-[54px] h-[54px] rounded-full bg-first-text-color">
            <img src="/img/arrowright.svg" alt="arrow right">
          </button>
        </div>
      </div>

      <div class="pl-[135px] mr-auto flex space-x-[30px] overflow-visible mx-auto mb-[53px]">
        <div class="border-2 border-white rounded-2xl h-[440px] w-[386px] shadow-custom p-3 flex-shrink-0">
          <img src="/img/hiking.jpg" alt="hiking tour" class="mb-6">
          <p class="font-semibold text-[24px] leading-[24px] text-first-text-color mb-[14px]">Mountain Hiking Tour</p>
          <p class="text-[14px] leading-[14px] text-second-text-color mb-[14px] mb-[27px]">Mountain Hiking Tour</p>

          <div class="flex justify-between items-center">
            <p class="leading-[20px] text-second-text-color">
              <span class="font-semibold text-[24px] leading-[24px] text-first-text-color">$89 </span>
              /Person
            </p>

            <button class="border border-first-text-color text-first-text-color hover:bg-first-text-color hover:text-white w-[100px] h-[37px] rounded-full transition duration-300 ease-in-out ">Book now</button>
          </div>
        </div>

        <div class="border-2 border-white rounded-2xl h-[440px] w-[386px] shadow-custom p-3 flex-shrink-0">
          <img src="/img/machupicchu.jpg" alt="machupicchu tour" class="mb-6">
          <p class="font-semibold text-[24px] leading-[24px] text-first-text-color mb-[14px]">Machu Picchu, Peru</p>
          <p class="text-[14px] leading-[14px] text-second-text-color mb-[14px] mb-[27px]">Machu Picchu, Peru</p>

          <div class="flex justify-between items-center">
            <p class="leading-[20px] text-second-text-color">
              <span class="font-semibold text-[24px] leading-[24px] text-first-text-color">$99 </span>
              /Person
            </p>

            <button class="border border-first-text-color text-first-text-color hover:bg-first-text-color hover:text-white w-[100px] h-[37px] rounded-full transition duration-300 ease-in-out ">Book now</button>
          </div>
        </div>

        <div class="border-2 border-white rounded-2xl h-[440px] w-[386px] shadow-custom p-3 flex-shrink-0">
          <img src="/img/thegrandcanion.jpg" alt="the grand canion tour" class="mb-6">
          <p class="font-semibold text-[24px] leading-[24px] text-first-text-color mb-[14px]">The Grand Canyon, Arizona</p>
          <p class="text-[14px] leading-[14px] text-second-text-color mb-[14px] mb-[27px]">Mountain Hiking Tour</p>

          <div class="flex justify-between items-center">
            <p class="leading-[20px] text-second-text-color">
              <span class="font-semibold text-[24px] leading-[24px] text-first-text-color">$70 </span>
              /Person
            </p>

            <button class="border border-first-text-color text-first-text-color hover:bg-first-text-color hover:text-white w-[100px] h-[37px] rounded-full transition duration-300 ease-in-out ">Book now</button>
          </div>
        </div>

        <div class="border-2 border-white rounded-2xl h-[440px] w-[386px] shadow-custom p-3 flex-shrink-0">
          <img src="/img/hiking.jpg" alt="hiking tour" class="mb-6">
          <p class="font-semibold text-[24px] leading-[24px] text-first-text-color mb-[14px]">Rome, Italy</p>
          <p class="text-[14px] leading-[14px] text-second-text-color mb-[14px] mb-[27px]">Mountain Hiking Tour</p>

          <div class="flex justify-between items-center">
            <p class="leading-[20px] text-second-text-color">
              <span class="font-semibold text-[24px] leading-[24px] text-first-text-color">$90 </span>
              /Person
            </p>

            <button class="border border-first-text-color text-first-text-color hover:bg-first-text-color hover:text-white w-[100px] h-[37px] rounded-full transition duration-300 ease-in-out ">Book now</button>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-[1440px] px-[135px] mx-auto py-[37px] mb-[37px]">
      <div class="flex flex-col items-center">
        <h2 class="font-semibold text-[56px] leading-[66px] text-first-text-color mb-4">Top Destinations</h2>
        <p class="leading-[16px] text-second-text-color mb-7">Sost Brilliant reasons Entrada should be your one-stop-shop!</p>

        <div class="flex space-x-[14px] mb-[50px]">
          <button class="px-[20px] py-[10px] rounded-full font-poppins text-[14px] leading-[14px] text-first-text-color border border-first-text-color  hover:bg-first-text-color hover:text-white w-[100px] transition duration-300 ease-in-out">
            <p>London</p>
          </button>
          <button class="px-[20px] py-[10px] rounded-full font-poppins text-[14px] leading-[14px] text-first-text-color border border-first-text-color  hover:bg-first-text-color hover:text-white w-[100px] transition duration-300 ease-in-out">Bangkok</button>
          <button class="px-[20px] py-[10px] rounded-full font-poppins text-[14px] leading-[14px] text-first-text-color border border-first-text-color  hover:bg-first-text-color hover:text-white w-[100px] transition duration-300 ease-in-out">England</button>
          <button class="px-[20px] py-[10px] rounded-full font-poppins text-[14px] leading-[14px] text-first-text-color border border-first-text-color  hover:bg-first-text-color hover:text-white w-[100px] transition duration-300 ease-in-out">
            Singapore
          </button>
          <button class="px-[20px] py-[10px] rounded-full font-poppins text-[14px] leading-[14px] text-first-text-color border border-first-text-color  hover:bg-first-text-color hover:text-white w-[100px] transition duration-300 ease-in-out">Italy</button>
        </div>
      </div>

      <div class="grid-destinations">
        <img src="/img/vietnam1.png" alt="" class="col-span-3 row-span-1 w-full h-full object-cover rounded-2xl">
        <img src="/img/vietnam2.png" alt="" class="col-span-3 row-span-1 row-start-2 w-full h-full object-cover rounded-2xl pt-[13px]">
        <img src="/img/vietnam3.png" alt="" class="col-span-4 row-span-2 w-full h-full object-cover rounded-2xl">
        <img src="/img/vietnam4.png" alt="" class="col-span-5 row-span-1 w-full h-full object-cover rounded-2xl">
        <img src="/img/vietnam6.png" alt="" class="col-span-2 w-full h-full object-cover rounded-2xl">
        <img src="/img/vietnam5.png" alt="" class="col-span-3 w-full h-full object-cover rounded-2xl">
      </div>
    </div>

    <div class="max-w-[1440px] px-[135px] mx-auto py-[66px] flex items-center mb-7">
      <div class="w-[390px] h-[539px] bg-bg-for-image overflow-hidden rounded-full mr-[175px] ml-[68px]">
        <img src="/img/attractive-guy.png" alt="attractive guy">
      </div>

      <div>
        <div class="w-[67px] h-[8px] gradient rounded-xl mb-3" />
        <h2 class="font-semibold text-[56px] leading-[66px] text-first-text-color mb-[26px]">
          A customer said <br> About us:
        </h2>
        <div class="bg-white p-[30px] w-[537px] h-[283px] rounded-2xl">
          <p class="text-[18px] leading-[30px] text-second-text-color mb-[27px]">
            Salty helped me a lot in finding the best place for our first outdoor adventure trip. They responded very
            quickly and gave me a detailed account of the place—its history, as well as its best features.
          </p>
          <img src="/img/Star.png" alt="stars rate">

          <div class="flex justify-between pt-[17px]">
            <div class="flex flex-col space-y-2">
              <p class="font-medium text-[20px] leading-[20px] text-first-text-color">Andrew Sarma</p>
              <p class="text-[12px] leading-[12px] text-second-text-color">Enterpreneur</p>
            </div>

            <div class="flex justify-between items-center">
              <button class="flex items-center justify-center border border-first-text-color w-[40px] h-[40px] rounded-full mr-4">
                <img src="/img/arrowleft.svg" alt="arrow left">
              </button>

              <button class="flex items-center justify-center border border-first-text-color w-[40px] h-[40px] rounded-full bg-first-text-color">
                <img src="/img/arrowright.svg" alt="arrow right">
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-[1440px] px-[135px] mx-auto py-[46px] mb-15px">
      <div class="bg-image-sign-up flex flex-col items-center bg-orange-light w-full h-[358px] rounded-3xl py-[75px]">
        <h2 class="font-semibold text-[40px] leading-[40px] space-letters-sign-up text-first-text-color mb-4">
          Sign up to our newsletter
        </h2>

        <p class="leading-[26px] text-second-text-color w-[415px] text-center mb-10">
          Reciev latest news, update, and many other things every week.
        </p>

        <div class="relative">
          <input type="email" placeholder="Enter Your email address" class="rounded-xl h-[60px] w-[450px] pl-[26px] pr-3">
          <button class="absolute inset-y-[10px] right-3 flex items-center bg-orange rounded-lg h-10 w-10 flex items-center justify-center">
            <img src="/img/book-white.svg" alt="button" class="">
          </button>
        </div>
      </div>
    </div>
  </main>

  <footer>
    <div class="max-w-[1440px] px-[135px] mx-auto py-[79px] flex justify-between">
      <div class="flex flex-col">
        <div class="flex space-x-[72px] items-center mb-5">
          <div class="flex items-center space-x-1.5">
            <img src="/img/logo.svg" alt="logo">
            <p class="font-sen font-bold text-[20px]">Salty</p>
          </div>
        </div>

        <p class="leading-[26px] text-second-text-color mb-10">Enjoy the touring <br> with Salty</p>
        <div class="flex space-x-[14px]">
          <a href=""><img src="/img/facebook.svg" alt=""></a>
          <a href=""><img src="/img/instagram.svg" alt=""></a>
          <a href=""><img src="/img/twitter.svg" alt=""></a>
        </div>
      </div>

      <div class="flex space-x-[113px]">
        <div>
          <p class="font-medium text-[18px] leading-[18px] text-first-text-color mb-[22px]">Resources</p>

          <p class="text-[14px] leading-[34px] text-light-gray">Download</p>
          <p class="text-[14px] leading-[34px] text-light-gray">Help Center</p>
          <p class="text-[14px] leading-[34px] text-light-gray">Guide Book</p>
          <p class="text-[14px] leading-[34px] text-light-gray">App Directory</p>
        </div>

        <div>
          <p class="font-medium text-[18px] leading-[18px] text-first-text-color mb-[22px]">Travellers</p>

          <p class="text-[14px] leading-[34px] text-light-gray">Why Travellers</p>
          <p class="text-[14px] leading-[34px] text-light-gray">Enterprice</p>
          <p class="text-[14px] leading-[34px] text-light-gray">Customer Stories</p>
          <p class="text-[14px] leading-[34px] text-light-gray">Instagram post</p>
        </div>

        <div>
          <p class="font-medium text-[18px] leading-[18px] text-first-text-color mb-[22px]">Company</p>

          <p class="text-[14px] leading-[34px] text-light-gray">Travelling</p>
          <p class="text-[14px] leading-[34px] text-light-gray">About Locato</p>
          <p class="text-[14px] leading-[34px] text-light-gray">Success</p>
          <p class="text-[14px] leading-[34px] text-light-gray">Information</p>
        </div>
        <div>
          <p class="font-medium text-[18px] leading-[18px] text-first-text-color mb-[22px]">Get App</p>

          <p class="text-[14px] leading-[34px] text-light-gray">App Store</p>
          <p class="text-[14px] leading-[34px] text-light-gray">Google Play Store</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
</script>

<style lang="scss">
.grid-destinations {
  display: grid;
  grid-template-columns: repeat(12, 70px);
  grid-template-rows: 250px 263px;
  row-gap: 13px;
  column-gap: 30px;
}

.grid-slider {
  display: grid;
  grid-template-columns: repeat(6, 170px);
  gap: 30px;
  overflow: hidden;
  width: calc(6 * 170px + 5 * 30px);
}

.space-between-letters {
  letter-spacing: 0.2em;
}

.space-letters-sign-up {
  letter-spacing: 0.0015em;
}

.bg-image-sign-up {
  background-image: url('/img/Intersect.png')
}

.gradient {
  background: linear-gradient(159.99deg, #FFD482 13.35%, #FFBE82 118.92%);
  box-shadow: 0px 2px 6px rgba(229, 137, 24, 0.15);
}
</style>
