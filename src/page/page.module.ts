import { Module } from '@nestjs/common';
import { PageController } from './page.controller';
import { PageService } from './page.service';
import { PageModel, PageSchema } from './model/page.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	controllers: [PageController],
	providers: [PageService],
	imports: [MongooseModule.forFeature([{ name: PageModel.name, schema: PageSchema }])],
})
export class PageModule {}
