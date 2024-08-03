import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { API_URL, SALARY_CLUSTER_FIND_ERROR, SALARY_CLUSTER_ID } from './hh.constants';
import { HhResponse } from './model/hh.model';
import { HhData } from 'src/page/model/page.model';

@Injectable()
export class HhService {
	private token: string;
	constructor(
		private readonly configService: ConfigService,
		private readonly httpService: HttpService,
	) {
		this.token = this.configService.get('HH_TOKEN') ?? '';
	}

	async getData(text: string) {
		try {
			const { data } = await this.httpService
				.get<HhResponse>(API_URL.vacancies, {
					params: {
						text,
						clusters: true,
					},
					headers: {
						'User-Agent': 'OwlTop/1.0 (stepanova.nata.r@gmail.com)',
						Authorization: 'Bearer ' + this.token,
					},
				})
				.toPromise();
			return this.parseData(data);
		} catch (e) {
			Logger.error(e);
		}
	}

	private parseData(data: HhResponse): HhData {
		const salaryClusters = data.clusters.find((c) => c.id === SALARY_CLUSTER_ID);
		if (!salaryClusters) {
			throw new Error(SALARY_CLUSTER_FIND_ERROR);
		}
		const juniorSalary = this.getSalaryFromString(salaryClusters.items[1].name);
		const middleSalary = this.getSalaryFromString(
			salaryClusters.items[Math.ceil(salaryClusters.items.length / 2)].name,
		);
		const seniorSalary = this.getSalaryFromString(
			salaryClusters.items[salaryClusters.items.length - 1].name,
		);
		return {
			count: data.found,
			juniorSalary,
			middleSalary,
			seniorSalary,
			updatedAt: new Date(),
		};
	}

	private getSalaryFromString(s: string): number {
		const numberRegExp = /(\d+)/g;
		const res = s.match(numberRegExp);
		if (!res) {
			return 0;
		}
		return +res[0];
	}
}
