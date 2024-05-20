
function updateCard() {
    const name = document.getElementById('name').value;
    const companyName = document.getElementById('companyName').value;
    const website = document.getElementById('website').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const logo = document.getElementById('logo').files[0];
    const textColor = document.getElementById('textColor').value;

    document.getElementById('displayNameBack').textContent = name || 'Your Name';
    document.getElementById('displayCompanyNameBack').textContent = companyName || 'Company Name';
    document.getElementById('displayWebsiteBack').textContent = website || 'Company Website';
    document.getElementById('displayPhoneBack').textContent = phone || 'Phone Number';
    document.getElementById('displayEmailBack').textContent = email || 'Company Email';

    const colorOption = document.querySelector('input[name="colorOption"]:checked').value;

    if (colorOption === 'solid') {
        const bgColor = document.getElementById('bgColor').value;
        document.getElementById('front').style.background = bgColor;
        document.getElementById('back').style.background = bgColor;
    } else if (colorOption === 'gradient') {
        const bgGradientStart = document.getElementById('bgGradientStart').value;
        const bgGradientEnd = document.getElementById('bgGradientEnd').value;
        const gradientStyle = `linear-gradient(135deg, ${bgGradientStart}, ${bgGradientEnd})`;
        document.getElementById('front').style.background = gradientStyle;
        document.getElementById('back').style.background = gradientStyle;
    }

    document.getElementById('front').style.color = textColor;
    document.getElementById('back').style.color = textColor;

    if (logo) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const displayLogo = document.getElementById('displayLogo');
            displayLogo.src = e.target.result;
            displayLogo.style.display = 'block';
            document.getElementById('displayLogoContainer').style.display = 'block';
        };
        reader.readAsDataURL(logo);
    } else {
        document.getElementById('displayLogo').style.display = 'none';
        document.getElementById('displayLogoContainer').style.display = 'none';
    }
}

function updateColorOptions() {
    const colorOption = document.querySelector('input[name="colorOption"]:checked').value;
    if (colorOption === 'solid') {
        document.getElementById('solidColorInput').style.display = 'block';
        document.getElementById('gradientColorInput').style.display = 'none';
    } else if (colorOption === 'gradient') {
        document.getElementById('solidColorInput').style.display = 'none';
        document.getElementById('gradientColorInput').style.display = 'block';
    }
}

function resetCard() {
    document.querySelector("form").reset();
    document.getElementById('displayNameBack').textContent = 'Your Name';
    document.getElementById('displayCompanyNameBack').textContent = 'Company Name';
    document.getElementById('displayWebsiteBack').textContent = 'Company Website';
    document.getElementById('displayPhoneBack').textContent = 'Phone Number';
    document.getElementById('displayEmailBack').textContent = 'Company Email';
    document.getElementById('displayLogo').style.display = 'none';
    document.getElementById('displayLogoContainer').style.display = 'none';
    document.getElementById('front').style.background = '#007bff';
    document.getElementById('back').style.background = '#333';
    document.getElementById('front').style.color = '#fff';
    document.getElementById('back').style.color = '#fff';
}

function resetPage() {
    window.location.reload();
}