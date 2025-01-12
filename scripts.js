document.querySelectorAll('g').forEach(area => {
    area.addEventListener('mouseover', () => {
        document.querySelector('.redTextImage').style.opacity = '0';
        document.body.style.backgroundColor = 'rgb(213, 36, 30)';
                // Change footer text color & background color 
        document.querySelector('.footer').style.color = 'rgb(213, 36, 30)';
        document.querySelector('.footer').style.backgroundColor = 'black'; 

    });

    area.addEventListener('mouseout', () => {
        document.querySelector('.redTextImage').style.opacity = '1';
        document.body.style.backgroundColor = 'black';
        // Change footer text color & background color 
        document.querySelector('.footer').style.color = 'black'; 
        document.querySelector('.footer').style.backgroundColor = 'rgb(213, 36, 30)';
        
    });
});
