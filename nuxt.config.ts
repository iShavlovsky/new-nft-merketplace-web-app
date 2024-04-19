// https://nuxt.com/docs/api/configuration/nuxt-config
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { fileURLToPath, URL } from 'node:url';

export default defineNuxtConfig({
    devtools: { enabled: true },
    imports: {
        autoImport: false
    },
    typescript: {
        typeCheck: true
    },
    build: {
        transpile: ['pinia-plugin-persistedstate']
    },
    tailwindcss: {
        cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
        configPath: 'tailwind.config',
        exposeConfig: {
            level: 2
        },
        editorSupport: true,
        config: {},
        viewer: true
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/color-mode',
        'nuxt-swiper',
        [
            '@nuxtjs/eslint-module',
            {
                cache: true,
                exclude: ['**/node_modules/**', '**/dist/**'],
                formatter: 'stylish'
            }
        ],
        '@nuxt/fonts'
    ],
    postcss: {
        plugins: {
            autoprefixer: {},
            cssnano: { preset: 'default' }
        }
    },
    vite: {
        plugins: [
            ViteImageOptimizer({
                png: {
                    quality: 90
                },
                jpeg: {
                    quality: 90
                },
                jpg: {
                    quality: 90
                },
                tiff: {
                    quality: 90
                },
                gif: {},
                webp: {
                    lossless: true
                },
                avif: {
                    lossless: true
                },
                cache: false
            })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./', import.meta.url)),
                '@assets': fileURLToPath(new URL('./assets', import.meta.url)),
                '@fonts': fileURLToPath(new URL('./assets/fonts', import.meta.url)),
                '@images': fileURLToPath(new URL('./assets/images', import.meta.url)),
                '@styles': fileURLToPath(new URL('./assets/styles', import.meta.url)),
                '@components': fileURLToPath(new URL('./components', import.meta.url)),
                '@composables': fileURLToPath(
                    new URL('./composables', import.meta.url)
                ),
                '@content': fileURLToPath(new URL('./content', import.meta.url)),
                '@layouts': fileURLToPath(new URL('./layouts', import.meta.url)),
                '@middleware': fileURLToPath(new URL('./middlewares', import.meta.url)),
                '@modules': fileURLToPath(new URL('./modules', import.meta.url)),
                '@pages': fileURLToPath(new URL('./pages', import.meta.url)),
                '@plugins': fileURLToPath(new URL('./plugins', import.meta.url)),
                '@public': fileURLToPath(new URL('./public', import.meta.url)),
                '@router': fileURLToPath(new URL('./router', import.meta.url)),
                '@types': fileURLToPath(new URL('./types', import.meta.url)),
                '@utils': fileURLToPath(new URL('./utils', import.meta.url))
            }
        }
    }
});
