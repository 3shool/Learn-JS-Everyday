const fetchData = () => {
    const promise = new Promise((resolvedFunc, rejectFunc) => {
        setTimeout(() => {
            console.log('Hii');
        }, 5000);
        resolvedFunc('Successful');
    });
    return promise;
}



fetchData().then(data => data).catch(data => data);