import { Module } from '@nestjs/common';
import { SitemapController } from './sitemap.controller';
import { ConfigModule } from '@nestjs/config';
import { PageModule } from '../page/page.module';

@Module({
	controllers: [SitemapController],
	imports: [PageModule, ConfigModule],
})
export class SitemapModule {}
