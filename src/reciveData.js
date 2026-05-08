export const getUserData = async (user) => {
    
    const apiResponse = await fetch(`http://localhost:3000/${user}`)
    const userData =  await apiResponse.json();

    return userData
}

