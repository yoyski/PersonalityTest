const superPower = [
  {
    id: 1,
    question: "Do you like playing tricks on people?",
    choices: {
      a: {
        img: "/images/q1a.jpg",
        text: "Yes, but only my close friends — they know I don’t mean it.",
        points: 20,
      },
      b: {
        img: "/images/q1b.jpg",
        text: "Everyone, all the time.",
        points: 40,
      },
      c: {
        img: "/images/q1c.jpg",
        text: "Never, I’m afraid to hurt their feelings.",
        points: 10,
      },
      d: {
        img: "/images/q1d.jpg",
        text: "Only if they play tricks on me.",
        points: 30,
      },
    },
  },
  {
    id: 2,
    question: "Which of these animals do you associate yourself with?",
    choices: {
      a: {
        img: "/images/q2a.jpg",
        text: "Panther — I’m posh, fast, and can always protect myself.",
        points: 20,
      },
      b: {
        img: "/images/q2b.jpg",
        text: "Puppy — I wouldn’t survive a day without my family.",
        points: 10,
      },
      c: {
        img: "/images/q2c.jpg",
        text: "Kangaroo — I’m one of a kind, and you can’t approach me easily.",
        points: 30,
      },
      d: {
        img: "/images/q2d.jpg",
        text: "Chameleon — I can fit into any surroundings.",
        points: 40,
      },
    },
  },
  {
    id: 3,
    question: "If you turned into a superhero, what would you do first?",
    choices: {
      a: { img: "/images/q3a.jpg", text: "Save the world.", points: 30 },
      b: {
        img: "/images/q3b.jpg",
        text: "Travel the world — superheroes can fly, right?",
        points: 20,
      },
      c: {
        img: "/images/q3c.jpg",
        text: "Meet my favorite celebrity.",
        points: 10,
      },
      d: {
        img: "/images/q3d.jpg",
        text: "Use my superpowers to produce money.",
        points: 40,
      },
    },
  },
  {
    id: 4,
    question:
      "It’s your birthday and your friends surprise you with your dream car. How long will you be happy about it?",
    choices: {
      a: {
        img: "/images/q4a.jpg",
        text: "A week, until the joy fades away.",
        points: 20,
      },
      b: {
        img: "/images/q4b.jpg",
        text: "Forever, it’s the gift of a lifetime.",
        points: 10,
      },
      c: {
        img: "/images/q4c.jpg",
        text: "It’s no big deal, it takes more to make me happy.",
        points: 40,
      },
      d: {
        img: "/images/q4d.jpg",
        text: "I won’t accept it — it’s too much.",
        points: 30,
      },
    },
  },
  {
    id: 5,
    question: "What’s your favorite kind of weather?",
    choices: {
      a: {
        img: "/images/q5a.jpg",
        text: "Beach weather, sunshine, no clouds.",
        points: 20,
      },
      b: {
        img: "/images/q5b.jpg",
        text: "Snow — playing or staying home makes me happy.",
        points: 10,
      },
      c: {
        img: "/images/q5c.jpg",
        text: "Rainy weather — the sound calms me down.",
        points: 40,
      },
      d: {
        img: "/images/q5d.jpg",
        text: "Extreme weather — thunderstorms, tornadoes, sandstorms.",
        points: 30,
      },
    },
  },
  {
    id: 6,
    question: "What movie would you choose to star in?",
    choices: {
      a: { img: "/images/q6a.jpg", text: "Drama — I live it.", points: 20 },
      b: {
        img: "/images/q6b.jpg",
        text: "Comedy — my humor and irony will help.",
        points: 10,
      },
      c: {
        img: "/images/q6c.jpg",
        text: "Superhero movie — I know my costume already.",
        points: 30,
      },
      d: {
        img: "/images/q6d.jpg",
        text: "Detective movie — I want to solve mysteries.",
        points: 40,
      },
    },
  },
  {
    id: 7,
    question: "How do you feel before an important event?",
    choices: {
      a: {
        img: "/images/q7a.jpg",
        text: "Nervous and scared — I don’t want to let anyone down.",
        points: 10,
      },
      b: {
        img: "/images/q7b.jpg",
        text: "Excited — I love to test myself and triumph.",
        points: 30,
      },
      c: {
        img: "/images/q7c.jpg",
        text: "Calm and focused — that’s why I win.",
        points: 40,
      },
      d: {
        img: "/images/q7d.jpg",
        text: "Useless — I feel like others put in more effort.",
        points: 20,
      },
    },
  },
  {
    id: 8,
    question:
      "What activity would you like to exclude from your routine forever?",
    choices: {
      a: {
        img: "/images/q8a.jpg",
        text: "Washing, drying, brushing my hair.",
        points: 10,
      },
      b: {
        img: "/images/q8b.jpg",
        text: "Picking outfits — let a robot do it.",
        points: 30,
      },
      c: {
        img: "/images/q8c.jpg",
        text: "Cooking — it’s not my thing.",
        points: 40,
      },
      d: {
        img: "/images/q8d.jpg",
        text: "Cleaning — it gets messy again too soon.",
        points: 20,
      },
    },
  },
  {
    id: 9,
    question: "Which sense do you rely on the most?",
    choices: {
      a: {
        img: "/images/q9a.jpg",
        text: "Smell — I could create perfumes.",
        points: 40,
      },
      b: {
        img: "/images/q9b.jpg",
        text: "Hearing — I hear even whispers.",
        points: 10,
      },
      c: {
        img: "/images/q9c.jpg",
        text: "Sight — I have eyes on my back.",
        points: 20,
      },
      d: {
        img: "/images/q9d.jpg",
        text: "Taste — it has never let me down.",
        points: 30,
      },
    },
  },
  {
    id: 10,
    question:
      "You’re arranging a first date with someone you like. What do you do?",
    choices: {
      a: {
        img: "/images/q10a.jpg",
        text: "Rent a movie theater or planetarium just for us.",
        points: 10,
      },
      b: {
        img: "/images/q10b.jpg",
        text: "Cook fancy food and learn an instrument.",
        points: 30,
      },
      c: {
        img: "/images/q10c.jpg",
        text: "Escape room — let them show their smarts.",
        points: 20,
      },
      d: {
        img: "/images/q10d.jpg",
        text: "Nothing — they should impress me.",
        points: 40,
      },
    },
  },
  {
    id: 11,
    question: "What do you do when you’re angry?",
    choices: {
      a: {
        img: "/images/q11a.jpg",
        text: "Ignore everything — I need time to cool down.",
        points: 40,
      },
      b: {
        img: "/images/q11b.jpg",
        text: "Read or listen to music.",
        points: 30,
      },
      c: {
        img: "/images/q11c.jpg",
        text: "Cry my heart out — it helps restart.",
        points: 10,
      },
      d: {
        img: "/images/q11d.jpg",
        text: "Think it over — understand and avoid it next time.",
        points: 20,
      },
    },
  },
  {
    id: 12,
    question: "Your friend’s having a housewarming party. What do you bring?",
    choices: {
      a: {
        img: "/images/q12a.jpg",
        text: "Some food or something practical.",
        points: 10,
      },
      b: {
        img: "/images/q12b.jpg",
        text: "A poem or a fun collage.",
        points: 30,
      },
      c: {
        img: "/images/q12c.jpg",
        text: "Ask what they need for the new house.",
        points: 20,
      },
      d: {
        img: "/images/q12d.jpg",
        text: "Nothing — my presence is the best gift.",
        points: 40,
      },
    },
  },
  {
    id: 13,
    question: "What time do you usually go to bed?",
    choices: {
      a: {
        img: "/images/q13a.jpg",
        text: "10–11 PM — I keep it healthy.",
        points: 40,
      },
      b: {
        img: "/images/q13b.jpg",
        text: "2 AM — then wake up around 2 PM.",
        points: 30,
      },
      c: {
        img: "/images/q13c.jpg",
        text: "What is sleep? I never get any.",
        points: 20,
      },
      d: {
        img: "/images/q13d.jpg",
        text: "8 PM — I need my beauty sleep.",
        points: 10,
      },
    },
  },
  {
    id: 14,
    question: "Which of the following sounds like the worst idea?",
    choices: {
      a: {
        img: "/images/q14a.jpg",
        text: "Never leaving my hometown.",
        points: 30,
      },
      b: {
        img: "/images/q14b.jpg",
        text: "Doing all the work, watching others get promoted.",
        points: 40,
      },
      c: {
        img: "/images/q14c.jpg",
        text: "Having someone else pick my hairstyle.",
        points: 20,
      },
      d: {
        img: "/images/q14d.jpg",
        text: "Never knowing my schedule — I need plans.",
        points: 10,
      },
    },
  },
  {
    id: 15,
    question: "Pick a color combination you’d never get tired of wearing.",
    choices: {
      a: {
        img: "/images/q15a.jpg",
        text: "Black and white — I’m classy.",
        points: 40,
      },
      b: {
        img: "/images/q15b.jpg",
        text: "Gray and pink — official but playful.",
        points: 10,
      },
      c: {
        img: "/images/q15c.jpg",
        text: "Orange, purple, emerald with blue.",
        points: 30,
      },
      d: {
        img: "/images/q15d.jpg",
        text: "Stripes, polka dots, paisley — patterns over colors.",
        points: 20,
      },
    },
  },
];

export { superPower };
