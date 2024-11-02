export const generateMockingResponse = (input) => {
  const mockingPhrases = [
    "Oh, how fascinating... 🙄",
    "Wow, that's totally the most original thing I've ever heard... 😏",
    "Let me pretend to be impressed... 😴",
    "Is that really the best you could come up with? 🤔",
    "Congratulations, you've achieved peak mediocrity! 🎉",
    "That's cute, you're trying to be interesting... 😌",
    "Slow clap for that brilliant insight... 👏",
    "Oh honey, bless your heart... 💅",
  ];

  const randomPhrase = mockingPhrases[Math.floor(Math.random() * mockingPhrases.length)];
  return `${randomPhrase} "${input}"? Really?`;
};