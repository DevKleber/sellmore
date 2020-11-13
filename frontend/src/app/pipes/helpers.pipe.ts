import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'helpers',
})
export class HelpersPipe implements PipeTransform {
	transform(value: any, args?: any, args1?: any): any {
		return this.oquefazer(value, args, args1);
	}

	oquefazer(value: string, args: string, args1: string) {
		let texto = '';
		switch (args) {
			case 'isDevMode': {
				return this.isDevMode(value, args1);
				break;
			}
			case 'statusString': {
				return this.statusString(value);
				break;
			}
			default: {
				break;
			}
		}
		return texto;
	}
	statusString(value) {
		const status = [
			{ id: 'pc', status: 'Problemas com cartão' },
			{ id: 'ld', status: 'Ligar depois' },
			{ id: 'n', status: 'Não tem interesse' },
			{ id: 'c', status: 'Comprou' },
			{ id: 'a', status: 'Aguardando seu telefonema' },
		];
		var result = status.filter(function (el) {
			return el.id == value;
		});
		return result[0].status;
	}

	isDevMode(value, isdev) {
		if (isdev) {
			return value.replace(/public\//g, '');
		}
		return value;
	}
}
