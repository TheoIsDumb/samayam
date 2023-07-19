let data;

setInterval(() => {
    data = new Date().toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  time.innerText = data;
}, 1000);

const time = document.createElement('span')
time.style.cssText = "color: white; background-color: #131313; font-family: monospace; font-weight: bold; padding: 0.1rem 0.5rem; border-radius: 0 0 0.3rem 0.3rem; position: fixed; top: 0; left: 50%; transform: translateX(-50%); font-size: 0.8rem;"

document.body.appendChild(time)