import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './api/users/users.module';
import { AuthModule } from './api/auth/auth.module';
import { ArticleModule } from './api/article/article.module';

@Module({
  imports: [UsersModule, AuthModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
