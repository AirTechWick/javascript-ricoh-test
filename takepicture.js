const body = {
    "name": "camera.takePicture",
    "parameters": {}
}

const response = await fetch('https://fake-theta.vercel.app/osc/commands/execute', 
    {method: 'POST', 
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json;charset=utf-8'}
});

const data = await response.json();

console.log(data);
