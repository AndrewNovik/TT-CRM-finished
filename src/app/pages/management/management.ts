export enum Roles {
  user = 'StLouise',
  admin = 'Visionix',
}

export enum Statuses {
  active = 'На складе',
  disabled = 'Товар закончился',
}

export interface DataItem {
  id: number;
  login: string;
  email: string;
  phoneNumber: string;
  role: string;
  editDate: number;
  creationDate: number;
  status: string;
  isHaveEP: boolean;
}

export interface AddAgentForm {
  login: string;
  email: string;
  phoneNumber: string;
  role: string;
  editDate: string;
  creationDate: string;
  status: string;
  isHaveEP: boolean;
}

export enum ManagementFormKey {
  login = 'login',
  phoneNumber = 'phoneNumber',
  creationDate = 'creationDate',
  status = 'status',
  eMail = 'eMail',
  role = 'role',
  editionDate = 'editionDate',
}

export const filtersInitialState = {
  [ManagementFormKey.login]: '',
  [ManagementFormKey.phoneNumber]: '',
  [ManagementFormKey.creationDate]: null,
  [ManagementFormKey.status]: '',
  [ManagementFormKey.eMail]: '',
  [ManagementFormKey.role]: '',
  [ManagementFormKey.editionDate]: null,
};

export const exampleData: DataItem[] = [
  {
    id: 1,
    login: 'linza1',
    email: 'SuperLongLoginSuperLongLoginSuperLongLoginvadimEmail@gmail.com',
    phoneNumber: '-7',
    role: 'Visionix',
    editDate: 1696832484000,
    creationDate: 1696141284000,
    status: 'На складе',
    isHaveEP: true,
  },
  {
    id: 2,
    login: 'linza2',
    email: 'MaximEmail3@post.net',
    phoneNumber: '-5',
    role: 'StLouise',
    editDate: 1696832484000,
    creationDate: 1696314084000,
    status: 'Товар закончился',
    isHaveEP: false,
  },
  {
    id: 3,
    login: 'linza3',
    email: 'vikaEmail6@yandex.ru',
    phoneNumber: '-2',
    role: 'StLouise',
    editDate: 1696832484000,
    creationDate: 1696314084000,
    status: 'На складе',
    isHaveEP: true,
  },
  {
    id: 4,
    login: 'linza4',
    email: 'vadimEmail@gmail.com',
    phoneNumber: '-1',
    role: 'Visionix',
    editDate: 1696315084000,
    creationDate: 1696832484000,
    status: 'На складе',
    isHaveEP: true,
  },
  {
    id: 5,
    login: 'GoodLinza1',
    email: 'MaximEmail8@post.net',
    phoneNumber: '-5',
    role: 'StLouise',
    editDate: 1696315084000,
    creationDate: 1696832484000,
    status: 'Товар закончился',
    isHaveEP: false,
  },
  {
    id: 6,
    login: 'GoodLinza2',
    email: 'vikaEmail4@yandex.ru',
    phoneNumber: '-5',
    role: 'StLouise',
    editDate: 1696314084000,
    creationDate: 1696832484000,
    status: 'На складе',
    isHaveEP: true,
  },
  {
    id: 7,
    login: 'GoodLinza3',
    email: 'vadimEmail2@gmail.com',
    phoneNumber: '-4',
    role: 'Visionix',
    editDate: 1696832484000,
    creationDate: 1696314084000,
    status: 'Товар закончился',
    isHaveEP: true,
  },
  {
    id: 8,
    login: 'GoodLinza4',
    email: 'MaximEmail0@post.net',
    phoneNumber: '-3',
    role: 'StLouise',
    editDate: 1696314084000,
    creationDate: 1696314084000,
    status: 'На складе',
    isHaveEP: false,
  },
  {
    id: 9,
    login: 'PerfectLinza1',
    email: 'vikaEmail3@yandex.ru',
    phoneNumber: '-12',
    role: 'StLouise',
    editDate: 1696314084000,
    creationDate: 1696314084000,
    status: 'На складе',
    isHaveEP: true,
  },
  {
    id: 10,
    login: 'PerfectLinza2',
    email: 'vadimEmail3@gmail.com',
    phoneNumber: '-2',
    role: 'StLouise',
    editDate: 1696832484000,
    creationDate: 1696832484000,
    status: 'На складе',
    isHaveEP: true,
  },
  {
    id: 11,
    login: 'PerfectLinza3',
    email: 'MaximEmail9@post.net',
    phoneNumber: '-1',
    role: 'StLouise',
    editDate: 1696314084000,
    creationDate: 1696314084000,
    status: 'На складе',
    isHaveEP: false,
  },
  {
    id: 12,
    login: 'PerfectLinza4',
    email: 'vikaEmail@yandex.ru',
    phoneNumber: '+1',
    role: 'StLouise',
    editDate: 1696314084000,
    creationDate: 1696314084000,
    status: 'Товар закончился',
    isHaveEP: true,
  },
];
