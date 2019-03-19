
//business logic


function Deposit(name, deposit) {
  this.name = name;
  this.deposit = deposit;
  this.amount = amount;
  this.withdrawl = withdrawl;
}


Deposit.prototype.Combine = function() {
  return this.deposit += (this.amount - this.withdrawal);
};



// user interface logic
$(document).ready(function() {
  $("form#bank").submit(function(event) {

    debugger;
    event.preventDefault();



    var name = $("input#name").val();
    var deposit = $("input#deposit").val();
    var amount = $("input#amount").val();
    var withdrawl = $("input#withdrawl").val();

    var newDeposit = new Deposit(deposit, amount, withdrawl)
    var sum = (this.deposit += (this.amount - this.withdrawal))

    if ( this.withdrawl = ("" || 0)) {
      $("#answer").append(this.deposit + this.amount);
    } else  {
      $("#answer").append(sum);

    }

      $("#result").show();

    // $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    //
    // $(".contact").last().click(function() {
    //   $("#show-contact").show();
    //   $("#show-contact h2").text(newContact.firstName);
    //   $(".first-name").text(newContact.firstName);
    //   $(".last-name").text(newContact.lastName);
    // });
});
    $("input#name").val();
    $("input#deposit").val();
    $("input#amount").val();
    $("input#withdrawl").val();

});
