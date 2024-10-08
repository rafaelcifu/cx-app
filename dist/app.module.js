"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_module_1 = require("./prisma/prisma.module");
const app_controller_1 = require("./app.controller");
const role_module_1 = require("./role/role.module");
const auth_provider_module_1 = require("./auth-provider/auth-provider.module");
const user_module_1 = require("./user/user.module");
const company_module_1 = require("./company/company.module");
const supabase_module_1 = require("./supabase/supabase.module");
const auth_module_1 = require("./auth/auth.module");
const avatar_upload_service_1 = require("./avatar-upload/avatar-upload.service"); // Changed from AvatarUploadService
const avatar_upload_controller_1 = require("./avatar-upload/avatar-upload.controller"); // Changed from AvatarUploadController
const avatar_upload_module_1 = require("./avatar-upload/avatar-upload.module"); // Changed from AvatarUploadModule
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }), // Load .env variables globally
            prisma_module_1.PrismaModule, // Database ORM
            role_module_1.RoleModule, // Role management
            auth_provider_module_1.AuthProviderModule, // Manage auth providers
            user_module_1.UserModule, // User management
            company_module_1.CompanyModule, // Company related logic
            supabase_module_1.SupabaseModule, // Supabase integration
            auth_module_1.AuthModule,
            avatar_upload_module_1.AvatarModule, // Authentication logic
        ],
        controllers: [app_controller_1.AppController, avatar_upload_controller_1.AvatarController],
        providers: [avatar_upload_service_1.UploadService], // Application controllers
    })
], AppModule);
//# sourceMappingURL=app.module.js.map