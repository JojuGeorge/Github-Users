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

    const searchGithubUser = async(user)=>{
        // toggle error, so that after getting an error if again searched for correct user then by default error = false and msg=""
        toggleError();
        // toto setLoading true
        const response = await axios(`${rootUrl}/users/${user}`)
        .catch(err => console.log(err));

        if(response){
            setGithubUser(response.data)
        }else{
            toggleError(true, "There is no user with that userName")
        }
    }

    const checkRequests = ()=>{
        axios
        .get(`${rootUrl}/rate_limit`)
        .then(({data}) => {
            let {rate:{remaining}} = data;

            setRequests(remaining)

            if(remaining === 0){
                toggleError(true, "Sorry, you have exceeded your hourly rate limit!")
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    function toggleError(show=false, msg=''){
        setError({show,msg})
    }

    useEffect(()=> {
        checkRequests();
    }, [])

    return (
        <GithubContext.Provider value={{githubUser, followers, repos, requests, error, searchGithubUser}}>
            {children}
        </GithubContext.Provider>
    )
}

export {GithubContext, GithubProvider}