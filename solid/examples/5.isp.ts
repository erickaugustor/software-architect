interface CustomerProtocol {
  name: string,
  lastName: string,
  cpf: string,
  cnpj: string;
}

export class IndividualCustomer implements CustomerProtocol {
  name: string;
  lastName: string;
  cpf: string;

  constructor(name: string, lastName: string, cpf: string) {
    this.name = name;
    this.lastName = lastName;
    this.cpf = cpf;
  }
}

export class EnterpriseCustomer implements CustomerProtocol {
  cnpj: string;

  constructor(cnpj: string) {
    this.cnpj = cnpj;
  }
}

// solution

interface IndividualCustomerProtocol {
  name: string,
  lastName: string,
  cpf: string,
}

export class IndividualCustomerNew implements IndividualCustomerProtocol {
  name: string;
  lastName: string;
  cpf: string;

  constructor(name: string, lastName: string, cpf: string) {
    this.name = name;
    this.lastName = lastName;
    this.cpf = cpf;
  }
}

interface EnterpriseCustomerProtocol {
  cnpj: string;
}

export class EnterpriseCustomerNew implements EnterpriseCustomerProtocol {
  cnpj: string;

  constructor(cnpj: string) {
    this.cnpj = cnpj;
  }
}