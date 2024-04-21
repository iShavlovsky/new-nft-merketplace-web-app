/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default <Partial<Config>>{
    content: [],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'bg': {
                    'primary': {
                        DEFAULT: '#E9EAEC',
                        inverted: '#151518'
                    },
                    'secondary': {
                        DEFAULT: '#e9eaec1a',
                        inverted: '#2e21661a'
                    },
                    'brand-aviation': {
                        DEFAULT: '#8F75FE',
                        secondary: '#453298'
                    },
                    'brand-mojito': {
                        DEFAULT: '#92FE75',
                        secondary: '#479832'
                    },
                    'brand-negative': {
                        secondary: '#983241'
                    }
                },
                'content': {
                    'primary': {
                        DEFAULT: '#FFFFFF',
                        inverted: '#000000'
                    },
                    'secondary': {
                        DEFAULT: '#ffffff99',
                        inverted: '#17113399'
                    },
                    'brand-aviation': {
                        DEFAULT: '#8F75FE'
                    },
                    'brand-mojito': {
                        DEFAULT: '#92FE75'
                    },
                    'negative': {
                        secondary: '#FE7589'
                    }
                },
                'border': {
                    'primary': {
                        DEFAULT: '#e9eaec33'
                    },
                    'brand-aviation': {
                        DEFAULT: '#8F75FE'
                    },
                    'paranja': {
                        secondary: '#ffffff33'
                    }
                },
                'layer': {
                    'floor-0': {
                        DEFAULT: '#151518'
                    },
                    'floor-1': {
                        DEFAULT: '#2A2A2F'
                    },
                    'floor-2': {
                        DEFAULT: '#3F3F47'
                    },
                    'overlay': {
                        secondary: '#00000066'
                    }
                }
            }
        }
    },
    plugins: []
};

