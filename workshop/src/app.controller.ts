import {Body, Controller, Get, Post, Put, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ArticleDto } from './article.dto';

@Controller('article')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/:title')
  getArticle(@Param('title') title: string): Promise<ArticleDto> {
    return this.appService.getArticle(title);
  }
  @Post()
  async postArticle(@Body() article : ArticleDto): Promise<void> {
    await this.appService.createArticle(article);
  }
  @Put('/:title')
  async putArticle(@Param('title') title: string, @Body() article: ArticleDto): Promise<void> {
    await this.appService.putArticle(title, article);
  }
}
