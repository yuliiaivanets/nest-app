import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './api/users/users.module';
import { AuthModule } from './api/auth/auth.module';
import { ArticleModule } from './api/article/article.module';
import { ArtifactModule } from './api/artifact/artifact.module';
import { ArtifactController } from './api/artifact/artifact.controller';

@Module({
  imports: [UsersModule, AuthModule, ArticleModule, ArtifactModule],
  controllers: [AppController, ArtifactController],
  providers: [AppService],
})
export class AppModule {}
