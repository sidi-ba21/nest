import {Body, Controller, Get, Post, Put, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ArticleDto } from './article.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('article/:title')
  getArticle(@Param('title') title: string): string {
    console.log(title);
    return this.appService.getArticle();
  }
  @Post('article')
  postArticle(@Body() article : ArticleDto): void {
    console.log(article);
  }
  @Put('article/:title')
  putArticle(@Param('title') title: string, @Body() article: ArticleDto): void {
    console.log(title, article);
  }
}
