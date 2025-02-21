document.addEventListener('DOMContentLoaded', function () {
    const depositTypeSelect = document.getElementById('depositType');
    const depositTermSelect = document.getElementById('depositTerm');
    const depositAmountInput = document.getElementById('depositAmount');
    const calculateButton = document.getElementById('calculateButton');
    const resultDiv = document.getElementById('result');
    const form = document.getElementById('depositForm');

    // Данные по вкладам 
    const depositRates = {
        "Пополняемый": {
            "6 месяцев - 20%": 0.20,
            "1 год - 22%": 0.22,
            "1,5 года - 15%": 0.15,
            "2 года - 10%": 0.10
        },
        "Срочный": {
            "3 месяца - 20%": 0.20,
            "6 месяцев - 22%": 0.22,
            "9 месяцев - 23%": 0.23,
            "1 год - - 24%": 0.24,
            "1,5 года - 18%": 0.18,
            "2 года - 15%": 0.15
        }
    };

    // Функция для обновления списка сроков вклада
    function updateDepositTerms() {
        const selectedDepositType = depositTypeSelect.value;
        depositTermSelect.innerHTML = '<option value="">Выберите срок вклада</option>'; // Clear existing options

        if (selectedDepositType) {
            const terms = Object.keys(depositRates[selectedDepositType]);
            terms.forEach(term => {
                const option = document.createElement('option');
                option.value = term;
                option.textContent = term;
                depositTermSelect.appendChild(option);
            });
        }
    }

    // Обработчик события изменения типа вклада
    depositTypeSelect.addEventListener('change', updateDepositTerms);

    // Обработчик события нажатия кнопки "Рассчитать"
    calculateButton.addEventListener('click', function () {
        if (form.checkValidity()) {
            const depositType = depositTypeSelect.value;
            const depositTerm = depositTermSelect.value;
            const depositAmount = parseFloat(depositAmountInput.value);

            if (!depositType || !depositTerm || isNaN(depositAmount)) {
                alert("Пожалуйста, заполните все поля."); // Можно заменить на более красивое отображение ошибок
                return;
            }

            const annualRate = depositRates[depositType][depositTerm];
            const termInMonths = convertTermToMonths(depositTerm);
            const monthlyRate = annualRate / 12;
            const finalAmount = depositAmount * (1 + monthlyRate * termInMonths);

            const resultText = `Вклад "${depositType}" на срок "${depositTerm}" на сумму ${depositAmount.toFixed(2)} руб.\nВ конце срока вы получите ${finalAmount.toFixed(2)} руб.`;
            resultDiv.textContent = resultText;
        } else {
            form.reportValidity(); // 
        }
    });

    // Функция для преобразования срока вклада в месяцы 
    function convertTermToMonths(term) {
        if (term.includes("месяц")) {
            return parseInt(term);
        } else if (term.includes("год")) {
            const years = parseFloat(term);
            return years * 12;
        }
        return 0; 
    }
});