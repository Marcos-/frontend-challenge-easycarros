const ApiService = {

    getVehicles: (token) => {
        return fetch('http://localhost:8181/vehicle', {
                mode: 'cors',
                method: "GET", 
                headers: {
                    "content-type": "application/json", 
                    'Access-Control-Allow-Origin':'*',
                    'Authorization': `Bearer ${token}`
                }, 
                
            })
            .then(res => {
                if (res.ok)
                    return res.json()
                else
                    return res
            });
    },

    postVehicle: (token, vehicle) => {
        return fetch('http://localhost:8181/vehicle', {
                mode: 'cors',
                method: "POST", 
                headers: {
                    "content-type": "application/json", 
                    'Access-Control-Allow-Origin':'*',
                    'Authorization': `Bearer ${token}`
                }, 
                body: vehicle
            })
            .then(res => {
                if (res.ok)
                    return res.json()
                else
                    return res
            });
    },

    deleteVehicle: (token, id) => {
        return fetch(`http://localhost:8181/vehicle/${id}`, {
                mode: 'cors',
                method: "DELETE", 
                headers: {
                    "content-type": "application/json", 
                    'Access-Control-Allow-Origin':'*',
                    'Authorization': `Bearer ${token}`
                }, 
            })
            .then(res => res);
    },

    postAuth: (user) => {
        return fetch('http://localhost:8181/auth', {
                mode: 'cors',
                method: "POST", 
                headers: {"content-type": "application/json", 'Access-Control-Allow-Origin':'*'}, 
                body: user
            })
            .then(res => {
                if (res.ok)
                    return res.json()
                else
                    return res
            });
    }
}
export default ApiService;