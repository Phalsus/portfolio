import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Db, storage } from "@/config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import Autoplay from "embla-carousel-autoplay";

export default function Homepage() {
  const [Technologies, setTechnologies] = useState([]);

  const technologiesRef = collection(Db, "Technologies");

  useEffect(() => {
    const getTechnologiesList = async () => {
      try {
        const data = await getDocs(technologiesRef);
        const filteredData = await Promise.all(
          data.docs.map(async (doc) => {
            const url = await getDownloadURL(
              ref(
                storage,
                doc._document.data.value.mapValue.fields.imagePath.stringValue
              )
            );
            return {
              ...doc.data(),
              id: doc.id,
              url: url,
            };
          })
        );

        setTechnologies(filteredData);
        console.log(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getTechnologiesList();
  }, []);

  return (
    <div className="text-slate-200 max-w-5xl mx-auto ">
      <div className="flex items-center text-4xl justify-start">
        <div className="w-1/2 text-start my-32">
          <span className="">
            <span className=" font-gaMaamli bg-gradient-to-l from-Neo-Blue to-Neo-Purp text-transparent bg-clip-text">
              welcome
            </span>
            <span> to</span>
          </span>
          <p>My Personal Portfolio</p>
          <p className="text-lg mt-2 text-slate-400">
            Innovative Web Developer with experience in building impactful and
            user-friendly websites. specializes in both Frontend and Backend
            technologies and passionate about modern web standards and
            cutting-edge development techniques. Open to learning new
            technologies, tools and frameworks
          </p>
        </div>
      </div>
      <div className="my-5">
        <p className="text-center text-4xl font-semibold p-4">
          <div className="relative inline-block p-3">
            Technologies
            <div className=" absolute  bottom-1 left-0 pl-4 translate-x-0 w-full h-1 bg-gradient-to-r from-Neo-Purp to-Neo-Blue"></div>
          </div>
        </p>
        <Carousel
          plugins={[
            Autoplay({
              delay: 1000,
            }),
          ]}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="my-5">
            {Technologies.map((tech) => (
              <CarouselItem key={tech.name} className="basis-1/4 ">
                <div>
                  <img src={tech.url} alt="" />
                  <h1 className="text-center text-2xl text-slate-400">
                    {tech.name}
                  </h1>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div>
        <p className="text-center text-4xl font-semibold p-4">
          <div className="relative inline-block p-3">
            Projects
            <div className=" absolute  bottom-1 left-0 pl-4 translate-x-0 w-full h-1 bg-gradient-to-r from-Neo-Purp to-Neo-Blue"></div>
          </div>
        </p>

        <div className="grid grid-cols-4 gap-4">
          
        </div>
      </div>
    </div>
  );
}
