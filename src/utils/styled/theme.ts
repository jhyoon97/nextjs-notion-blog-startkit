export type Theme = typeof light;

const light = {
  bg: "#fff",
  header: {
    bg: "#232d3f",
    switch: "#5b74a4",
    text: "#fff",
  },
  contents: {
    bgHover: "#f0f0f0",
    bgCode: "#eeeeec",
    border: "#cdcdcd",
    title: "#111",
    text: "#111",
    subText: "#999",
    highlight: "#008170",
    link: "#6e6b5e",
    caption: "rgba(55, 53, 47, 0.65)",
    code: "#eb5757",
  },
  tableOfContents: {
    text: "#333",
    hover: "#000",
    highlight: "#008170",
  },
  box: {
    bgHover: "#f0f0f0",
    border: "#cdcdcd",
    title: "#333",
    subText: "#999",
    date: "#afafaf",
  },
  notion: {
    gray: "#787774",
    brown: "#9f6b53",
    orange: "#d9730d",
    yellow: "#cb912f",
    green: "#448361",
    blue: "#337ea9",
    purple: "#9065b0",
    pink: "#c14c8a",
    red: "#d44c47",
    gray_background: "#f1f1ef",
    brown_background: "#f4eeee",
    orange_background: "#fbecdd",
    yellow_background: "#fbf3db",
    green_background: "#edf3ec",
    blue_background: "#e7f3f8",
    purple_background: "rgba(244, 240, 247, 0.8)",
    pink_background: "rgba(249, 238, 236, 0.8)",
    red_background: "#fdebec",
  },
};

const dark: Theme = {
  bg: "#0f0f0f",
  header: {
    bg: "#232d3f",
    switch: "#5b74a4",
    text: "#fff",
  },
  contents: {
    bgHover: "#232d3f",
    bgCode: "#404040",
    border: "#232d3f",
    title: "#fff",
    text: "#fff",
    subText: "#eee",
    highlight: "#03e6c8",
    link: "#e8e7e3",
    caption: "#fff",
    code: "#fff",
  },
  tableOfContents: {
    text: "#f0f0f0",
    hover: "#03e6c8",
    highlight: "#03e6c8",
  },
  box: {
    bgHover: "#fff",
    border: "#232d3f",
    title: "#fff",
    subText: "#fff",
    date: "#fff",
  },
  notion: {
    gray: "#cecaca",
    brown: "#dcc6bc",
    orange: "#f9cc9f",
    yellow: "#ecd4ac",
    green: "#bcdccb",
    blue: "#b0d3e8",
    purple: "#cebcdc",
    pink: "#e5b3ce",
    red: "#fdbd9b",
    gray_background: "#37372f",
    brown_background: "#3e2828",
    orange_background: "#5b330b",
    yellow_background: "#5c470a",
    green_background: "#2b3f27",
    blue_background: "#173e4f",
    purple_background: "#332244",
    pink_background: "#4c1a35",
    red_background: "#5d090d",
  },
};

export default {
  light,
  dark,
};
