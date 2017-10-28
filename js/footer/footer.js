import {footerData} from './footer-data';

const socialData = Object.keys(footerData.social);
const socialLink = socialData.map((link, value) => ({value: socialData[value], link: footerData.social[link]}));

export const footerStamp = () => `<a href="${footerData.credits.src}" class="social-link social-link--${footerData.credits.prefix}">${footerData.credits.author}</a>
    <span class="footer__made-in">${footerData.credits.text}<a href="${footerData.credits.src}" class="footer__link">${footerData.credits.author}</a> &copy; ${footerData.credits.date}</span>
    <div class="footer__social-links">
       ${socialLink.map(({value, link}) => `<a href="${link.src}" class="social-link social-link--${link.prefix}">${value}</a>`).join(``)} 
     </div>`.trim();
