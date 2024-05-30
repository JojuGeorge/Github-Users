import React, {useState, useEffect} from 'react';
import mockUser from './mockData/mockUser';
import mockFollowers from './mockData/mockFollowers';
import mockRepos from './mockData/mockRepos';
import axios from 'axios'

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({children})=>{
    const [githubUser, setGithubUser] = useState(mockUser);
    const [followers, setFollowers] = useState(mockFollowers);
    const [repos, setRepos] = useState(mockRepos)

    return (
        <GithubContext.Provider value={{githubUser, followers, repos}}>
            {children}
        </GithubContext.Provider>
    )
}

export {GithubContext, GithubProvider}