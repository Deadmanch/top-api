import { Type } from 'class-transformer';
import { IsString, IsNumber, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { ProductErrors } from '../product.constants';

class ProductCharacteristicsDto {
	@IsString({ message: ProductErrors.NAME_CHARACTERISTICS_MUST_BE_STRING })
	name: string;
	@IsString({ message: ProductErrors.VALUE_CHARACTERISTICS_MUST_BE_STRING })
	value: string;
}

export class CreateProductDto {
	@IsString({ message: ProductErrors.IMAGE_MUST_BE_STRING })
	image: string;
	@IsString({ message: ProductErrors.TITLE_MUST_BE_STRING })
	title: string;
	@IsNumber()
	price: number;
	@IsOptional()
	@IsNumber()
	oldPrice?: number;
	@IsNumber()
	credit: number;
	@IsString({ message: ProductErrors.DESCRIPTION_MUST_BE_STRING })
	description: string;
	@IsString({ message: ProductErrors.ADVANTAGES_MUST_BE_STRING })
	advantages: string;
	@IsString({ message: ProductErrors.DISADVANTAGES_MUST_BE_STRING })
	disAdvantages: string;
	@IsArray({ message: ProductErrors.CATEGORIES_MUST_BE_STRING_ARRAY })
	@IsString({ each: true, message: ProductErrors.CATEGORIES_MUST_BE_STRING_ARRAY })
	categories: string[];
	@IsArray({ message: ProductErrors.TAGS_MUST_BE_STRING_ARRAY })
	@IsString({ each: true, message: ProductErrors.TAGS_MUST_BE_STRING_ARRAY })
	tags: string[];
	@IsArray()
	@ValidateNested()
	@Type(() => ProductCharacteristicsDto)
	characteristics: ProductCharacteristicsDto[];
}
