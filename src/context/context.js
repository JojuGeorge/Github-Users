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
    const [isLoading, setIsLoading] = useState(false);    // Setup in Dashboard only, below search bar
    const [error, setError] = useState({show:false, msg:""})

    const searchGithubUser = async(user)=>{
        // toggle error, so that after getting an error if again searched for correct user then by default error = false and msg=""
        toggleError();
        setIsLoading(true); // shows loading screen
        const response = await axios(`${rootUrl}/users/${user}`)
        .catch(err => console.log(err));

        if(response){
            setGithubUser(response.data);

            const {repos_url, followers_url} = response.data;

            // axios(`${repos_url}?per_page=100`)
            // .then(response=> setRepos(response.data))

            // axios(`${followers_url}?per_page=100`)
            // .then(response => setFollowers(response.data))
            
            // so that we are displaying the data when we get everything, else data is loading in diff time
            await Promise.allSettled(
                [ axios(`${repos_url}?per_page=100`),
                  axios(`${followers_url}?per_page=100`)
                ])
            .then((results)=> {
                const [repos, followers] = results;
                const status = 'fulfilled';

                if(repos.status === status){
                    setRepos(repos.value.data)
                }
                if(followers.status === status){
                    setFollowers(followers.value.data)
                }
            })
            .catch(err => console.log(err))
      
        }else{
            toggleError(true, "There is no user with that userName")
        }
        checkRequests();
        setIsLoading(false)

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
        <GithubContext.Provider value={{githubUser, followers, repos, requests, error, searchGithubUser, isLoading,}}>
            {children}
        </GithubContext.Provider>
    )
}

export {GithubContext, GithubProvider}