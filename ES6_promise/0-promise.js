export default function getResponseFromAPI() {
    const promise = new Promise(() => {
	const success = true;
	if (success) {
	    return true;
	}else{
	    return false;
	}	
    });
    return promise;
}
