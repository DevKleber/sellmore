import { Injectable } from '@angular/core';
import { NotificationService } from './shared/messages/notification.service';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class Helper {
	constructor(
		private notificationService: NotificationService,
		private sanitizer: DomSanitizer
	) {}
	typeFile = {
		image: ['jpg', 'png', 'jpeg', 'svg'],
		document: [
			'pdf',
			'msword',
			'vnd.oasis.opendocument.text',
			'vnd.openxmlformats-officedocument.wordprocessingml.document',
			'vnd.ms-excel',
		],
	};

	retira_acentos(string) {
		return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	}

	getTime() {
		var date = new Date();

		var seconds = String(date.getSeconds()).padStart(2, '0');
		var minutes = String(date.getMinutes()).padStart(2, '0');
		var hour = String(date.getHours()).padStart(2, '0');

		return `${hour}:${minutes}:${seconds}`;
	}
	getTimestampNow() {
		var date = new Date();

		var dd = String(date.getDate()).padStart(2, '0');
		var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = date.getFullYear();

		var seconds = String(date.getSeconds()).padStart(2, '0');
		var minutes = String(date.getMinutes()).padStart(2, '0');
		var hour = String(date.getHours()).padStart(2, '0');

		return `${yyyy}-${mm}-${dd} ${hour}:${minutes}:${seconds}`;
	}

	formBuilderValidatorsEmail() {
		return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	}
	validaCPFCNPJ(cpfcnpj) {
		var cpfcnpjJustNumbers = cpfcnpj.replace(/\D/g, '');

		if (cpfcnpjJustNumbers.length == 11) {
			var cpf = cpfcnpjJustNumbers;
			if (
				!cpf ||
				cpf.length != 11 ||
				cpf == '00000000000' ||
				cpf == '11111111111' ||
				cpf == '22222222222' ||
				cpf == '33333333333' ||
				cpf == '44444444444' ||
				cpf == '55555555555' ||
				cpf == '66666666666' ||
				cpf == '77777777777' ||
				cpf == '88888888888' ||
				cpf == '99999999999'
			)
				return false;
			var soma = 0;
			var resto;
			for (var i = 1; i <= 9; i++)
				soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
			resto = (soma * 10) % 11;
			if (resto == 10 || resto == 11) resto = 0;
			if (resto != parseInt(cpf.substring(9, 10))) return false;
			soma = 0;
			for (var i = 1; i <= 10; i++)
				soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
			resto = (soma * 10) % 11;
			if (resto == 10 || resto == 11) resto = 0;
			if (resto != parseInt(cpf.substring(10, 11))) return false;
			return true;
		} else if (cpfcnpjJustNumbers.length == 14) {
			var cnpj = cpfcnpjJustNumbers;
			if (
				!cnpj ||
				cnpj.length != 14 ||
				cnpj == '00000000000000' ||
				cnpj == '11111111111111' ||
				cnpj == '22222222222222' ||
				cnpj == '33333333333333' ||
				cnpj == '44444444444444' ||
				cnpj == '55555555555555' ||
				cnpj == '66666666666666' ||
				cnpj == '77777777777777' ||
				cnpj == '88888888888888' ||
				cnpj == '99999999999999'
			)
				return false;
			var tamanho = cnpj.length - 2;
			var numeros = cnpj.substring(0, tamanho);
			var digitos = cnpj.substring(tamanho);
			var soma = 0;
			var pos = tamanho - 7;
			for (var i = tamanho; i >= 1; i--) {
				soma += numeros.charAt(tamanho - i) * pos--;
				if (pos < 2) pos = 9;
			}
			var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
			if (resultado != digitos.charAt(0)) return false;
			tamanho = tamanho + 1;
			numeros = cnpj.substring(0, tamanho);
			soma = 0;
			pos = tamanho - 7;
			for (var i = tamanho; i >= 1; i--) {
				soma += numeros.charAt(tamanho - i) * pos--;
				if (pos < 2) pos = 9;
			}
			resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
			if (resultado != digitos.charAt(1)) return false;
			return true;
		}
	}

	extensoesProibidas(event) {
		let extensao = this.getExtensionOfFile(event.target.files[0].name);
		var deny = [
			'html',
			'exe',
			'js',
			'py',
			'php',
			'cc',
			'cpp',
			'cxx',
			'c',
			'c++',
			'h',
			'hh',
			'hpp',
			'hxx',
			'h++',
			'c++',
			'jar',
			'java',
			'deb',
			'tar',
			'zip',
		];
		return deny.indexOf(extensao.toLowerCase()) > -1;
	}
	extensoesValidasAnexos(event) {
		let extensao = this.getExtensionOfFile(event.target.files[0].name);
		var days = [
			'pdf',
			'png',
			'jpg',
			'jpeg',
			,
			'doc',
			'docs',
			'docx',
			'xlsx',
			'xls',
		];
		return days.indexOf(extensao.toLowerCase()) > -1;
	}
	getExtensionOfFile(name) {
		return name.split('.').pop();
	}

	onFileChangedAll(event, type = 'image') {
		let findFile = false;

		if (event.target.files[0] == undefined) {
			return false;
		}
		// console.log(event.target.files);
		var selectedFile: any[] = [];
		var urlImg: any[] = [];
		for (let file of event.target.files) {
			for (let ext of this.typeFile[type]) {
				if (file.type.includes(ext)) {
					findFile = true;
					let tmppath = URL.createObjectURL(file);
					urlImg.push(this.sanitizer.bypassSecurityTrustUrl(tmppath));
					selectedFile.push(file);
				}
			}
		}
		if (!findFile) {
			return false;
		}
		// console.log(selectedFile);

		if (selectedFile.length == 1) {
			const selectF = selectedFile.shift();
			const urlI = urlImg.shift();
			return { selectedFile: selectF, urlImg: urlI };
		}
		return { selectedFile, urlImg };
	}
	onFileChanged(event) {
		if (this.extensoesProibidas(event)) {
			this.notificationService.notifySweet('Arquivo Proibido');
			return false;
		}
		var tmppath = URL.createObjectURL(event.target.files[0]);
		let extensao = this.getExtensionOfFile(event.target.files[0].name);
		let img;
		switch (extensao) {
			case 'png':
			case 'jpg':
			case 'jpeg':
				img = tmppath;
				break;
			default:
				img = '/assets/img/file/' + extensao + '.svg';
				break;
		}
		let selectedFile = event.target.files[0];
		let dados: object = { img: img, selectedFile: selectedFile };

		return dados;
	}
	onFileSet(no_documento) {
		let extensao = this.getExtensionOfFile(no_documento);
		let img;
		switch (extensao) {
			case 'png':
			case 'jpg':
			case 'jpeg':
				img = no_documento;
				break;
			default:
				img = '/assets/img/file/' + extensao + '.svg';
				break;
		}
		return img;
	}

	formatarDataParaCompararNoBanco(data) {
		if (data) {
			let dia = data.getDate().toString();
			let diaF = dia.length == 1 ? '0' + dia : dia;
			let mes = (data.getMonth() + 1).toString(); //+1 pois no getMonth Janeiro começa com zero.
			let mesF = mes.length == 1 ? '0' + mes : mes;
			let anoF = data.getFullYear();
			return anoF + '-' + mesF + '-' + diaF;
		}
	}

	encrypt(dados) {
		dados = dados.replace(/A/g, 'গ');
		dados = dados.replace(/B/g, 'খ');
		dados = dados.replace(/C/g, 'ক');
		dados = dados.replace(/D/g, 'ঔ');
		dados = dados.replace(/E/g, 'ও');
		dados = dados.replace(/F/g, 'ঐ');
		dados = dados.replace(/G/g, 'এ');
		dados = dados.replace(/H/g, 'ঌ');
		dados = dados.replace(/I/g, 'ঋ');
		dados = dados.replace(/J/g, 'ঊ');
		dados = dados.replace(/K/g, 'উ');
		dados = dados.replace(/L/g, 'ঈ');
		dados = dados.replace(/M/g, 'ই');
		dados = dados.replace(/N/g, 'আ');
		dados = dados.replace(/O/g, 'অ');
		dados = dados.replace(/P/g, 'ॿ');
		dados = dados.replace(/Q/g, 'ॾ');
		dados = dados.replace(/R/g, 'ॼ');
		dados = dados.replace(/S/g, 'ॻ');
		dados = dados.replace(/T/g, 'ॲ');
		dados = dados.replace(/U/g, '९');
		dados = dados.replace(/V/g, '७');
		dados = dados.replace(/W/g, 'ॠ');
		dados = dados.replace(/X/g, 'ॡ');
		dados = dados.replace(/Y/g, 'फ़');
		dados = dados.replace(/Z/g, 'ॐ');

		dados = dados.replace(/a/g, 'अ');
		dados = dados.replace(/b/g, 'आ');
		dados = dados.replace(/c/g, 'इ');
		dados = dados.replace(/d/g, 'ई');

		dados = dados.replace(/e/g, 'उ');
		dados = dados.replace(/f/g, 'ऊ');
		dados = dados.replace(/g/g, 'ऋ');
		dados = dados.replace(/h/g, 'ऌ');
		dados = dados.replace(/i/g, 'ऍ');
		dados = dados.replace(/j/g, 'ऎ');
		dados = dados.replace(/k/g, 'ए');
		dados = dados.replace(/l/g, 'ऐ');
		dados = dados.replace(/m/g, 'ঙ');
		dados = dados.replace(/n/g, 'ঘ');
		dados = dados.replace(/o/g, 'ओ');
		dados = dados.replace(/p/g, 'औ');
		dados = dados.replace(/q/g, 'क');
		dados = dados.replace(/r/g, 'ख');
		dados = dados.replace(/s/g, 'ग');
		dados = dados.replace(/t/g, 'घ');
		dados = dados.replace(/u/g, 'ङ');
		dados = dados.replace(/v/g, 'च');
		dados = dados.replace(/w/g, 'छ');
		dados = dados.replace(/x/g, 'ज');
		dados = dados.replace(/y/g, 'झ');
		dados = dados.replace(/z/g, 'ञ');

		dados = dados.replace(/á/g, 'ट');
		dados = dados.replace(/é/g, 'य');
		dados = dados.replace(/í/g, 'म');
		dados = dados.replace(/ó/g, 'भ');
		dados = dados.replace(/ú/g, 'ब');

		dados = dados.replace(/à/g, 'फ');
		dados = dados.replace(/è/g, 'प');
		dados = dados.replace(/ì/g, 'ऩ');
		dados = dados.replace(/ò/g, 'न');
		dados = dados.replace(/ù/g, 'ध');

		dados = dados.replace(/ã/g, 'द');
		dados = dados.replace(/õ/g, 'थ');

		dados = dados.replace(/ç/g, 'त');

		dados = dados.replace(/ê/g, 'ण');

		dados = dados.replace(/ /g, '߷');

		dados = dados.replace(/"/g, 'रू');
		dados = dados.replace(/{/g, 'कु');
		dados = dados.replace(/}/g, 'ञ्');
		dados = dados.replace(/:/g, 'बा');
		dados = dados.replace(/,/g, 'र');

		return dados;
	}
	decrypt(dados) {
		var result;
		dados = dados.replace(/গ/g, 'A');
		dados = dados.replace(/খ/g, 'B');
		dados = dados.replace(/ক/g, 'C');
		dados = dados.replace(/ঔ/g, 'D');
		dados = dados.replace(/ও/g, 'E');
		dados = dados.replace(/ঐ/g, 'F');
		dados = dados.replace(/এ/g, 'G');
		dados = dados.replace(/ঌ/g, 'H');
		dados = dados.replace(/ঋ/g, 'I');
		dados = dados.replace(/ঊ/g, 'J');
		dados = dados.replace(/উ/g, 'K');
		dados = dados.replace(/ঈ/g, 'L');
		dados = dados.replace(/ই/g, 'M');
		dados = dados.replace(/আ/g, 'N');
		dados = dados.replace(/অ/g, 'O');
		dados = dados.replace(/ॿ/g, 'P');
		dados = dados.replace(/ॾ/g, 'Q');
		dados = dados.replace(/ॼ/g, 'R');
		dados = dados.replace(/ॻ/g, 'S');
		dados = dados.replace(/ॲ/g, 'T');
		dados = dados.replace(/९/g, 'U');
		dados = dados.replace(/७/g, 'V');
		dados = dados.replace(/ॠ/g, 'W');
		dados = dados.replace(/ॡ/g, 'X');
		dados = dados.replace(/फ़/g, 'Y');
		dados = dados.replace(/ॐ/g, 'Z');

		dados = dados.replace(/अ/g, 'a');
		dados = dados.replace(/आ/g, 'b');
		dados = dados.replace(/इ/g, 'c');
		dados = dados.replace(/ई/g, 'd');
		dados = dados.replace(/उ/g, 'e');
		dados = dados.replace(/ऊ/g, 'f');
		dados = dados.replace(/ऋ/g, 'g');
		dados = dados.replace(/ऌ/g, 'h');
		dados = dados.replace(/ऍ/g, 'i');
		dados = dados.replace(/ऎ/g, 'j');
		dados = dados.replace(/ए/g, 'k');
		dados = dados.replace(/ऐ/g, 'l');
		dados = dados.replace(/ঙ/g, 'm');
		dados = dados.replace(/ঘ/g, 'n');
		dados = dados.replace(/ओ/g, 'o');
		dados = dados.replace(/औ/g, 'p');
		dados = dados.replace(/क/g, 'q');
		dados = dados.replace(/ख/g, 'r');
		dados = dados.replace(/ग/g, 's');
		dados = dados.replace(/घ/g, 't');
		dados = dados.replace(/ङ/g, 'u');
		dados = dados.replace(/च/g, 'v');
		dados = dados.replace(/छ/g, 'w');
		dados = dados.replace(/ज/g, 'x');
		dados = dados.replace(/झ/g, 'y');
		dados = dados.replace(/ञ/g, 'z');

		dados = dados.replace(/ट/g, 'á');
		dados = dados.replace(/य/g, 'é');
		dados = dados.replace(/म/g, 'í');
		dados = dados.replace(/भ/g, 'ó');
		dados = dados.replace(/ब/g, 'ú');

		dados = dados.replace(/फ/g, 'à');
		dados = dados.replace(/प/g, 'è');
		dados = dados.replace(/ऩ/g, 'ì');
		dados = dados.replace(/न/g, 'ò');
		dados = dados.replace(/ध/g, 'ù');

		dados = dados.replace(/द/g, 'ã');
		dados = dados.replace(/थ/g, 'õ');

		dados = dados.replace(/त/g, 'ç');

		dados = dados.replace(/ण/g, 'ê');

		dados = dados.replace(/߷/g, ' ');

		dados = dados.replace(/Գ/g, '0');
		dados = dados.replace(/Բ/g, '1');
		dados = dados.replace(/Ա/g, '2');
		dados = dados.replace(/Ѿ/g, '3');
		dados = dados.replace(/Ѽ/g, '4');
		dados = dados.replace(/Ϫ/g, '5');
		dados = dados.replace(/ϟ/g, '6');
		dados = dados.replace(/ƨ/g, '7');
		dados = dados.replace(/Ʀ/g, '8');
		dados = dados.replace(/ƣ/g, '9');

		dados = dados.replace(/रू/g, '"');
		dados = dados.replace(/कु/g, '{');
		dados = dados.replace(/ञ्/g, '}');
		dados = dados.replace(/बा/g, ':');
		dados = dados.replace(/र/g, ',');

		return dados;
	}
	getAllCountryCode() {
		return [
			{ countryCode: '93', nome: 'Afeganistão' },
			{ countryCode: '355', nome: 'Albânia' },
			{ countryCode: '213', nome: 'Algéria' },
			{ countryCode: '1684', nome: 'Samoa Americana' },
			{ countryCode: '376', nome: 'Andorra' },
			{ countryCode: '244', nome: 'Angola' },
			{ countryCode: '1264', nome: 'Anguilla' },
			{ countryCode: '672', nome: 'Antártida' },
			{ countryCode: '1268', nome: 'Antigua e Barbuda' },
			{ countryCode: '54', nome: 'Argentina' },
			{ countryCode: '374', nome: 'Armênia' },
			{ countryCode: '297', nome: 'Aruba' },
			{ countryCode: '61', nome: 'Austrália' },
			{ countryCode: '43', nome: 'Áustria' },
			{ countryCode: '994', nome: 'Azerbaijão' },
			{ countryCode: '1242', nome: 'Bahamas' },
			{ countryCode: '973', nome: 'Bahrein' },
			{ countryCode: '880', nome: 'Bangladesh' },
			{ countryCode: '246', nome: 'Barbados' },
			{ countryCode: '375', nome: 'Bielorrússia' },
			{ countryCode: '032', nome: 'Bélgica' },
			{ countryCode: '501', nome: 'Belize' },
			{ countryCode: '229', nome: 'Benin' },
			{ countryCode: '1441', nome: 'Bermuda' },
			{ countryCode: '975', nome: 'Butão' },
			{ countryCode: '591', nome: 'Bolívia' },
			{ countryCode: '387', nome: 'Bósnia e Herzegovina' },
			{ countryCode: '267', nome: 'Botswana' },
			{ countryCode: '47', nome: 'Ilha Bouvet' },
			{ countryCode: '55', nome: 'Brasil' },
			{
				countryCode: '246',
				nome: 'Território Britânico do Oceano Índico',
			},
			{ countryCode: '673', nome: 'Brunei' },
			{ countryCode: '359', nome: 'Bulgária' },
			{ countryCode: '226', nome: 'Burkina Faso' },
			{ countryCode: '257', nome: 'Burundi' },
			{ countryCode: '855', nome: 'Camboja' },
			{ countryCode: '237', nome: 'Camarões' },
			{ countryCode: '1', nome: 'Canadá' },
			{ countryCode: '238', nome: 'Cabo Verde' },
			{ countryCode: '1345', nome: 'Ilhas Cayman' },
			{ countryCode: '236', nome: 'República Centro-Africana' },
			{ countryCode: '235', nome: 'Chade' },
			{ countryCode: '56', nome: 'Chile' },
			{ countryCode: '86', nome: 'China' },
			{ countryCode: '61', nome: 'Ilha Christmas' },
			{ countryCode: '672', nome: 'Ilhas Cocos (Keeling)' },
			{ countryCode: '57', nome: 'Colômbia' },
			{ countryCode: '269', nome: 'Comores' },
			{ countryCode: '242', nome: 'Congo' },
			{ countryCode: '242', nome: 'Congo (DR)' },
			{ countryCode: '682', nome: 'Ilhas Cook' },
			{ countryCode: '506', nome: 'Costa Rica' },
			{ countryCode: '225', nome: 'Costa do Marfim' },
			{ countryCode: '385', nome: 'Croácia' },
			{ countryCode: '53', nome: 'Cuba' },
			{ countryCode: '357', nome: 'Chipre' },
			{ countryCode: '420', nome: 'República Tcheca' },
			{ countryCode: '45', nome: 'Dinamarca' },
			{ countryCode: '253', nome: 'Djibuti' },
			{ countryCode: '1767', nome: 'Dominica' },
			{ countryCode: '1809', nome: 'República Dominicana' },
			{ countryCode: '593', nome: 'Equador' },
			{ countryCode: '20', nome: 'Egito' },
			{ countryCode: '503', nome: 'El Salvador' },
			{ countryCode: '240', nome: 'Guiné Equatorial' },
			{ countryCode: '291', nome: 'Eritreia' },
			{ countryCode: '372', nome: 'Estônia' },
			{ countryCode: '251', nome: 'Etiópia' },
			{ countryCode: '500', nome: 'Ilhas Malvinas' },
			{ countryCode: '298', nome: 'Ilhas Faroe' },
			{ countryCode: '679', nome: 'Fiji' },
			{ countryCode: '358', nome: 'Finlândia' },
			{ countryCode: '33', nome: 'França' },
			{ countryCode: '594', nome: 'Guiana Francesa' },
			{ countryCode: '689', nome: 'Polinésia Francesa' },
			{
				countryCode: '33',
				nome: 'Terras Austrais e Antárticas Francesas',
			},
			{ countryCode: '241', nome: 'Gabão' },
			{ countryCode: '220', nome: 'Gâmbia' },
			{ countryCode: '995', nome: 'Geórgia' },
			{ countryCode: '49', nome: 'Alemanha' },
			{ countryCode: '233', nome: 'Gana' },
			{ countryCode: '350', nome: 'Gibraltar' },
			{ countryCode: '30', nome: 'Grécia' },
			{ countryCode: '299', nome: 'Groelândia' },
			{ countryCode: '1473', nome: 'Granada' },
			{ countryCode: '590', nome: 'Guadalupe' },
			{ countryCode: '1671', nome: 'Guão' },
			{ countryCode: '502', nome: 'Guatemala' },
			{ countryCode: '224', nome: 'Guiné' },
			{ countryCode: '245', nome: 'Guiné-Bissau' },
			{ countryCode: '592', nome: 'Guiana' },
			{ countryCode: '509', nome: 'Haiti' },
			{ countryCode: '672', nome: 'Ilhas Heard e McDonald' },
			{ countryCode: '39', nome: 'Vaticano' },
			{ countryCode: '504', nome: 'Honduras' },
			{ countryCode: '852', nome: 'Hong Kong' },
			{ countryCode: '36', nome: 'Hungria' },
			{ countryCode: '354', nome: 'Islândia' },
			{ countryCode: '91', nome: 'Índia' },
			{ countryCode: '62', nome: 'Indonésia' },
			{ countryCode: '98', nome: 'Iran' },
			{ countryCode: '964', nome: 'Iraque' },
			{ countryCode: '353', nome: 'Irlanda' },
			{ countryCode: '972', nome: 'Israel' },
			{ countryCode: '39', nome: 'Italia' },
			{ countryCode: '1876', nome: 'Jamaica' },
			{ countryCode: '81', nome: 'Japão' },
			{ countryCode: '962', nome: 'Jornânia' },
			{ countryCode: '7', nome: 'Cazaquistão' },
			{ countryCode: '254', nome: 'Quênia' },
			{ countryCode: '686', nome: 'Kiribati' },
			{ countryCode: '850', nome: 'Coreia do Norte' },
			{ countryCode: '82', nome: 'Coreia do Sul' },
			{ countryCode: '965', nome: 'Kuwait' },
			{ countryCode: '996', nome: 'Quirguistão' },
			{ countryCode: '856', nome: 'Laos' },
			{ countryCode: '371', nome: 'Letônia' },
			{ countryCode: '961', nome: 'Líbano' },
			{ countryCode: '266', nome: 'Lesoto' },
			{ countryCode: '231', nome: 'Libéria' },
			{ countryCode: '218', nome: 'Líbia' },
			{ countryCode: '423', nome: 'Liechtenstein' },
			{ countryCode: '370', nome: 'Lituânia' },
			{ countryCode: '352', nome: 'Luxemburgo' },
			{ countryCode: '853', nome: 'Macao' },
			{ countryCode: '389', nome: 'Macedônia' },
			{ countryCode: '261', nome: 'Madagascar' },
			{ countryCode: '265', nome: 'Malawi' },
			{ countryCode: '60', nome: 'Malásia' },
			{ countryCode: '960', nome: 'Maldivas' },
			{ countryCode: '223', nome: 'Mali' },
			{ countryCode: '356', nome: 'Malta' },
			{ countryCode: '692', nome: 'Ilhas Marshall' },
			{ countryCode: '596', nome: 'Martinica' },
			{ countryCode: '222', nome: 'Mauritânia' },
			{ countryCode: '230', nome: 'Maurício' },
			{ countryCode: '269', nome: 'Mayotte' },
			{ countryCode: '52', nome: 'México' },
			{ countryCode: '691', nome: 'Micronésia' },
			{ countryCode: '373', nome: 'Moldova' },
			{ countryCode: '377', nome: 'Mônaco' },
			{ countryCode: '976', nome: 'Mongólia' },
			{ countryCode: '1664', nome: 'Montserrat' },
			{ countryCode: '212', nome: 'Marrocos' },
			{ countryCode: '258', nome: 'Moçambique' },
			{ countryCode: '95', nome: 'Birmânia' },
			{ countryCode: '264', nome: 'Namíbia' },
			{ countryCode: '674', nome: 'Nauru' },
			{ countryCode: '977', nome: 'Nepal' },
			{ countryCode: '31', nome: 'Holanda' },
			{ countryCode: '599', nome: 'Antilhas Holandesas' },
			{ countryCode: '687', nome: 'Nova Caledônia' },
			{ countryCode: '64', nome: 'Nova Zelândia' },
			{ countryCode: '505', nome: 'Nicarágua' },
			{ countryCode: '227', nome: 'Niger' },
			{ countryCode: '234', nome: 'Nigéria' },
			{ countryCode: '683', nome: 'Niue' },
			{ countryCode: '672', nome: 'Ilha Norfolk' },
			{ countryCode: '1670', nome: 'Ilhas Marianas do Norte' },
			{ countryCode: '47', nome: 'Noruega' },
			{ countryCode: '968', nome: 'Omã' },
			{ countryCode: '92', nome: 'Paquistão' },
			{ countryCode: '680', nome: 'Palau' },
			{ countryCode: '970', nome: 'Palestina' },
			{ countryCode: '507', nome: 'Panamá' },
			{ countryCode: '675', nome: 'Papua-Nova Guiné' },
			{ countryCode: '595', nome: 'Paraguai' },
			{ countryCode: '51', nome: 'Peru' },
			{ countryCode: '63', nome: 'Filipinas' },
			{ countryCode: '672', nome: 'Ilhas Picárnia' },
			{ countryCode: '48', nome: 'Polônia' },
			{ countryCode: '351', nome: 'Portugal' },
			{ countryCode: '1787', nome: 'Porto Rico' },
			{ countryCode: '974', nome: 'Catar' },
			{ countryCode: '262', nome: 'Reunião' },
			{ countryCode: '40', nome: 'Romênia' },
			{ countryCode: '70', nome: 'Rússia' },
			{ countryCode: '250', nome: 'Ruanda' },
			{ countryCode: '290', nome: 'Santa Helena' },
			{ countryCode: '1869', nome: 'São Cristóvão' },
			{ countryCode: '1758', nome: 'Santa Lúcia' },
			{ countryCode: '508', nome: 'São Pedro e Miquelon' },
			{ countryCode: '1784', nome: 'São Vicente e Granadinas' },
			{ countryCode: '684', nome: 'Samoa' },
			{ countryCode: '378', nome: 'São Marino' },
			{ countryCode: '239', nome: 'Sao Tomé e Príncipe' },
			{ countryCode: '966', nome: 'Arábia Saudita' },
			{ countryCode: '221', nome: 'Senegal' },
			{ countryCode: '381', nome: 'Sérvia e Montenegro' },
			{ countryCode: '248', nome: 'Seicheles' },
			{ countryCode: '232', nome: 'República da Serra Leoa' },
			{ countryCode: '65', nome: 'Singapura' },
			{ countryCode: '421', nome: 'Eslováquia' },
			{ countryCode: '386', nome: 'Eslovênia' },
			{ countryCode: '677', nome: 'Ilhas Salomão' },
			{ countryCode: '252', nome: 'Somália' },
			{ countryCode: '27', nome: 'África do Sul' },
			{
				countryCode: '500',
				nome: 'Ilhas Geórgia do Sul e Sandwich do Sul',
			},
			{ countryCode: '34', nome: 'Espanha' },
			{ countryCode: '94', nome: 'Sri Lanka' },
			{ countryCode: '249', nome: 'Sudão' },
			{ countryCode: '597', nome: 'Suriname' },
			{ countryCode: '47', nome: 'Esvalbarde' },
			{ countryCode: '268', nome: 'Suazilândia' },
			{ countryCode: '46', nome: 'Suécia' },
			{ countryCode: '41', nome: 'Suiça' },
			{ countryCode: '963', nome: 'Síria' },
			{ countryCode: '886', nome: 'Taiwan' },
			{ countryCode: '992', nome: 'Tajiquistão' },
			{ countryCode: '255', nome: 'Tanzânia' },
			{ countryCode: '66', nome: 'Tailândia' },
			{ countryCode: '670', nome: 'Timor-Leste' },
			{ countryCode: '228', nome: 'Togo' },
			{ countryCode: '690', nome: 'Toquelau' },
			{ countryCode: '676', nome: 'Tonga' },
			{ countryCode: '1868', nome: 'Trinidad e Tobago' },
			{ countryCode: '216', nome: 'Tunísia' },
			{ countryCode: '90', nome: 'Turquia' },
			{ countryCode: '7370', nome: 'Turcomenistão' },
			{ countryCode: '1649', nome: 'Ilhas Turks e Caicos' },
			{ countryCode: '688', nome: 'Tuvalu' },
			{ countryCode: '256', nome: 'Uganda' },
			{ countryCode: '380', nome: 'Ucrânia' },
			{ countryCode: '971', nome: 'Emirados Árabes' },
			{ countryCode: '44', nome: 'Reino Unido' },
			{ countryCode: '1', nome: 'Estados Unidos' },
			{ countryCode: '598', nome: 'Uruguai' },
			{ countryCode: '998', nome: 'Uzbequistão' },
			{ countryCode: '678', nome: 'Vanuatu' },
			{ countryCode: '58', nome: 'Venezuela' },
			{ countryCode: '84', nome: 'Vietnam' },
			{ countryCode: '1284', nome: 'Ilhas Virgens Inglesas' },
			{ countryCode: '1340', nome: 'Ilhas Virgens (USA)' },
			{ countryCode: '681', nome: 'Wallis e Futuna' },
			{ countryCode: '212', nome: 'Saara Ocidental' },
			{ countryCode: '967', nome: 'Iêmen' },
			{ countryCode: '260', nome: 'Zâmbia' },
			{ countryCode: '263', nome: 'Zimbábue' },
		];
	}
}
