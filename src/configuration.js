
const configuration = {
  columns: [
    {
      size: 1,
      heading: "General Pokemon information",
      widgets: [
        {
          title: "Pokemon colours",
          subtitle: "List of all the colours",
          type: "list",
          api: "https://pokeapi.co/api/v2/pokemon-color/"
        },
        {
          title: "Pokemon Gender",
          subtitle: "List of all the genders",
          type: "list",
          api: "https://pokeapi.co/api/v2/gender/"
        },
      ]
    },
    {
      size: 2,
      heading: "Pokemon counts",
      widgets: [
        {
          title: "Genderless count",
          type: "number",
          api: "https://pokeapi.co/api/v2/gender/3/"
        },
        {
          title: "Female count",
          type: "number",
          api: "https://pokeapi.co/api/v2/gender/1/"
        },
        {
          title: "Male count",
          type: "number",
          api: "https://pokeapi.co/api/v2/gender/2/"
        },
      ]
    }
  ]
};

export default configuration;