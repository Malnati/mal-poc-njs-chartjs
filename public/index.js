const doughnut = (data) => {
    var doughnutCtx = document.getElementById('myDoughnutChart');
    const myDoughnutChart = new Chart(doughnutCtx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Doughnut Chart'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });
}

const pizza = (data) => {
    var pizzaCtx = document.getElementById('myPizzaChart');
    const myPizzaChart = new Chart(pizzaCtx, {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Pie Chart'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });
}

window.onload = () => {
    let body = document.getElementsByTagName('body')[0];
    $.getJSON('/data', function (data) {
        if (data) {
            pizza(data);
            doughnut(data);
        }
    });
}