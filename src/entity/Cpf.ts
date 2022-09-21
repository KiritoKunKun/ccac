export default class Cpf {
	private readonly VALID_CPF_LENGTH = 11;

	constructor(readonly value: string) {
		this.value = this.cleanCpf(value);
		if (!this.validate()) {
			throw new Error('Invalid cpf!');
		}
	}

	private cleanCpf(cpf: string): string {
		return cpf.replace(/\D/g, '');
	}

	private validate(): boolean {
		if (!this.isValidLength() || this.allNumbersAreEqual()) {
			throw new Error('Invalid cpf!');
		}

		const firstCheckDigit = this.calculateDigit(10);
		const secondCheckDigit = this.calculateDigit(11);
		const checkDigits = `${firstCheckDigit}${secondCheckDigit}`;
		return this.allCheckDigitsAreValid(checkDigits);
	}

	private isValidLength() {
		return this.value.length === this.VALID_CPF_LENGTH;
	}

	private allNumbersAreEqual() {
		const [firstDigit] = this.value;
		return this.value.split('').every((digit) => digit === firstDigit);
	}

	private calculateDigit(factor: number) {
		let total = 0;
		for (const digit of this.value) {
			if (factor > 1) total += parseInt(digit) * factor--;
		}
		const rest = total % 11;
		return rest < 2 ? 0 : 11 - rest;
	}

	private allCheckDigitsAreValid(checkDigits: string) {
		return checkDigits === this.extractDigits();
	}

	private extractDigits() {
		return this.value.slice(9);
	}
}
