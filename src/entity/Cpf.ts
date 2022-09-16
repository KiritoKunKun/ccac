export default class Cpf {
  readonly VALID_CPF_LENGTH = 11;

  readonly isValid: boolean;

  constructor(readonly cpf: string) {
    this.cpf = this.clearCpf(cpf);
    this.isValid = this.validateCpf();
  }

  private clearCpf(cpf: string): string {
    return cpf
      .replace(".", "")
      .replace(".", "")
      .replace("-", "")
      .replace(" ", "");
  }

  private validateCpf(): boolean {
    if (!this.isValidLength() || this.allNumbersAreEqual()) {
      throw new Error("Invalid Cpf!");
    }

    const firstCheckDigit = this.getFirstCheckDigit();
    const secondCheckDigit = this.getSecondCheckDigit(firstCheckDigit);
    const checkDigits = `${firstCheckDigit}${secondCheckDigit}`;
    return this.allCheckDigitsAreValid(checkDigits);
  }

  private isValidLength() {
    return this.cpf.length === this.VALID_CPF_LENGTH;
  }

  private allNumbersAreEqual() {
    return this.cpf.split("").every((c) => c === this.cpf[0]);
  }

  private getFirstCheckDigit() {
    let sum = 0;
    for (let i = 1; i < 10; i++) {
      const digit = parseInt(this.cpf.substring(i - 1, i));
      sum += (11 - i) * digit;
    }
    return this.getCheckDigitBySum(sum);
  }

  private getSecondCheckDigit(firstCheckDigit: number) {
    let sum = firstCheckDigit * 2;
    for (let i = 1; i < 10; i++) {
      const digit = parseInt(this.cpf.substring(i - 1, i));
      sum += (12 - i) * digit;
    }
    return this.getCheckDigitBySum(sum);
  }

  private getCheckDigitBySum(sum: number) {
    const rest = sum % 11;
    return rest < 2 ? 0 : 11 - rest;
  }

  private allCheckDigitsAreValid(checkDigits: string) {
    return (
      this.cpf.substring(this.cpf.length - 2, this.cpf.length) === checkDigits
    );
  }
}
