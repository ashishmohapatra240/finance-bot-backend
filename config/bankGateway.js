const makePayment = async (accountNumber, amount) => {




    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.05) {
                resolve({
                    status: 'success',
                    message: `Amount of $${amount} has been deposited to account: ${accountNumber}.`
                });
            } else {
                reject(new Error('Transaction failed. Please try again.'));
            }
        }, 1000);
    });
};

module.exports = {
    makePayment
};
