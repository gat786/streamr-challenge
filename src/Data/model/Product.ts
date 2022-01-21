export interface Product {
  id: string;
  type: string;
  state: string;
  created: string;
  updated: string;
  owner: string;
  imageUrl: string;
  thumbnailUrl: string;
  name: string;
  description: string;
  category: string;
  previewStream: string;
  previewConfigJson: string;
  ownerAddress: string;
  beneficiaryAddress: string;
  pricePerSecond: number;
  priceCurrency: string;
  minimumSubscriptionInSeconds: number;
  pendingChanges: string;
  contact: Contact;
  termsOfUse: TermsOfUse;
}

export interface Contact {
  email: string;
  url: string;
  social1: string;
  social2: string;
  social3: string;
  social4: string;
}

export interface TermsOfUse {
  commercialUse: boolean;
  redistribution: boolean;
  reselling: boolean;
  storage: boolean;
  termsName: string;
  termsUrl: string;
}
