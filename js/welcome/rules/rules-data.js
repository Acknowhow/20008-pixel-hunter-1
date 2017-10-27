const rules = {
  icon: {
    photo: {
      src: `img/photo_icon.png`,
      width: 16,
      height: 16
    },
    paint: {
      src: `img/paint_icon.png`,
      width: 64,
      height: 64
    }
  },
  text: {
    h: {
      h1: `Правила`
    },
    p: {
      p1: `Угадай 10 раз для каждого изображения фото `,
      p2: ` или рисунок `,
      p3: `.`,
      p4: `Фотографиями или рисунками могут быть оба изображения.`,
      p5: `На каждую попытку отводится 30 секунд.`,
      p6: `Ошибиться можно не более 3 раз.`,
      p7: `Готовы?`
    }
  },
  form: {
    input: {
      type: `text`,
      placeholder: `Ваше Имя`
    },
    button: {
      type: `submit`,
      text: `Go`
    }
  }
};
export default rules;
