document.querySelectorAll('g').forEach(area => {
    area.addEventListener('mouseover', () => {
        document.querySelector('.redTextImage').style.opacity = '0';
    });

    area.addEventListener('mouseout', () => {
        document.querySelector('.redTextImage').style.opacity = '1';
    });
});

