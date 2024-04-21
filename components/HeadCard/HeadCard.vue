<template>
  <div class="w-full flex bg-layer-floor-1">
    <div class="pt-16 pr-6 pb-10 pl-10 w-full max-w-[606px] flex flex-col">
      <CardTags />
      <div class="py-1">
        <h3 class="text-2xl">
          Gas Hero Badge from
        </h3>
        <div class="flex gap-1">
          <h3 class="text-2xl">
            STEPN
          </h3>
          <div class="bg-bg-secondary size-8 rounded-full flex">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="20"
                 height="20"
                 viewBox="0 0 20 20"
                 class="m-auto"
                 fill="none"
            >
              <path d="M14.1148 7.30287C13.8224 7.13577 13.4464 7.13577 13.1122 7.30287L10.7728 8.68146L9.18529 9.55875L6.88764 10.9373C6.59521 11.1044 6.21923 11.1044 5.88503 10.9373L4.08868 9.85117C3.79625 9.68407 3.58738 9.34987 3.58738 8.97389V6.88512C3.58738 6.55091 3.75448 6.21671 4.08868 6.00783L5.88503 4.96345C6.17745 4.79634 6.55343 4.79634 6.88764 4.96345L8.68398 6.04961C8.97641 6.21671 9.18529 6.55091 9.18529 6.92689V8.30548L10.7728 7.38642V5.96606C10.7728 5.63185 10.6057 5.29765 10.2715 5.08877L6.92941 3.12533C6.63698 2.95822 6.26101 2.95822 5.9268 3.12533L2.50121 5.13055C2.16701 5.29765 1.99991 5.63185 1.99991 5.96606V9.89295C1.99991 10.2272 2.16701 10.5614 2.50121 10.7702L5.88503 12.7337C6.17745 12.9008 6.55343 12.9008 6.88764 12.7337L9.18529 11.3969L10.7728 10.4778L13.0704 9.14099C13.3628 8.97389 13.7388 8.97389 14.073 9.14099L15.8694 10.1854C16.1618 10.3525 16.3707 10.6867 16.3707 11.0627V13.1514C16.3707 13.4856 16.2036 13.8198 15.8694 14.0287L14.1148 15.0731C13.8224 15.2402 13.4464 15.2402 13.1122 15.0731L11.3158 14.0287C11.0234 13.8616 10.8145 13.5274 10.8145 13.1514V11.8146L9.22706 12.7337V14.1123C9.22706 14.4465 9.39417 14.7807 9.72837 14.9896L13.1122 16.953C13.4046 17.1201 13.7806 17.1201 14.1148 16.953L17.4986 14.9896C17.791 14.8225 17.9999 14.4882 17.9999 14.1123V10.1436C17.9999 9.8094 17.8328 9.4752 17.4986 9.26632L14.1148 7.30287Z"
                    fill="#8247E5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="pb-4">
        <p class="text-content-secondary">
          Gas Hero Badge migrated from STEPN
        </p>
      </div>
      <div class="grow flex flex-col mt-24">
        <CardStats />
      </div>
      <div class="mt-6">
        <ButtonArrow />
      </div>
    </div>
    <div class="w-full min-h-full bg-bg-brand-negative-secondary">
    </div>
  </div>
</template>

<script setup lang="ts">

import ButtonArrow from '~/components/Buttons/ButtonArrow.vue';
import CardTags from '~/components/HeadCard/CardTags.vue';
import CardStats from '~/components/HeadCard/CardStats.vue';
</script>