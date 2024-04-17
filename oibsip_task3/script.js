const fahrenheitInput = document.getElementById('fahrenheitInput');
    const celsiusInput = document.getElementById('celsiusInput');
    const kelvinInput = document.getElementById('kelvinInput');

    function updateCelsiusAndKelvin() {
      const fahrenheit = parseFloat(fahrenheitInput.value);
      const celsius = (fahrenheit - 32) * 5/9;
      const kelvin = celsius + 273.15;

      celsiusInput.value = isNaN(celsius) ? '' : celsius.toFixed(2);
      kelvinInput.value = isNaN(kelvin) ? '' : kelvin.toFixed(2);
    }

    function updateFahrenheitAndKelvin() {
      const celsius = parseFloat(celsiusInput.value);
      const fahrenheit = (celsius * 9/5) + 32;
      const kelvin = celsius + 273.15;

      fahrenheitInput.value = isNaN(fahrenheit) ? '' : fahrenheit.toFixed(2);
      kelvinInput.value = isNaN(kelvin) ? '' : kelvin.toFixed(2);
    }

    function updateFahrenheitAndCelsius() {
      const kelvin = parseFloat(kelvinInput.value);
      const celsius = kelvin - 273.15;
      const fahrenheit = (celsius * 9/5) + 32;

      fahrenheitInput.value = isNaN(fahrenheit) ? '' : fahrenheit.toFixed(2);
      celsiusInput.value = isNaN(celsius) ? '' : celsius.toFixed(2);
    }

    fahrenheitInput.addEventListener('input', updateCelsiusAndKelvin);
    celsiusInput.addEventListener('input', updateFahrenheitAndKelvin);
    kelvinInput.addEventListener('input', updateFahrenheitAndCelsius);