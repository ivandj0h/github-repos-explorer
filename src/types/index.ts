type User = {
    login: string,
    url: string,
    avatar_url: string,
}

type Repo = {
    name: string,
    description: string,
    stargazers_count: number,
    html_url: string,
}

export type { User, Repo }
