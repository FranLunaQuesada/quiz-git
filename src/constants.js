export const jsQuizz = {
  questions: [
    {
      question:
        "_________ es el nombre con el que se conoce al primer satélite que se lanzó al espacio",
      type: "FIB",
      correctAnswer: "sputnik",
    },
    {
      question: "¿De cuántos elementos consta la Tabla Periódica?",
      choices: ["110", "115", "118", "121"],
      type: "MCQs",
      correctAnswer: "118",
    },
    {
      question:
        "Indica cual de los siguientes imperios fue el mayor en su época de mayor extensión",
      choices: [
        "Imperio Español",
        "Califato Omeya",
        "Imperio Romano",
        "Imperio japonés",
      ],
      type: "MCQs",
      correctAnswer: "Imperio Español",
    },
    {
      question:
        "¿Qué metal fue descubierto por Hans Christian Oersted en 1825?",
      choices: ["Plata", "Cobalto", "Aluminio", "Níquel"],
      type: "MCQs",
      correctAnswer: "Aluminio",
    },
    {
      question: "¿Quién fue el Primer Ministro de Gran Bretaña de 1841 a 1846?",
      choices: [
        "Winston Churchill",
        "Margaret Thatcher",
        "Neville Chamberlain",
        "Harold MacMillan",
      ],
      type: "MCQs",
      correctAnswer: "Winston Churchill",
    },
    {
      question: "¿Cuántos jugadores hay en un equipo de waterpolo?",
      choices: ["Seis", "Siete", "Ocho", "Nueve"],
      type: "MCQs",
      correctAnswer: "Siete",
    },
    {
      question:
        "¿En qué parte del mundo se exhibe la Mona Lisa de Leonardo da Vinci?",
      choices: ["El Prado", "El Louvre", "Galería Nacional", "Museo vaticano"],
      type: "MCQs",
      correctAnswer: "El Louvre",
    },
    {
      question: "¿Cuál es el animal nacional de Australia?",
      choices: ["Koala", "Pikachu", "Gamusino del desierto", "Canguro"],
      type: "MCQs",
      correctAnswer: "Canguro",
    },
    {
      question: "¿Cuál es la capital de Canadá?",
      choices: ["Toronto", "Quebec", "Ottawa", "Montreal"],
      type: "MCQs",
      correctAnswer: "Ottawa",
    },
    {
      question: "¿De qué ciudad son originarios los Beatles?",
      choices: ["Liverpool", "Manchester", "Newcastle", "Birmingham"],
      type: "MCQs",
      correctAnswer: "Liverpool",
    },
  ],
};

export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};
