var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'My First Dataset',
            data: [29, 71],
            backgroundColor: [
            'rgb(0,139,139)',
            'rgb(128, 97, 128)',
            
            ],
            hoverOffset: 4
        }]
    },
});