import createGlobe, { Marker } from "cobe";
import { useEffect, useRef } from "react";
import citiesJSON from "./data/cities.json";

// https://github.com/shuding/cobe

type props = {
  cities: string[];
};

export default function App({ cities }: props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const markers: Marker[] = cities
    .map((city) => {
      const cityJSON = citiesJSON.find((cityJSON) => cityJSON.city === city);
      if (!cityJSON) {
        return;
      }
      return {
        location: [cityJSON.lat, cityJSON.lng],
        size: Math.random() * (0.07 - 0.01) + 0.01,
      };
    })
    .filter((marker) => marker !== undefined) as Marker[];

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) {
      return;
    }

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: markers,
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, [markers]);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      />
    </>
  );
}
