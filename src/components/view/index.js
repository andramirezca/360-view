import ReactPannellum, { addScene, getConfig } from "react-pannellum";

// document
// https://pannellum.org/documentation/examples/tour/
// https://www.npmjs.com/package/react-pannellum#api-events

const View = () => {
  const img = ["https://st.depositphotos.com/1016676/5023/i/950/depositphotos_50236767-stock-photo-garden.jpg", "https://st4.depositphotos.com/11351024/30940/i/1600/depositphotos_309406638-stock-photo-360-panorama-by-180-degrees.jpg"];

  const click = () => {
    console.log(getConfig());
  };

  const onPanoramaLoaded = () => {
    const scent = "house";
    const confit = {
      autoRotate: -2,
      imageSource: img[0],
      hotSpots: [
        {
          yaw: 0,
          pitch: 0,
          "type": "scene",
          sceneId: "circle",
          "text": "Playa",
        },
      ],
    };
    addScene(scent, confit, () => {
      console.log("created house");
    });
  };
  const configCircle = {
    autoRotate: -2,
    yaw: 0,
    pitch: 0,
    hotSpots: [
      {
        yaw: 0,
        pitch: 0,
        "type": "scene",
        sceneId: "house",
        "text": "Jardin",
      },
    ],
  };
  return (
    <div>
      <h1>Pannellum React Component</h1>
      <ReactPannellum id="1" sceneId="circle" imageSource={img[1]} config={configCircle} onPanoramaLoaded={onPanoramaLoaded} />
      <div onClick={click}>Click me</div>
    </div>
  );
};

export default View;