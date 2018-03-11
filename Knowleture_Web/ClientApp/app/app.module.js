"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/common/http");
const forms_1 = require("@angular/forms");
const app_component_1 = require("./app.component");
const app_routing_module_1 = require("./app-routing.module");
const app_dev_config_1 = require("./core/configs/app.dev.config");
const auth_guard_1 = require("./shared/guards/auth.guard");
const authentication_service_1 = require("./core/services/authentication.service");
const components_1 = require("./constants/components");
const directives_1 = require("./constants/directives");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpClientModule,
            forms_1.FormsModule,
            app_routing_module_1.routing
        ],
        declarations: [
            ...components_1.ComponentsList,
            ...directives_1.DirectivesList
        ],
        providers: [
            platform_browser_1.Title,
            app_dev_config_1.AppConfig,
            auth_guard_1.AuthGuard,
            authentication_service_1.AuthenticationService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map