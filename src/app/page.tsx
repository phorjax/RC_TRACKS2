import Image from "next/image";
import KidPlaying from "../../public/rctracks-kidplaying.jpg";
import FamilyIcon from '../../public/family-black-silhouette-icon-vector-22372438.png'
import CarOnlyIcon from '../../public/RC_LOGO_CARONLY.png';
import RaceTrack from '../../public/race_track_icon_153937.png';




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
      <div className="container mx-auto">
        <section>
          <div className="block">
            <div className="flex flex-wrap bg-[#3B3B3B]">
              <div className=" w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-7/12">
                <div className="md:px-12 mx-14 ">
                  <h1 className="mt-16 mb-5 text-2xl text-amber-400">Servicios</h1>
                  <p className="mb-16 text-white font-bold">
                    Somos una empresa dedicada al desarrollo de productos y servicios para el entretenimiento familiar.
                  </p>
                  <div className="mb-20 flex items-center gap-8">
                    <Image src={FamilyIcon} className="w-32" alt={""} />
                    <p className="text-white font-bold">
                      Ofrecemos alquiler de carros 4x4 para conducir en nuestras pistas ubicadas en centros comerciales. Destinado para niños, jóvenes y adultos.
                    </p>
                  </div>
                  <div className="mb-20 flex items-center gap-8">
                    <Image src={CarOnlyIcon} className="w-32" alt={""} />
                    <p className="text-white font-bold">
                      Nuestro producto principal son nuestras pistas tematicas para carros a control remoto de escala 1/24. Pista interactiva con mecanismos, luces y sonido de ambientacion.
                    </p>
                  </div>
                  <div className="flex items-center gap-8">
                    <Image src={RaceTrack} className="w-32" alt={""} />
                    <p className="text-white font-bold">
                      Recorrido por jugador de entre 6 y 10 minutos. Jugabilidad sencilla y practica. Diferentes tipos de superficies y obstaculos para superar.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-5/12">
                <Image src={KidPlaying} className="w-full h-screen" alt={""} />
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-4 bg-amber-400"></div>
      </div>
    </main>
  );
}
