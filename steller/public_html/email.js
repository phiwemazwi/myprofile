function sendMail(){
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_wgxax79";
    const templateID = "template_b9po54b";
    
    emailjs.send(serviceID,templateID,params)
    .then(
        res =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert(" Email has been sent successfully!")
        }
    )
    .catch(error=>console.log(error));
}