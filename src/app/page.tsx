"use client"

import Image from "next/image";
import KidPlaying from "../../public/rctracks-kidplaying.jpg";
import FamilyIcon from '../../public/family-black-silhouette-icon-vector-22372438.png'
import CarOnlyIcon from '../../public/RC_LOGO_CARONLY.png';
import RaceTrack from '../../public/race_track_icon_153937.png';
import Bosque from '../../public/Bosque.png';
import Volcan from '../../public/Volcan.png'
import LaMina from '../../public/LaMina.png'
import Locaciones from '../../public/Locaciones.jpg';
import { Status, Wrapper } from '@googlemaps/react-wrapper';
import MapComponent from '../components/mapComponent';
export default function Home() {

  const render = (status: Status) => (<h1>{status}</h1>)
  return (
    <main className="bg-[#3B3B3B]">
      <div className="hero min-h-screen flex-row justify-start" id="HeroSection">
        <div id="Triangle"></div>
        <div className="hero-content text-left  text-neutral-content" >
          <div className="h-screen" id="HeroText" >
            <h1 className="mb-5 lg:text-5xl">PISTAS A <span className="text-amber-400 mb-5 lg:text-5xl">TODO TERRENO </span> PARA LOS MEJORES <span className="text-amber-400 mb-5 ">4X4 RC!</span></h1>
            <br />
            <h1 className="mb-5 lg:text-4xl"> <span className="text-amber-400 mb-5 lg:text-4xl">ENTRETENIMIENTO</span> PARA TODA LA <span className="text-amber-400 mb-5 text-4xl">FAMILIA</span></h1>
            <a href="https://forms.gle/7VcTqMiccPAEiPha9" className="font-sans text-bold"><button className="btn btn-warning  text-2xl">Contactanos</button></a>
          </div>
        </div>
      </div>
      <div className="w-full h-4 bg-amber-400"></div>
      <section  id="servicios" >
        <div className="block">
          <div className="flex flex-wrap items-center justify-center">
            <div className=" w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-7/12">
              <div className="md:px-12 mx-14">
                <h1 className="mt-16 mb-5 lg:text-5xl text-amber-400">Servicios</h1>
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
                <div className="flex items-center gap-8 mb-10">
                  <Image src={RaceTrack} className="w-32" alt={""} />
                  <p className="text-white font-bold">
                    Recorrido por jugador de entre 6 y 10 minutos. Jugabilidad sencilla y practica. Diferentes tipos de superficies y obstaculos para superar.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden grow-0 basis-auto lg:flex lg:w-6/12 xl:w-5/12">
              <Image src={KidPlaying} className="w-full h-screen object-cover" alt={""} />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-4 bg-amber-400"></div>
      <section className="md:px-12 mx-14" id="tracks">
        <div>
          <h2 className="mb-5 mt-16 lg:text-5xl text-amber-400">TRACKS</h2>
          <h1 className=" text-white">ELIGE EL MEJOR CARRO RC Y SUPERA LOS DESAFIOS QUE TE OFRECE RC TRACKS!</h1>
        </div>
              </section>
        <div className="my-12 flex flex-wrap gap-10 items-center justify-center h-96">
          <div className="card w-1/4 shadow-xl relative bg-base-100 bg-[url('../../public/Bosque.png')]" id="card">
            <div className="card-header rounded-xl  bg-black bg-opacity-50 pb-1 flex items-center justify-center">
              <h2 className=" text-white lg:text-2xl m-4">EL BOSQUE EN RUINAS</h2>
            </div>
            <div className="card-body">
              <p></p>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-warning text-white">Miralo de cerca!</button>
              </div> */}
            </div>
          </div>

          <div className="card w-1/4 bg-base-100 shadow-xl relative bg-[url('../../public/Volcan.png')]" id="card">
            <div className="card-header rounded-xl bg-black bg-opacity-50 pb-1 flex items-center justify-center">
              <h2 className=" text-white lg:text-2xl m-4">EL VOLCAN</h2>
            </div>
            <div className="card-body h-5/6">
              <p></p>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-warning text-white">Miralo de cerca!</button>
              </div> */}
            </div>
          </div>
          <div className="card w-1/4 bg-base-100 shadow-xl bg-[url('../../public/LaMina.png')]" id="card">
            <div className="card-header rounded-xl bg-black bg-opacity-50 pb-1 flex items-center justify-center">
              <h2 className=" text-white lg:text-2xl m-4">LA MINA</h2>
            </div>
            <div className="card-body">
              <p></p>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-warning text-white">Miralo de cerca!</button>
              </div> */}
            </div>
          </div>
        </div>
      <div className="w-full h-4 bg-amber-400"></div>
      <section id="locaciones">
        <div className="block">
          <div className="flex flex-wrap items-center justify-center">
            <div className=" w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-5/12">
              <div className="md:px-12 m-14">
                <h2 className="mt-16 mb-5 lg:text-5xl text-amber-400">LOCACIONES</h2>
                <p className="mb-16 text-white font-bold">
                  Estamos ubicados en el mekatiadero de niquia y abriremos mas locaciones pronto.
                </p>
                <Wrapper apiKey={process.env.GOOGLE_MAPS_API_KEY as string} render={render}>
                  <MapComponent initialMarker={{ lat: 6.34437096286661, lng: -75.52954964417924 }} />
                </Wrapper>
              </div>
            </div>
            <div className="hidden grow-0 basis-auto lg:flex lg:w-6/12 xl:w-7/12">
              <Image src={Locaciones} className="w-full h-screen object-cover" alt={""} />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-4 bg-amber-400"></div>
      <section className="dark:bg-gray-900" id="contactenos">
        <div className="container px-6 py-12 md:px-12 mx-14">
          <div>
            <h2 className="mt-16 mb-5 lg:text-5xl  text-amber-400">CONTACTENOS</h2>
            <p className="text-white font-bold">Si quieres dejar tus datos para nosotros contactarte, <a className="underline font-sans text-amber-400" href="https://forms.gle/7VcTqMiccPAEiPha9">Presiona aqui.</a></p>
            <p className="mt-3 text-white font-bold">Aqui estamos para resolver cualquier inquietud.</p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <span className="inline-block p-3 text-amber-400 rounded-full bg-white dark:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>

              <h2 className="mt-4 text-3xl text-amber-400 dark:text-white">Email</h2>
              <p className="mt-2 text-white font-bold dark:text-gray-400">Nuestro equipo esta aqui para ayudarte.</p>
              <p className="mt-2 text-amber-400 dark:text-blue-400">RCTRACKS22@gmail.com</p>
            </div>

            <div>
              <span className="inline-block p-3 text-amber-400 rounded-full bg-white dark:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>

              <h2 className="mt-4 text-3xl text-amber-400 dark:text-white">Oficina</h2>
              <p className="mt-2 text-white font-bold dark:text-gray-400">Ven a saludar a nuestras oficinas.</p>
              <p className="mt-2 text-amber-400 dark:text-blue-400">Carrera 50B N 78-12, Medellin, Antioquia, Colombia.</p>
            </div>

            <div>
              <span className="inline-block p-3 text-amber-400 rounded-full bg-white dark:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>

              <h2 className="mt-4 text-3xl text-amber-400 dark:text-white">Phone</h2>
              <p className="mt-2 text-white font-bold dark:text-gray-400">Lunes-Viernes de 8am to 5pm.</p>
              <p className="mt-2 text-amber-400 dark:text-blue-400">+57 (321) 782-9651</p>
            </div>
          </div>
        </div>
      </section>
 
    </main>
  );
}
