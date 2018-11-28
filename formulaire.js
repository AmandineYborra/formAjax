$(document).ready(function() {
    var value, number, name, firstName, age, profession, email, phone;
    var tab = [];

    $.ajax({
        type: "GET",
        url: "formulaire.xml",
        dataType: "xml",
        success: function xmlFunction(xml){

            $(xml).find('personn').each(function(){
                number = $(this).attr('number');
                tab.push(number);
                console.log(tab);
                name = $(this).find('name').text();
                firstName = $(this).find('firstName').text();

                $(".dropdown").append($('<option>', { value:number, text: firstName + " " + name}));
                });

            $('select').change(function(){
                value=this.value
                var i = tab.indexOf(value)
                name = xml.getElementsByTagName("name")[i].firstChild.nodeValue
                firstName = xml.getElementsByTagName("firstName")[i].firstChild.nodeValue;
                age = xml.getElementsByTagName("age")[i].firstChild.nodeValue;
                profession = xml.getElementsByTagName("profession")[i].firstChild.nodeValue;
                email = xml.getElementsByTagName("email")[i].firstChild.nodeValue;
                phone = xml.getElementsByTagName("phone")[i].firstChild.nodeValue;
                
                $(".selectedCustomer").html(
                    "Nom : " + name + "<br>" +
                    "Prénom : " + firstName + "<br>" +
                    "Age : " + age + "<br>" +
                    "Profession : " + profession + "<br>" +
                    "Email : " + email + "<br>" +
                    "Téléphone : " + phone);
            })
        },
        error : function(){
            alert("404 Not Found")
        }
    });

});