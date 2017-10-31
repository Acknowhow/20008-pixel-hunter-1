const date = new Date();
const year = date.getFullYear();

const socialLinks = [`Твиттер`, `Инстаграм`, `Фэйсбук`, `Вконтакте`];

export const footerData = {
  credits: {
    text: `Сделано в`,
    src: `https://htmlacademy.ru/`,
    prefix: `academy`,
    author: `HTML Academy`,
    date: [year]
  },
  social: {
    [socialLinks[0]]: {
      src: `https://twitter.com/htmlacademy_ru`,
      prefix: `tw`
    },
    [socialLinks[1]]: {
      src: `https://www.instagram.com/htmlacademy/`,
      prefix: `ins`
    },
    [socialLinks[2]]: {
      src: `https://www.facebook.com/htmlacademy`,
      prefix: `fb`
    },
    [socialLinks[3]]: {
      src: `https://vk.com/htmlacademy`,
      prefix: `vk`
    }
  }
};
