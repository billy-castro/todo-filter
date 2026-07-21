const todoFilter = async () =>  {

    try{
        const response  = await fetch("https://jsonplaceholder.typicode.com/todos");
        const  data =  await response.json();
        


        const titleData = data.filter(({ completed }) => completed === true).map(({ title }) => title)
        
        console.log(titleData.slice(0, 5));
    } catch(error) {
        console.log("Error:", error);
    }

}

todoFilter();