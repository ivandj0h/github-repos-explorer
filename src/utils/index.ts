import axios from "axios";
import {Repo} from "@/types";

export const searchHandler = async (searchTerm: string, setUsers: any, setRepos: any, setIsLoading: any, setSearchTerm: any) => {
    setIsLoading(true);

    const userRes = await axios.get(`https://api.github.com/search/users?q=${searchTerm}`);
    const foundUsers = userRes.data.items.slice(0, 3);
    setUsers(foundUsers);

    for (const user of foundUsers) {
        const repoRes = await axios.get(`https://api.github.com/users/${user.login}/repos`);
        setRepos((prevRepos: { [key: string]: Repo[] }) => ({
            ...prevRepos,
            [user.login]: repoRes.data.slice(0, 3),
        }));
    }

    setSearchTerm("");

    setTimeout(() => {
        setIsLoading(false);
    }, 3000);
}

export const toggleAccordion = (e: any, username: string | null, setOpenAccordion: any) => {
    e.stopPropagation();
    setOpenAccordion((openAccordion: string | null) => openAccordion === username ? null : username);
}

