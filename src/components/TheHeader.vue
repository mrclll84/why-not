<template>
    <header class="header">
        <div class="container">
            <div class="row items-center justify-between">
                <img src="public/icons/Logo.svg" alt="Логотип">
                
                <div class="row items-center">
                    <div class="header-location">
                        <img src="public/icons/Location.svg" alt="Местоположение">
                        
                        <p>Москва и область</p>
                    </div>
                    
                    <div class="header-notification">
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_549_3316)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M6.60742 3.70126C7.77891 3.05354 9.26898 3.401 10.0103 4.47115L10.0956 4.60302L10.7393 5.67098L10.8403 5.66333C12.9843 5.53749 15.0617 6.49113 16.2965 8.20069L16.4302 8.39374L16.5698 8.61425C17.7813 10.6238 19.1192 12.2689 20.4945 13.1813C21.1498 13.6173 21.6386 13.7787 21.8922 13.7928C22.2744 13.7596 22.619 13.9871 22.7418 14.3472C22.8545 14.6802 22.7184 15.0441 22.4293 15.2488L22.3468 15.3005L18.6194 17.3621L18.6736 17.4741C19.2988 18.8714 18.8297 20.5106 17.5501 21.4002L17.4045 21.4959L17.2525 21.5851C15.8114 22.3822 14.0056 22.045 12.9661 20.8577L12.8538 20.7223L12.7644 20.6008L9.02525 22.671C8.74961 22.8229 8.41185 22.8162 8.15412 22.6611L8.0615 22.5961L7.98593 22.5257C7.72164 22.2432 7.68786 21.8355 7.8973 21.5546C8.02502 21.3133 8.12242 20.8332 8.05715 20.0749C7.91995 18.4803 7.10277 16.5496 5.89251 14.5389C4.70451 12.5684 4.81017 10.1484 6.09163 8.29169L6.14277 8.21965L5.50399 7.16049C4.84845 6.07154 5.15864 4.69806 6.1756 3.96167L6.30639 3.87301L6.4391 3.79431L6.60742 3.70126ZM8.97279 7.84428C6.82553 9.03139 6.09023 11.6697 7.32926 13.7272C8.82035 16.2022 9.63001 18.3604 9.73118 20.1471L9.737 20.2589L9.74014 20.4154L19.9574 14.7634L19.7299 14.6282C18.2457 13.7001 16.7772 12.0746 15.3564 9.79417L15.1331 9.42944C13.8895 7.36557 11.125 6.65308 8.97279 7.84428ZM17.1656 18.1677L14.2208 19.7961L14.2542 19.8364C14.7556 20.3886 15.5931 20.5663 16.296 20.2502L16.4193 20.1882L16.5335 20.1197C17.1802 19.6987 17.4379 18.9168 17.1904 18.228L17.1656 18.1677ZM7.52696 5.05997L7.43344 5.10497L7.26636 5.19696C6.87385 5.41396 6.72199 5.8741 6.89652 6.26036L6.94263 6.34804L7.32605 6.98456L7.36689 6.95227C7.52913 6.8272 7.69875 6.70967 7.87535 6.60008L8.14541 6.44169C8.41948 6.28997 8.70327 6.15964 8.99492 6.05104L9.03138 6.03754L8.65686 5.41704C8.44708 5.06799 8.01287 4.91401 7.62327 5.02631L7.52696 5.05997Z"
                                      fill="white"/>
                                <g clip-path="url(#clip1_549_3316)">
                                    <path class="header-notification__zone" fill-rule="evenodd" clip-rule="evenodd"
                                          d="M18 3C15.2386 3 13 5.23858 13 8C13 10.7614 15.2386 13 18 13C20.7614 13 23 10.7614 23 8C23 5.23858 20.7614 3 18 3Z"
                                          fill="#1F2229"/>
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_549_3316">
                                    <rect width="27" height="27" fill="white"/>
                                </clipPath>
                                <clipPath id="clip1_549_3316">
                                    <rect width="10" height="10" fill="white" transform="translate(13 3)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        
                        
                        <div class="header-notification__point"></div>
                    </div>

                    <button
                        class="hamburger hamburger--3dx"
                        :class="menuState ? 'is-active' : ''"
                        type="button"
                        @click="changeState"
                    >
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </header>
    
    <nav class="navigation">
        <div class="container">
            <ul class="navigation-list">
                <li
                    v-for="(link, index) in links"
                    :key="index"
                    class="navigation-list__item"
                >
                    <router-link
                        :to="{ name: link.to }"
                    >
                        {{ link.label }}
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
    
    <TransitionDefault>
        <div
            v-if="menuState"
            class="mobile-header"
        >
            <div class="mobile-header__content">
                <ul class="mobile-navigation__list">
                    <li
                        v-for="(link, index) in links"
                        :key="index"
                        class="mobile-list__item"
                    >
                        <router-link
                            :to="{ name: link.to }"
                            class="mobile"
                        >
                            {{ link.label }}
                        </router-link>
                    </li>
                </ul>
                
                <div class="mobile-header__location">
                    <img src="public/icons/Location.svg" alt="Местоположение">
                    
                    <p>Москва и область</p>
                </div>
            </div>

        </div>
    </TransitionDefault>

</template>

<script setup>
import { computed, ref } from 'vue';
import { useMenuStore } from "@/stores/menu.js";
import { router } from '@/router/index.js';
import TransitionDefault from "@/components/TransitionDefault.vue";

const menuStore = useMenuStore();

const links = ref([
    { label: 'Преимущества Tele2', to: 'main' },
    { label: 'Тарифы', to: 'plan' },
    { label: 'Акции и спецпредложения', to: 'sales' },
    { label: 'Промотариф Tele2', to: 'promo' },
    { label: 'Технология eSIM', to: 'technologies' },
    { label: 'Подключение нового абонента', to: 'connect' },
])

const changeState = () => {
    const state = menuStore.getMenuState
    const body  = document.querySelector('body');
    
    menuStore.changeMenuState(!state)
    
    if (!state) {
        body.style.overflow = 'hidden'
    }
    else {
        body.style.overflow = ''
    }
}

const menuState = computed(() => menuStore.getMenuState);


router.beforeEach((to, from, next) => {
    const body = document.querySelector('body');
    body.style.overflow = ''
    menuStore.changeMenuState(false)
    next();
});

</script>
