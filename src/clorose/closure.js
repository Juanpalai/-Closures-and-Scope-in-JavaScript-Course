function greting()
{
    let userName = "Oscar"
    function displayUserName()
    {
        return `Hello ${userName}`
    }
    return displayUserName;
}

const g = greting();
console.log(g);
console.log(g());