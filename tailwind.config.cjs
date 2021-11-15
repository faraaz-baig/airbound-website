const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			transparent: 'transparent',
			black: {
				600: '#787E88',
				700: '#53585F',
				800: '#3B3E42',
				900: '#151617'
			},
			white: {
				100: '#FFFFFF',
				200: '#F4FAFC',
				300: '#EBF2F4',
				400: '#DFE6E8'
			},
			blue: {
				100: '#E5F8FF',
				200: '#CAE9FF',
				300: '#B0CBFF',
				350: '#8CA5FF',
				400: '#74A3FF',
				500: '#4B72FF',
				600: '#3860EF',
				700: '#1D3DAE',
				800: '#172F63',
				900: '#03123C'
			},
			green: {
				100: '#E0FFF7',
				200: '#C8FFF2',
				300: '#8BFFEA',
				400: '#46FAE4',
				500: '#18EDF1',
				600: '#14BAD0',
				700: '#0A6F7C',
				800: '#083F51'
			},
			orange: {
				100: '#FFFBE9',
				200: '#FFF2C4',
				300: '#FFE68E',
				400: '#FCCF5A',
				500: '#FFBA37',
				600: '#EA7E1B',
				700: '#A6450F',
				800: '#5C1106'
			}
		},
		extend: {
			fontFamily: {
				heading: ['ClashDisplay'],
				body: ['Raleway']
			}
		}
	},

	plugins: []
};

module.exports = config;
