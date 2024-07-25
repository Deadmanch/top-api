import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { ProductModel } from '../../product/model/product.model';

export type ReviewDocument = HydratedDocument<ReviewModel>;

@Schema({ timestamps: true })
export class ReviewModel {
	@Prop()
	name: string;
	@Prop()
	title: string;
	@Prop()
	description: string;
	@Prop()
	rating: number;

	@Prop({ type: MongooseSchema.Types.ObjectId, ref: ProductModel.name })
	productId: string;
}

export const ReviewSchema = SchemaFactory.createForClass(ReviewModel);
