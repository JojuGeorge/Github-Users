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

    const [requests, setRequests] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({show:false, msg:""})

    const checkRequests = ()=>{
        axios
        .get(`${rootUrl}/rate_limit`)
        .then(({data}) => {
            let {rate:{remaining}} = data;

            // test code
            // remaining = 0;
            setRequests(remaining)
            console.log(remaining)

            if(remaining === 0){
                toggleError(true, "Sorry, you have exceeded your hourly rate limit!")
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    function toggleError(show, msg){
        setError({show,msg})
    }

    useEffect(()=> {
        checkRequests();
    }, [])

    return (
        <GithubContext.Provider value={{githubUser, followers, repos, requests, error}}>
            {children}
        </GithubContext.Provider>
    )
}

export {GithubContext, GithubProvider}