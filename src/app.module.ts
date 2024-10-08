import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "./prisma/prisma.module";
import { AppController } from "./app.controller";
import { RoleModule } from "./role/role.module";
import { AuthProviderModule } from "./auth-provider/auth-provider.module";
import { UserModule } from "./user/user.module";
import { CompanyModule } from "./company/company.module";
import { SupabaseModule } from "./supabase/supabase.module";
import { AuthModule } from "./auth/auth.module";
import { UploadService } from "./avatar-upload/avatar-upload.service"; // Changed from AvatarUploadService
import { AvatarController } from "./avatar-upload/avatar-upload.controller"; // Changed from AvatarUploadController
import { AvatarModule } from "./avatar-upload/avatar-upload.module"; // Changed from AvatarUploadModule

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Load .env variables globally
    PrismaModule, // Database ORM
    RoleModule, // Role management
    AuthProviderModule, // Manage auth providers
    UserModule, // User management
    CompanyModule, // Company related logic
    SupabaseModule, // Supabase integration
    AuthModule,
    AvatarModule, // Authentication logic
  ],
  controllers: [AppController, AvatarController],
  providers: [UploadService], // Application controllers
})
export class AppModule {}
