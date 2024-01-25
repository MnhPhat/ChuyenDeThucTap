const { default: routerAdmin } = require("./routerAdmin");
const { default: routerSite } = require("./routerSite");

const appRouter = {
  routerAdmin: routerAdmin,
  routerSite: routerSite,
};

export default appRouter;
