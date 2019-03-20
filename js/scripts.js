
//business logic


function Deposit(name, deposit, amount,withdrawl) {
  this.name = name;
  this.deposit = deposit;
  this.amount = amount;
  this.withdrawl = withdrawl;
}


Deposit.prototype.Combine = function() {
  return this.name + " " + this.deposit + "$" ;
};



// user interface logic
$(document).ready(function() {
  $("form#bank").submit(function(event) {

    // debugger;
    event.preventDefault();



    var name = $("input#name").val();
    var deposit = parseInt($("input#deposit").val());
    var amount =parseInt( $("input#amount").val());
    var withdrawl =parseInt( $("input#withdrawl").val());

    var newDeposit = new Deposit(name, deposit)
    var sum = (this.deposit)
    if (name === "" ) {
      alert("Enter a name");
    }else if ( withdrawl > 0 && amount > 0 ) {
      $(".result").text(deposit - withdrawl + amount);
      // alert("its working1");
    }else if ( withdrawl > 0) {
      $(".result").text(deposit - withdrawl);
      // alert("its working2");
    }else if ( amount > 0) {
      $(".result").text(deposit + amount);
      // alert("its working3");
    }
    else  {
      $(".result").text(deposit);
    }

      // $("ul.result").append("<li>" + name + "</li>");

    // $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    //
    // $(".contact").last().click(function() {
      $("#result").show();
    //   $("#show-contact h2").text(newContact.firstName);
    //   $(".first-name").text(newContact.firstName);
    //   $(".last-name").text(newContact.lastName);
    // });
});
    // $("input#name").val();
    // $("input#deposit").val();
    // $("input#amount").val();
    // $("input#withdrawl").val();

});
