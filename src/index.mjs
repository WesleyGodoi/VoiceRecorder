import Controller from "./controller.mjs";
import Media from "./util/media.mjs";
import Recorder from "./util/recorder.mjs";
import View from "./view.mjs";


const media = new Media()
const recorder = new Recorder();
const view = new View()

Controller.initialize({
    view,
    media,
    recorder
})