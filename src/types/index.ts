export interface UserProps {
    pfp: string;
    name: string;
    joinedAt: string;
    username: string;
    bio: string;
    repos: string;
    followers: string;
    following: string;
    links: {
      location: string;
      twitter: string;
      blog: string;
      company: string;
    };
  }
  
  export interface ContentProps {
    setUser: (user: UserProps | null) => void;
  }
  
  export interface UserDataProps {
    user: UserProps;
  }

  export interface ThemeContextProps {
    changeTheme: () => void;
    lightMode: boolean;
  }