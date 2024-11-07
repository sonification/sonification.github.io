document.querySelectorAll('g').forEach(area => {
    area.addEventListener('mouseover', () => {
        document.querySelector('.redTextImage').style.opacity = '0';
        document.body.style.backgroundColor = 'rgb(213, 36, 30)';
    });

    area.addEventListener('mouseout', () => {
        document.querySelector('.redTextImage').style.opacity = '1';
        document.body.style.backgroundColor = 'black';
    });
});
