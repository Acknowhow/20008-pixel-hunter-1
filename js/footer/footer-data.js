const date = new Date();
const year = date.getFullYear();

const socialLinks = [`Твиттер`, `Инстаграм`, `Фэйсбук`, `Вконтакте`];

export const footer = {
  credits: {
    author: `HTML Academy`,
    text: `Сделано в`,
    data: [year]
  },
  social: {
    [socialLinks[0]]: {
      src: `https://twitter.com/htmlacademy_ru`,
      prefix: `--tw`
    },
    [socialLinks[1]]: {
      src: `https://www.instagram.com/htmlacademy/`,
      prefix: `--ins`
    },
    [socialLinks[2]]: {
      src: `https://www.facebook.com/htmlacademy`,
      prefix: `--fb`
    },
    [socialLinks[3]]: {
      src: `https://vk.com/htmlacademy`,
      prefix: `--vk`
    }
  }
};
