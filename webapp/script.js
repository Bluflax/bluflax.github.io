const btnfloat = document.getElementById('btnfloat');
btnfloat.addEventListener('click', function() {
    btnfloat.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btnfloat.transform = 'scale(1)';
    }, 300);
    window.location.href = 'https://bflstree.com';
})
