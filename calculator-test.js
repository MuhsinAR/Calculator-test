
it('should calculate the monthly rate correctly', function () {
  
  const values = {
    amount: 10000,
    years: 10,
    rate: 10.0
  };
  expect(calculateMonthlyPayment(values)).toEqual('132.00');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10000,
    years: 10,
    rate: 10.0
  };
  expect(calculateMonthlyPayment(values)).toEqual('132.00');
});