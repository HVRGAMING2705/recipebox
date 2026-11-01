import { useState } from "react";

const FEATURES = ["Save recipes with title, ingredients, and steps", "Search recipes by ingredient", "Mark recipes as favorites"];

export default function App() {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("recipebox_recipe_manager_app_items") || "[]"));
  const [text, setText] = useState("");
  const add = () => { if (!text.trim()) return; const next = [...items, text]; setItems(next); localStorage.setItem("recipebox_recipe_manager_app_items", JSON.stringify(next)); setText(""); };
  return (<div><h1>RecipeBox - Recipe Manager App</h1>{FEATURES.map(f => <div key={f}>{f}</div>)}<input value={text} onChange={e => setText(e.target.value)} placeholder="Add an entry…" /><button onClick={add}>Add</button><ul>{items.map((x, i) => <li key={i}>{x}</li>)}</ul></div>);
}
