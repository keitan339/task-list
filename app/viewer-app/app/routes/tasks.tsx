export async function clientLoader() {
  const response = await fetch("/");
  const data = await response.json();
  return data;
}

export default function Tasks() {
  return "aa";
}
