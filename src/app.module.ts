import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './api/users/users.module';
import { AuthModule } from './api/auth/auth.module';
import { ArticleModule } from './api/article/article.module';
import { ArtifactModule } from './api/artifact/artifact.module';
import { ArtifactController } from './api/artifact/artifact.controller';
import { CarsModule } from './api/cars/cars.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule, AuthModule, ArticleModule, ArtifactModule, CarsModule],
  controllers: [AppController, ArtifactController],
  providers: [AppService],
})
export class AppModule {}
