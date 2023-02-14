document.getElementById('btn-apply').addEventListener('click', function () {
    const couponCode = getInputValueById('input-value');
    const previousPrice = getTextElementValueById('primary-price');
    // do not verify like this at client side
    if (couponCode !== 'DISC30') {
        alert('Invalid coupon.');
        setTextElementValueById('final-price', previousPrice);
        return;
    }
    const discountPercent = getTextElementValueById('discount-percent');
    const discountAmount = (discountPercent / 100) * previousPrice;
    const finalPrice = previousPrice - discountAmount;
    setTextElementValueById('final-price', finalPrice);
});