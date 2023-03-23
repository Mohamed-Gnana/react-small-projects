const initState = {
    posts : [
        {id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body : "sunt aut facere repellat provident occaecati excepturi optio reprehenderit sunt aut facere repellat provident occaecati excepturi optio reprehenderit sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
        },
        {id: 2,
        title: "qui est esse",
        body : "qui est esse qui est esse qui est esse qui est esse qui est esse qui est esse qui est esse"
        },
        {id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        }
    ]
}

function rootReducer (state = initState , action){
    if (action.type === "Delete_Post"){
        let newPosts = state.posts.filter(post => post.id !== action.id);
        return {
            ...state,
            posts : newPosts
        }
    }
    return state;
}

export default rootReducer ;