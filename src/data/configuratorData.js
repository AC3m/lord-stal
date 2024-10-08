const configuratorForm = [
  { label: "Szerokość Garazu", element: "input", required: false, id: 0 },
  { label: "Długość", element: "input", required: false, id: 1 },
  { label: "Wysokość", element: "input", required: false, id: 2 },

  {
    label: "Układ blachy",
    element: "select",
    options: ["Poziomo", "Pionowo"],
    required: false,

    id: 3,
  },
  {
    label: "Układ dachu",
    element: "select",
    options: ["Dwuspadowy", "Spad na bok", "Spad na przód", "Spad w tył"],
    required: false,
    id: 4,
  },
  {
    label: "Rodzaj bramy",
    element: "select",
    options: ["Uchylna", "Dwuskrzydłowa"],
    required: false,
    id: 5,

  },
  {
    label: "Ilość bram",
    element: "select",
    options: ["Jedna", "Dwie"],
    required: false,
    id: 6,
  },
  {
    label: "Automat do bramy",
    element: "select",
    options: ["Tak", "Nie"],
    required: false,
    id: 7,
  },
  {
    label: "Dodatkowe drzwi",
    element: "select",
    options: ["Tak", "Nie"],
    required: false,
    id: 8,
  },
  {
    label: "Dodatkowe okno",
    element: "select",
    options: ["1", "2", "3", "4", "Brak"],
    required: false,
    id: 9,
  },
  {
    label: "Powłoka antykondensacyjna pod dachem (filc)",
    element: "select",
    options: ["Tak", "Nie"],
    required: false,
    id: 10,
  },
  { label: "Kod pocztowy montażu", element: "input", required: false, id: 11 },
  { label: "Imie", element: "input", required: false, id: 12 },
  { label: "Numer telefonu", element: "input", required: true, id: 13 },
  { label: "E-mail", element: "email", required: true, id: 14 },
  {
    label: "Twoje uwagi lub dodatkowy opis",
    element: "textarea",
    required: false,
    id: 15,
  },
];

export default configuratorForm;
