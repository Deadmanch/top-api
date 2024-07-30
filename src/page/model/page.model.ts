import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products,
}

export class HhData {
	@Prop()
	count: number;
	@Prop()
	juniorSalary: number;
	@Prop()
	middleSalary: number;
	@Prop()
	seniorSalary: number;
}

export class TopPageAdvantage {
	@Prop()
	title: string;

	@Prop()
	description: string;
}

export type PageDocument = HydratedDocument<PageModel>;

@Schema({ timestamps: true })
export class PageModel {
	@Prop({ enum: TopLevelCategory, type: () => Number })
	firstCategory: TopLevelCategory;

	@Prop()
	secondCategory: string;

	@Prop({ unique: true })
	alias: string;

	@Prop()
	title: string;

	@Prop()
	metaTitle: string;

	@Prop()
	metaDescription: string;

	@Prop()
	category: string;

	@Prop({ type: () => HhData })
	hh?: HhData;

	@Prop({ type: () => [TopPageAdvantage] })
	advantages: TopPageAdvantage[];

	@Prop({ type: () => [String] })
	tags: string[];

	@Prop()
	seoText: string;

	@Prop()
	tagsTitle: string;
}

export const PageSchema = SchemaFactory.createForClass(PageModel);
PageSchema.index({ '$**': 'text' });
