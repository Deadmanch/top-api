import { IsEnum } from 'class-validator';
import { TopLevelCategory } from '../model/page.model';

export class FindPageDto {
	@IsEnum(TopLevelCategory)
	firstCategory: TopLevelCategory;
}
