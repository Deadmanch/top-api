import { Injectable } from '@nestjs/common';
import { PageDocument, PageModel, TopLevelCategory } from './model/page.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePageDto } from './dto/create-page.dto';

@Injectable()
export class PageService {
	constructor(@InjectModel(PageModel.name) private readonly pageModel: Model<PageDocument>) {}

	async create(dto: CreatePageDto) {
		return this.pageModel.create(dto);
	}

	async findById(id: string) {
		return this.pageModel.findById(id).exec();
	}

	async findByAlias(alias: string) {
		return this.pageModel.findOne({ alias }).exec();
	}
	async findAll() {
		return this.pageModel.find({}).exec();
	}
	async findByText(text: string) {
		return this.pageModel.find({ $text: { $search: text, $caseSensitive: false } }).exec();
	}
	async findByFirstCategory(firstCategory: TopLevelCategory) {
		return this.pageModel
			.aggregate()
			.match({ firstCategory })
			.group({
				_id: { secondCategory: '$secondCategory' },
				pages: { $push: { alias: '$alias', title: '$title' } },
			})
			.exec();
	}

	async deleteById(id: string) {
		return this.pageModel.findByIdAndDelete(id).exec();
	}

	async updateById(id: string, dto: CreatePageDto) {
		return this.pageModel.findByIdAndUpdate(id, dto, { new: true }).exec();
	}
}
