const nodemailer = require('nodemailer');

module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'nepwheels2@gmail.com',
            pass: 'stardustgirl0515'
        }
    });


    const mailOptions = {
        from: '"EZWheels" <nepwheels2@gmail.com>',
        to: formulario.email,
    subject: 'Confirmación de renta de vehículo',
        html: 'Hola señor(a) ' + formulario.nombre +' '+ formulario.asunto+ ' , su reserva ha sido realizada con exito<br><br><b> Gracias por usar EZWheels <3</b>'
};


    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });

}
