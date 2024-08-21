import Card from "./components/card";

export default function Home() {
  return (
    <div className="flex flex-col justify-center place-items-center gap-4">
      <h1>Hello Quizz App</h1>
      <Card />
    </div>
  );
}
