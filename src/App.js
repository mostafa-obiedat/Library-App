import React from "react";
import Home from "./components/Home/Home";

const initState = {
  books: [
    {
      id: 1,
      title: "مقدمة ابن خلدون",
      author: "ابن خلدون",
      isbn: "1289499030",
    },
    {
      id: 2,
      title: "الحاوي في الطب",
      author: "ابو بكر الرازي",
      isbn: "893847239479",
    },
    {
      id: 3,
      title: "كتاب الجبر والمقابلة",
      author: "الخوارزمي",
      isbn: "4829472938",
    },
      {
      id: 4,
      title: "رياضيات الفضاء",
      author: "نيوتن",
      isbn: "4729472839",
    },
  ],
};

function App() {
  return <Home books={initState.books} />;
}

export default App;
