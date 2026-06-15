import Nav from "@/components/Nav";

export default function Works() {
  return (
    <div className="flex flex-col flex-1">
      <Nav variant="dark" />
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-8">
        <h1 className="text-4xl font-bold mb-4">Works</h1>
        <p className="text-lg">This is the works page.</p>
      </div>
    </div>
  );
}
