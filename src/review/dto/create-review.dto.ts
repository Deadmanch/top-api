import { IsNumber, IsString, Max, Min } from 'class-validator';
import { ReviewErrors } from '../review.constants';

export class CreateReviewDto {
	@IsString({ message: ReviewErrors.NAME_MUST_BE_STRING })
	name: string;
	@IsString({ message: ReviewErrors.TITLE_MUST_BE_STRING })
	title: string;
	@IsString({ message: ReviewErrors.DESCRIPTION_MUST_BE_STRING })
	description: string;
	@Max(5, { message: ReviewErrors.MAX_RATING })
	@Min(1, { message: ReviewErrors.MIN_RATING })
	@IsNumber()
	rating: number;
	productId: string | undefined;
}
