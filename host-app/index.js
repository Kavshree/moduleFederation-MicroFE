import("../remote-app/remoteModuleIndex.js").then((module) => {
    document.body.innerHTML = module.remoteModuleGreet();
})