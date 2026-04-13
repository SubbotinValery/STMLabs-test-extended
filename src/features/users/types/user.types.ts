export interface User {
  id: string;
  name: string;
  avatarThumb: string;
  avatarMedium: string;
  location: string;
  registeredDate: string;
  email: string;
  phone: string;
}

export interface ApiUser {
  login: {
    uuid: string;
  };
  name: {
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
    medium: string;
  };
  location: {
    state: string;
    city: string;
  };
  registered: {
    date: string;
  };
  email: string;
  phone: string;
}

export interface ApiResponse {
  results: ApiUser[];
}
