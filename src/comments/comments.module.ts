import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { Comment } from './comments.entity';
import { Article } from '../posts/article.entity';
import { User } from '../users/user.entity';
import { Category } from '../category/category.entity';
import { PostsService } from '../posts/posts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Article, User, Category])],
  providers: [CommentsService, PostsService],
  controllers: [CommentsController],
})
export class CommentsModule {}
