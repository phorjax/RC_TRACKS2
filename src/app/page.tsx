


export default function Home() {
  return (
    <main>
      <div className="hero min-h-screen flex-row justify-start" id="HeroSection">
        <div id="Triangle"></div>
        <div className="hero-content text-left  text-neutral-content" >
          <div className="h-screen" id="HeroText" >
            <h1 className="mb-5 text-5xl">PISTAS A <span className="text-amber-400 mb-5 text-5xl">TODO TERRENO </span> PARA LOS MEJORES <span className="text-amber-400 mb-5 text-5xl">4X4 RC!</span></h1>
            <br />
            <h1 className="mb-5 text-4xl"> <span className="text-amber-400 mb-5 text-4xl">ENTRETENIMIENTO</span> PARA TODA LA <span className="text-amber-400 mb-5 text-4xl">FAMILIA</span></h1>
            <button className="btn btn-warning  text-2xl">Contactanos</button>
          </div>
        </div>
      </div>
      <div className="w-full h-4 bg-amber-400"></div>
      
    </main>
  );
}
