export interface User {
    name: string;
    email: string;
    subscriptionDate: string;
    status: 'Active' | 'Inactive';
    donorStatus: 'Donor' | 'Non-Donor';
  }