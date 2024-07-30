import { IsArray, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { TopLevelCategory } from '../model/page.model';
import { Type } from 'class-transformer';
import { PageErrors } from '../page.constants';

export class HhDataDto {
	@IsNumber()
	count: number;
	@IsNumber()
	juniorSalary: number;
	@IsNumber()
	middleSalary: number;
	@IsNumber()
	seniorSalary: number;
}

export class TopPageAdvantageDto {
	@IsString()
	title: string;

	@IsString()
	description: string;
}
export class CreatePageDto {
	@IsEnum(TopLevelCategory)
	firstCategory: TopLevelCategory;
	@IsString({ message: PageErrors.SECOND_CATEGORY_MUST_BE_STRING })
	secondCategory: string;
	@IsString({ message: PageErrors.ALLIAS_MUST_BE_STRING })
	alias: string;
	@IsString({ message: PageErrors.TITLE_MUST_BE_STRING })
	title: string;
	@IsString({ message: PageErrors.CATEGORY_MUST_BE_STRING })
	category: string;
	@IsString()
	metaTitle: string;
	@IsString()
	metaDescription: string;
	@IsOptional()
	@ValidateNested()
	@Type(() => HhDataDto)
	hh?: HhDataDto;
	@IsArray({ message: PageErrors.ADVANTAGES_MUST_BE_ARRAY })
	@ValidateNested()
	@Type(() => TopPageAdvantageDto)
	advantages: TopPageAdvantageDto[];
	@IsArray({ message: PageErrors.TAGS_MUST_BE_ARRAY_STRING })
	@IsString({ each: true, message: PageErrors.TAGS_MUST_BE_ARRAY_STRING })
	tags: string[];
	@IsString({ message: PageErrors.SEO_TEXT_MUST_BE_STRING })
	seoText: string;
	@IsString({ message: PageErrors.TAGS_TITLE_MUST_BE_STRING })
	tagsTitle: string;
}
