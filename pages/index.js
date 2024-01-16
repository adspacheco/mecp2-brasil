import Image from "next/image";

function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-10">
      <Image src="./logo.svg" width={220} height={80} />
      <div className="w-[30rem]">
        <h2 className="text-xl text-center">
          Suporte e informações para famílias de pessoas com a Síndrome de
          Duplicação MECP2
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="border p-8 flex flex-col rounded-lg">
          <h3 className="text-xl text-center">Para pais</h3>
        </div>
        <div className="border p-8 flex flex-col rounded-lg">
          <h3 className="text-xl text-center">Para médicos</h3>
        </div>
      </div>
    </main>
  );
}

export default Home;
