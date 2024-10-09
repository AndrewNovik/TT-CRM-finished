export enum Roles {
  user = 'Пользователь',
  admin = 'Aдминистратор',
}

export enum Statuses {
  active = 'Активен',
  disabled = 'Заблокирован',
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
    login: 'Vadim1',
    email: 'vadimEmail@gmail.com',
    phoneNumber: '+79221110500',
    role: 'Пользователь',
    editDate: 1696832484000,
    creationDate: 1696141284000,
    status: 'Активен',
    isHaveEP: true,
  },
  {
    id: 2,
    login: 'Maxim2',
    email: 'MaximEmail3@post.net',
    phoneNumber: '+79234510500',
    role: 'Пользователь',
    editDate: 1696832484000,
    creationDate: 1696314084000,
    status: 'Заблокирован',
    isHaveEP: false,
  },
  {
    id: 3,
    login: 'Vika7',
    email: 'vikaEmail6@yandex.ru',
    phoneNumber: '+79221110599',
    role: 'Пользователь',
    editDate: 1696832484000,
    creationDate: 1696314084000,
    status: 'Активен',
    isHaveEP: true,
  },
  {
    id: 4,
    login: 'Vadim0',
    email: 'vadimEmail@gmail.com',
    phoneNumber: '+79221110876',
    role: 'Aдминистратор',
    editDate: 1696315084000,
    creationDate: 1696832484000,
    status: 'Активен',
    isHaveEP: true,
  },
  {
    id: 5,
    login: 'Maxim9',
    email: 'MaximEmail8@post.net',
    phoneNumber: '+78881110876',
    role: 'Пользователь',
    editDate: 1696315084000,
    creationDate: 1696832484000,
    status: 'Заблокирован',
    isHaveEP: false,
  },
  {
    id: 6,
    login: 'Vika5',
    email: 'vikaEmail4@yandex.ru',
    phoneNumber: '+79221110456',
    role: 'Пользователь',
    editDate: 1696314084000,
    creationDate: 1696832484000,
    status: 'Активен',
    isHaveEP: true,
  },
  {
    id: 7,
    login: 'Vadim6',
    email: 'vadimEmail2@gmail.com',
    phoneNumber: '+79221110623',
    role: 'Aдминистратор',
    editDate: 1696832484000,
    creationDate: 1696314084000,
    status: 'Заблокирован',
    isHaveEP: true,
  },
  {
    id: 8,
    login: 'Maxim5',
    email: 'MaximEmail0@post.net',
    phoneNumber: '+78884565364',
    role: 'Пользователь',
    editDate: 1696314084000,
    creationDate: 1696314084000,
    status: 'Активен',
    isHaveEP: false,
  },
  {
    id: 9,
    login: 'Vika4',
    email: 'vikaEmail3@yandex.ru',
    phoneNumber: '+78884365464',
    role: 'Пользователь',
    editDate: 1696314084000,
    creationDate: 1696314084000,
    status: 'Активен',
    isHaveEP: true,
  },
  {
    id: 10,
    login: 'Vadim2',
    email: 'vadimEmail3@gmail.com',
    phoneNumber: '+78884565464',
    role: 'Пользователь',
    editDate: 1696832484000,
    creationDate: 1696832484000,
    status: 'Активен',
    isHaveEP: true,
  },
  {
    id: 11,
    login: 'Maxim6',
    email: 'MaximEmail9@post.net',
    phoneNumber: '+78884565364',
    role: 'Пользователь',
    editDate: 1696314084000,
    creationDate: 1696314084000,
    status: 'Активен',
    isHaveEP: false,
  },
  {
    id: 12,
    login: 'Vika1',
    email: 'vikaEmail@yandex.ru',
    phoneNumber: '+78884365464',
    role: 'Пользователь',
    editDate: 1696314084000,
    creationDate: 1696314084000,
    status: 'Заблокирован',
    isHaveEP: true,
  },
];
