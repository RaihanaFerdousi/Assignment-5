const donationBtn = document.getElementById('donationBtn');
const historyBtn = document.getElementById('historyBtn');
const donationSection = document.getElementById('donationSection');
const historySection = document.getElementById('historySection');

donationBtn.addEventListener('click', function(){
    donationSection.style.display = 'block';
    historySection.style.display = 'none';

    donationBtn.style.backgroundColor = '#B4F461';
    donationBtn.style.color = 'black';
    donationBtn.style.border = 'none';

    historyBtn.style.backgroundColor = 'white';
    historyBtn.style.color = '#404040';
    historyBtn.style.border = '2px solid #404040';
})

historyBtn.addEventListener('click', function(){
    donationSection.style.display = 'none';
    historySection.style.display = 'block';

    historyBtn.style.backgroundColor = '#B4F461';
    historyBtn.style.color = 'black';
    historyBtn.style.border = 'none';

    donationBtn.style.backgroundColor = 'white';
    donationBtn.style.color = '#404040';
    donationBtn.style.border = '2px solid #404040';
})



// Function to handle the donation process
function handleDonation(donationIndex) {
    const donatedMoneyText = document.getElementsByClassName('money-donated')[donationIndex].textContent.replace(' BDT', '');
    const donatedMoney = parseFloat(donatedMoneyText);

    const amountInput = document.getElementsByClassName('donated-amount')[donationIndex]; // Get the input element
    const amountDonated = parseFloat(amountInput.value);

    if (isNaN(amountDonated)) {
        alert('Please enter a valid number for donation!');
    } else if (amountDonated < 0) {
        alert('Donation amount cannot be negative!');
    } else {
        const totalDonatedMoney = donatedMoney + amountDonated;
        document.getElementsByClassName('money-donated')[donationIndex].textContent = totalDonatedMoney + ' BDT';

        const totalMoneyText = document.getElementById('total-donations').textContent.replace(' BDT', '');
        const totalMoney = parseFloat(totalMoneyText);

        const newTotalMoney = totalMoney - amountDonated;

        document.getElementById('total-donations').textContent = newTotalMoney + ' BDT';

        amountInput.value = '';
    }
}


function initializeDonationButtons() {
    const donationButtons = document.getElementsByClassName('submitDonation');

    for (let i = 0; i < donationButtons.length; i++) {
        donationButtons[i].addEventListener('click', function() {
            handleDonation(i);
        });
    }
}

initializeDonationButtons();



// Flood Donation History
function FloodDonationHistory() {
    const donationHistoryCreate = document.createElement('div');
    donationHistoryCreate.classList.add('border', 'border-2', 'border-gray-200', 'mb-5', 'p-10', 'rounded-2xl');

    const totalMoneyText = document.getElementById('total-donations').textContent.replace(' BDT', '');
    const totalMoney = parseFloat(totalMoneyText);

    donationHistoryCreate.innerHTML = `
    <h2 class="font-bold text-2xl mb-3">${totalMoney} Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
    <p class="text-[#404040]">Date: ${new Date().toString()}</p>`;

    document.getElementById('floodDonation').appendChild(donationHistoryCreate);
}

const FloodBtn = document.getElementById('floodDonationBtn');
FloodBtn.addEventListener('click', FloodDonationHistory);


// Flood Relief History
function FloodReliefDonationHistory() {
    const donationHistoryCreate = document.createElement('div');
    donationHistoryCreate.classList.add('border', 'border-2', 'border-gray-200', 'mb-5', 'p-10', 'rounded-2xl');

    const totalMoneyText = document.getElementById('total-donations').textContent.replace(' BDT', '');
    const totalMoney = parseFloat(totalMoneyText);

    donationHistoryCreate.innerHTML = `
    <h2 class="font-bold text-2xl mb-3">${totalMoney} Taka Donated for Flood Relief in Feni,Bangladesh</h2>
    <p class="text-[#404040]">Date: ${new Date().toString()}</p>`;

    document.getElementById('floodReliefDonation').appendChild(donationHistoryCreate);
}

const FloodReliefBtn = document.getElementById('floodReliefBtn');
FloodReliefBtn.addEventListener('click', FloodReliefDonationHistory);



// Aid Injured Movement
function aidInjured() {
    const donationHistoryCreate = document.createElement('div');
    donationHistoryCreate.classList.add('border', 'border-2', 'border-gray-200', 'mb-5', 'p-10', 'rounded-2xl');

    const totalMoneyText = document.getElementById('total-donations').textContent.replace(' BDT', '');
    const totalMoney = parseFloat(totalMoneyText);

    donationHistoryCreate.innerHTML = `
    <h2 class="font-bold text-2xl mb-3">${totalMoney} Taka Aid for Injured in the Quota Movement</h2>
    <p class="text-[#404040]">Date: ${new Date().toString()}</p>`;

    document.getElementById('aidInjuredDonation').appendChild(donationHistoryCreate);
}

const aidInjuredBtn = document.getElementById('aidInjuredBtn');
aidInjuredBtn.addEventListener('click', aidInjured);

