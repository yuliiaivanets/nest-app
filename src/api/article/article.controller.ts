import { Controller, Get } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('/api/articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  findAll() {
    return this.articleService.findAll();
  }
}
