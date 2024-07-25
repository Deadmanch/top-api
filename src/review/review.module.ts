import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewModel, ReviewSchema } from './model/review.model';

@Module({
	controllers: [ReviewController],
	providers: [ReviewService],
	imports: [MongooseModule.forFeature([{ name: ReviewModel.name, schema: ReviewSchema }])],
})
export class ReviewModule {}
