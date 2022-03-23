import { Injectable, NotFoundException } from '@nestjs/common';
import { ArticleDto } from './article.dto';
import { DatabaseService } from './database.service';

@Injectable()
export class AppService {
  constructor(private readonly databaseService: DatabaseService) {}
  async getArticle(title: string): Promise<ArticleDto> {
    const article = await this.databaseService.findArticle(title);

    if (!article) {
      throw new NotFoundException('Article ${title} not found.');
    }
    return article;
  }

  putArticle(title: string, updateArticle: ArticleDto): Promise<ArticleDto> {
    return this.databaseService.updateArticle(title, updateArticle);
  }

  createArticle(newArticle: ArticleDto): Promise<ArticleDto> {
    return this.databaseService.createArticle(newArticle);
  }
}
