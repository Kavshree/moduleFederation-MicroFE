import("remoteApp/Module").then((module) => {
    document.body.innerHTML = module.remoteModuleGreet();
})
