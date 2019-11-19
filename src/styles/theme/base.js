import { darken } from 'polished';

const fontSizeBase = '14',
			linkColor = '#276AA6';

const base = {
	fontFamilyBase: 'Roboto, sans-serif',
	lineHeightBase: '130%',
	fontSizeBase: `${ fontSizeBase }px`,
	paddingBase: `${ 10 / fontSizeBase }rem`,
	linkColor,
	linkHoverColor: darken(0.15, linkColor),
	bodyBg: '#F4F4F7'
}

export default base;