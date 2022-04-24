document.getElementById('loan-form').addEventListener('submit', function (e) {
    // Hide results
    document.getElementById('results').style.display = 'none';
    // Show loader
    document.getElementById('loading').style.display = 'block';
    // Show loader for two seconds
    setTimeout(calculateResults, 2000);




  e.preventDefault()
})

function calculateResults () {
  // UI variables
  const UIamount = document.getElementById('amount')
  const UIinterest = document.getElementById('interest')
  const UIyears = document.getElementById('years')
  const UImonthlyPayment = document.getElementById('monthly-payment')
  const UItotalPayment = document.getElementById('total-payment')
  const UItotalInterest = document.getElementById('total-interest')

  // Value variables to be used in calculation
  const principal = parseFloat(UIamount.value)
  const calculatedIntereest = parseFloat(UIinterest.value) / 100 / 12
  const calculatedPayments = parseFloat(UIyears.value) * 12

  // Calculate monthly payments
  const x = Math.pow(1 + calculatedIntereest, calculatedPayments)
  const monthly = (principal * x * calculatedIntereest) / (x - 1)

  // Determine if finite number ( Validation)
  if (isFinite(monthly)) {
    UImonthlyPayment.value = monthly.toFixed(2)
    UItotalPayment.value = (monthly * calculatedPayments).toFixed(2)
    UItotalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
    // Show results
    document.getElementById('results').style.display = 'block';
    // Hide loader
    document.getElementById('loading').style.display = 'none';
  } else {
    // Create error ------
    showError('Please check your numbers.')
  }
}

// Show Error Function - using createElement
function showError (error) {
  // Create a div
  const errorDiv = document.createElement('div')

  // Get elements
  const card = document.querySelector('.card')
  const heading = document.querySelector('.heading')

  // Add class
  errorDiv.className = 'alert alert-danger'

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error))

  // Insert error above heading - usng insertBefore DOM method and class names
  card.insertBefore(errorDiv, heading)

  // Clear error after 3 sec
  setTimeout(clearError, 3000)
}

// ClearError function
function clearError () {
  document.querySelector('.alert').remove()
}
