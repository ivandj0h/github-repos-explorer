"use client";

import React, { useState, FormEvent } from "react";
import { searchHandler, toggleAccordion } from "@/utils";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import LoadingText from "@divy-work/react-loading-text"
import {Repo, User} from "@/types";


export const SearchComponent: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [users, setUsers] = useState<User[]>([]);
    const [repos, setRepos] = useState<{ [key: string]: Repo[] }>({});
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false); // new loading state

    const searchHandlerWrapper = async (e: FormEvent) => {
        e.preventDefault();
        searchHandler(searchTerm, setUsers, setRepos, setIsLoading, setSearchTerm);
    }

    const toggleAccordionWrapper = (e: any, username: string) => {
        toggleAccordion(e, username, setOpenAccordion);
    }


    return (
        <div className="w-full">
            <h1 className="mb-4 text-3xl font-bold text-gray-500 dark:text-white text-center">GitHub Repositories Explorer</h1>
            <form onSubmit={searchHandlerWrapper}>
                <div>
                    <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Enter Username</label>
                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Username" required/>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

            <div className="mt-4">
                {isLoading && (
                    <div className="flex justify-center items-center mt-12">
                        <LoadingText extras={["Another Loading Text", "One more!"]} interval={2000} />
                    </div>
                )}

                {!isLoading && users.length > 0 && (
                    users.map(user => (
                        <div key={user.login} className="py-1">
                            <h3>Showing users for "{user.login}"</h3>
                            <div className="flex justify-between items-center bg-black border border-b-1 border-r-0 border-l-0 border-t-0 border-blue-600 px-3 py-2 cursor-pointer mt-10"
                                 onClick={(e) => toggleAccordion(e, user.login, setOpenAccordion)}>
                                <div className="flex items-center">
                                    <img src={user.avatar_url} alt={user.login} className="w-6 h-6 rounded-full mr-2" />
                                    <h2 className="text-lg font-bold text-gray-900 dark:text-blue-700">
                                        {user.login}
                                    </h2>
                                </div>
                                {openAccordion === user.login ? <FiChevronDown /> : <FiChevronRight />}
                            </div>
                            {openAccordion === user.login && repos[user.login]?.map((repo, index) => (
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" key={index}>
                                    <div className="p-4 bg-transparent border border-blue-600 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors duration-200">
                                        <div className="flex justify-between">
                                            <h3 className="text-md font-bold text-gray-900 dark:text-white">
                                                {repo.name}
                                            </h3>
                                            <p className="flex items-center text-gray-600 dark:text-gray-400">
                                                <FaStar className="mr-1" /> {repo.stargazers_count}
                                            </p>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {repo.description?.length > 40 ? repo.description.slice(0, 40) + "..." : repo.description}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
